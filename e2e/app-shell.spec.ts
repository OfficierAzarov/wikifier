import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("app shell", () => {
  test("loads without errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));

    await page.goto("/");

    await expect(page).toHaveTitle("Wiki3");
    expect(errors).toEqual([]);
  });

  test("refuses to run inline scripts", async ({ page }) => {
    await page.goto("/");

    const inlineScriptRan = await page.evaluate(() => {
      const script = document.createElement("script");
      script.textContent = "document.body.dataset['inlineScriptRan'] = 'yes';";
      document.head.append(script);
      return document.body.dataset.inlineScriptRan === "yes";
    });

    expect(inlineScriptRan).toBe(false);
  });

  test("only allows images from the site itself or from https addresses", async ({ page }) => {
    await page.goto("/");

    const policy = await page
      .locator('meta[http-equiv="Content-Security-Policy"]')
      .getAttribute("content");

    expect(policy).toContain("img-src 'self' https:");
  });

  test("has no detectable accessibility violations", async ({ page }) => {
    await page.goto("/");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
});
