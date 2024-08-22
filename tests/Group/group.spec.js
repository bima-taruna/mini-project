import { test, expect } from "@playwright/test";

const url = "https://mini-project-eight-pearl.vercel.app/v1";
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

  test("should return an object on form submission", async ({ page }) => {
    await page.locator(".primary").click();
    await expect(page.locator(".modal-overlay")).toBeVisible();
    await page.fill("#group-title", "Group Task 1");
    await page.fill("#group-desc", "January - March");

    await page.route(
      `process.env.VITE_API_URL/${process.env.VITE_API_URL}`,
      (route) => {
        const request = route.request();
        const requestBody = request.postDataJSON();

        expect(requestBody).toEqual({
          title: "Group Task 1",
          description: "January - March",
        });

        const headers = {
          ...request.headers(),
          Authorization: `${process.env.VITE_TOKEN}`,
        };

        route.continue({ headers });
      }
    );
  });
});
