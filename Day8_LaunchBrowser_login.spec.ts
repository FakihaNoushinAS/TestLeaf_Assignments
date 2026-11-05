//Playwright program to launch the browser and login to the application

import {chromium,test} from "@playwright/test";

test("To launch the browser and login to the application", async({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");  //open the url
    await page.getByRole('textbox', { name : 'Username'}).fill('Demosalesmanager');  //enter the username
    await page.getByRole('textbox', {name : 'Password'}).fill('crmsfa');  //enter the password
    await page.getByRole( 'button', {name: 'Login'}).click();  //click on login button
    await page.waitForTimeout(5000);  //wait for 5 seconds

})
