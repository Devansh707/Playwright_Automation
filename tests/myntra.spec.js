const { test, expect } = require("@playwright/test");
const { myntraHomePage } = require("../pages/myntraHomePage");
const utils = require("../utility/util");

test.describe("Myntra Test Suite", () => {
  test("TC-001 - Verify user is able to land on the website(Myntra) successfully.", async ({
    page,
  }) => {
    // Login
    const myntraPage = new myntraHomePage(page);
    await myntraPage.gotoMyntra();

    const title = await page.title();
    if (
      title !==
      "Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra"
    ) {
      await page.pause();
    }
    expect(title).toBe(
      "Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra"
    );
  });

  test("TC-004 - Verify User is able to filter search on the search bar", async ({
    page,
  }) => {
    const myntraPage = new myntraHomePage(page);
    await myntraPage.gotoMyntra();
    await myntraPage.searchProduct("Adidas Shoes");
    let products = await myntraPage.verifyProducts("Adidas Shoes");

    console.log(products);
    let verification = await utils.verifyList(products, "Adidas");
    console.log("Verification:", verification);
    expect(verification).toBe(true);
  });

  test(
    "TC-005 - Verify User is able to sort on Ascending Order",
    {
      tag: "@t5",
    },
    async ({ page }) => {
      const myntraPage = new myntraHomePage(page);
      await myntraPage.gotoMyntra();
      await myntraPage.searchProduct("Nike Shoes");
      await myntraPage.sortByAscendingOrder();
      await myntraPage.collectProductPrice();
    }
  );
});
