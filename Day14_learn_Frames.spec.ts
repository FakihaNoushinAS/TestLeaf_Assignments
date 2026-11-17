import test from "@playwright/test";

test("Test to learn Frames", async ({page})=>{

await page.goto("https://leafground.com/frame.xhtml");

const nestedFrame=page.frameLocator("[src='page.xhtml']");
const innerframe=nestedFrame.frameLocator("[src='framebutton.xhtml']");

await innerframe.getByRole("button", { name: "Click Me" }).click();

await page.waitForTimeout(10000);


})