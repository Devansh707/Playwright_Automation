const { test, expect } = require("@playwright/test");

// Async - Await in Tests -> JS is asynchronious Programming Language, to make synchronise we need Async/Await.
// async will make sure function return a promise
/* await will wait till the object returns promise*/

test("Home Page", async ({ page }) => {
  // Verify the title of the page is correct or not and also verify the URL is correct or not

  await page.goto("https://www.demoblaze.com/index.html");

  let pageTitle = await page.title();

  console.log("Page Title = ", pageTitle);
  await expect(page).toHaveTitle("STORE");
  let pageURL = page.url();
  console.log("Page URL = ", pageURL);
  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
  await page.close();
});
