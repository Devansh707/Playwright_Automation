exports.myntraHomePage = class myntraHomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = '//input[@class="desktop-searchBar"]';
    this.productList = '//h3[contains(@class, "product-brand")]';
    this.sortBy = '//div[@class="sort-sortBy"]';
    // this.ascedingSort = '//input[@type="radio" and @value="price_asc"]';
    // this.ascedingSort = this.page.getByText("Price: Low to High").first();
    this.ascedingSort = '//label[text()="Price: Low to High"]';

    // this.productPrices = '//span[contains(@class, "product-discountedPrice")]';
    this.productPrices = "span.product-discountedPrice";
  }

  async gotoMyntra() {
    try {
      await this.page.goto("https://www.myntra.com/");
    } catch (error) {
      console.error("Error occurred:", error.message);
      await this.page.screenshot({ path: "error-screenshot.png" });
    }

    await this.page.waitForTimeout(1000);
  }

  async searchProduct(prod) {
    await this.page.fill(this.searchInput, prod);
    await this.page.waitForTimeout(3000);
    await this.page.locator(this.searchInput).press("Enter");
    // await this.page.searchInput.press("Enter");
    await this.page.waitForTimeout(3000);
  }

  async verifyProducts(prod) {
    const products = await this.page.locator(this.productList).allInnerTexts();

    return products;
  }

  async sortByAscendingOrder() {
    await this.page.hover(this.sortBy);
    await this.page.waitForTimeout(3000);
    // await this.page.ascedingSort.click();
    await this.page.locator(this.ascedingSort).click();
    await this.page.waitForTimeout(3000);
  }

  async collectProductPrice() {
    let Prices = await this.page.locator(this.productPrices).allTextContents();
    console.log("Prices = ", Prices);

    let productPrices = [];
    for (let price of Prices) {
      productPrices.push(pricesText.replace(/Rs\s?|,/g, ""));
    }

    console.log("ProductPrices:", productPrices);
    await this.page.waitForTimeout(3000);
  }
};
