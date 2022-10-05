const fs = require('fs');
const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true
  });
  const page = await browser.newPage();
  const recorder = new PuppeteerScreenRecorder(page);
  await page.setDefaultNavigationTimeout(0);
  await recorder.start('./video/rec.mp4');
  await page.goto('https://giphy.com/');
  await new Promise(resolve => setTimeout(resolve, 1000));
  await recorder.stop();
  await browser.close();
})();
