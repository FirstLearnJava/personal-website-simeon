import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const userData = await req.json();

    if (!userData) {
      return res.status(400).json({
        error:
          'Please check, if you provided your email, your first name and your last name.',
      });
    }

    const MailchimpKey = process.env.MAILCHIMP_API_KEY;
    const MailchimpServer = process.env.MAILCHIMP_API_SERVER;
    const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!MailchimpKey || !MailchimpServer || !MailchimpAudience) {
      throw new Error('Missing Mailchimp environment variables');
    }

    const customUrl = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;

    const response = await fetch(customUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${MailchimpKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: userData.email,
        //status has to be changed to "pending" for double-opt-in
        status: 'pending',
        merge_fields: {
          FNAME: userData.firstName,
          LNAME: userData.lastName,
        },
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData.detail });
    }

    const received = await response.json();
    return NextResponse.json(received);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
