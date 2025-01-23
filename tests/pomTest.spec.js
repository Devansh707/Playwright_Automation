import { test, expect } from "@playwright/test";
import { loginpage } from "../pages/loginPage";
import { Homepage } from "../pages/Hompage";
import { CartPage } from "../pages/CartPage";

test("test", async ({ page }) => {
  // Login
  const login = new loginpage(page);
  await login.gotoLogin();
  await login.login("pavanol", "test@123");
  await page.waitForTimeout(3000);

  //   Homepage
  let home = new Homepage(page);
  await home.addProductToCart("Nexus 6");
  await page.waitForTimeout(3000);
  await home.gotToCart();

  //   Cart
  let cart = new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductName("Nexus 6");
  expect(status).toBe(true);
});
