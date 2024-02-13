import { test } from "@playwright/test";

test("test browser", async ({ page }) => {
  // point this to wherever you want
  await page.goto("https://king-of-github.vercel.app/");

  // keep browser open
  await page.pause();
});
