
// My first Playwrite program to launch the browser and open the url

import { test, chromium } from '@playwright/test';

// test name
test("To Launch the browser and open the url", async() =>{

let browser = await chromium.launch({headless:false});  // launch the browser in headless mode
let context = await browser.newContext();
let page = await context.newPage();

await page.goto ("https://claude.ai/new");   // open the url
await page.waitForTimeout(5000); // wait for 5 seconds
})