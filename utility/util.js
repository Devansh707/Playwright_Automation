const { expect } = require("@playwright/test");

module.exports = {
  // Function to validate URL
  async validateURL(page, expectedURL) {
    const currentURL = page.url();
    expect(currentURL).toBe(expectedURL);
  },

  // Function to validate page title
  async validateTitle(page, expectedTitle) {
    const title = await page.title();
    expect(title).toBe(expectedTitle);
  },

  // Function to take a screenshot
  async takeScreenshot(page, fileName) {
    await page.screenshot({ path: `screenshots/${fileName}.png` });
  },

  // Function to wait for an element
  async waitForElement(page, selector, timeout = 5000) {
    await page.waitForSelector(selector, { timeout });
  },

  // Function to get all text from elements matching a selector
  async getAllTexts(page, selector) {
    return await page.locator(selector).allInnerTexts();
  },

  // Function to randomize a string
  generateRandomString(length = 10) {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  async verifyList(items, expectedItems) {
    let lowerCaseExpectedItem = expectedItems.toLowerCase();
    let lowerCaseItems = items.map((item) => item.toLowerCase());
    console.log("Lower case items:", lowerCaseItems);
    console.log("loweCase expected item", lowerCaseExpectedItem);
    const result = lowerCaseItems.every((item) =>
      item.includes(lowerCaseExpectedItem)
    );
    return result;
  },

  async verifyAscendingOrder(items) {
    let sortedItems = items.slice().sort((a, b) => a - b);
    return JSON.stringify(items) === JSON.stringify(sortedItems);
  },

  async verifyDescendingOrder(items) {
    let sortedItems = items.slice().sort((a, b) => b - a);
    return JSON.stringify(items) === JSON.stringify(sortedItems);
  },
};
