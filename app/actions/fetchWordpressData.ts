const reqURL: string | undefined = process.env.CMS_API_URL;

export default async function fetchWordpressData() {
  if (reqURL) {
    const req = await fetch(reqURL, {
      cache: 'force-cache',
      next: { revalidate: 600 },
    });
    if (!req.ok) {
      req.status;
    }
    const data = await req.json();
    return data;
  }
}

//fetchWordpressData().then((data) => console.log(data));
