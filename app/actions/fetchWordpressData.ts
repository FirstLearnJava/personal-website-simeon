import puppeteer from 'puppeteer';

export default async function fetchWordpressData(byPassedUrl) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Navigate to the endpoint URL
  await page.goto(byPassedUrl, {
    waitUntil: 'networkidle2',
  });

  // Optionally, wait for a specific element or a timeout if needed
  // await page.waitForTimeout(1000);

  // Get the content from the page
  const content = await page.evaluate(() => document.body.innerText);

  await browser.close();

  try {
    const data = JSON.parse(content);
    return data;
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    return null;
  }
}

fetchWordpressData().then((data) => console.log(data));
