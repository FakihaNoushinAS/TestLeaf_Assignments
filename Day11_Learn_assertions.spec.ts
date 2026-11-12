import {test,expect} from "@playwright/test";

test("To learn assertions in playwright", async({page})=>{

   //load the url
   
    await page.goto("https://leaftaps.com/opentaps/control/main");

    //assertion to verify the title of the page
    await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Platform");

    //assertion to verify the URL of the page
    await expect(page).toHaveURL("https://leaftaps.com/opentaps/control/main");

    //assetion to verify of login button is visible on the page
    await expect(page.getByRole('button',{name:"Login"})).toBeVisible();
})