exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.noOfProducts = "//tbody[@id='tbodyid']//tr//td[2]";
  }

  async checkProductName(productName) {
    let productList = await this.page.$$(this.noOfProducts);
    for (let product in productList) {
      console.log(product.textContent());
      if (productName === product.textContent()) {
        return true;
      }
    }
  }
};
