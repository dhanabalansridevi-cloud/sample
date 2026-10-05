import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await 
  page.goto("http://www.saucedemo.com");
  await page.waitForTimeout(5000);
  await page.getByPlaceholder('username').fill('standard_user');
  await page.waitForTimeout(5000);
  await page.getByPlaceholder('password').fill('secret_sauce');
  await page.waitForTimeout(5000);
  await page.getByRole('button',{name:'login'}).click();
  await page.waitForTimeout(8000);
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  console.log('URL is correct');
  
});



