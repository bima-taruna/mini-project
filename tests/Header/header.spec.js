import { test, expect } from "@playwright/test";

const url = process.env.VITE_BASE_URL;
test.describe("Header", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test("should have correct title", async ({ page }) => {
    await expect(page).toHaveTitle("Product Roadmap");
  });

  test("should have heading and button", async ({ page }) => {
    await expect(page.getByText("Product Roadmap")).toBeVisible();
    await expect(
      page.getByRole("button", {
        name: "+ Add New Group",
      })
    ).toBeVisible();
  });

  test("clicking button should open modal", async ({ page }) => {
    await page.locator(".primary").click();
    await expect(page.locator(".modal-overlay")).toBeVisible();
  });
});
