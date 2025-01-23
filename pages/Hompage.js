exports.Homepage = class Homepage {
  constructor(page) {
    this.page = page;
    this.productList = '//div[@id="tbodyid"]//a[@class="hrefch"]';
    this.addToCartBtn = "//a[text()='Add to cart']";
    this.cartBtn = "#cartur";
  }

  async addProductToCart(productName) {
    let productList = await this.page.$$(this.productList);
    console.log(productList);
    for (let product in productList) {
      console.log(await product.textContent());
      if (productName === (await product.textContent())) {
        await product.click();
        break;
      }
    }
    await this.page.on("dialog", async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      if (dialog.message().includes("added")) {
        await dialog.accept(); // Accept the alert
      }
    });

    await this.page.locator(this.addToCartBtn).click();
  }

  async gotToCart() {
    await this.page.locator(this.cartBtn).click();
  }
};
