import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const languageSelector = (page: Page, label: string) => page.getByLabel(label, { exact: true });

const wcagTags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

test.describe("interface language", () => {
  test.describe("with a French browser", () => {
    test.use({ locale: "fr-FR" });

    test("opens in French", async ({ page }) => {
      await page.goto("/");

      await expect(page.locator("html")).toHaveAttribute("lang", "fr");
      await expect(languageSelector(page, "Langue")).toHaveValue("fr");
    });

    test("has no accessibility violation", async ({ page }) => {
      await page.goto("/");
      await expect(languageSelector(page, "Langue")).toBeVisible();

      const results = await new AxeBuilder({ page }).withTags(wcagTags).analyze();

      expect(results.violations).toEqual([]);
    });
  });

  for (const locale of ["en-US", "de-DE"]) {
    test.describe(`with a ${locale} browser`, () => {
      test.use({ locale });

      test("opens in English", async ({ page }) => {
        await page.goto("/");

        await expect(page.locator("html")).toHaveAttribute("lang", "en");
        await expect(languageSelector(page, "Language")).toHaveValue("en");
      });
    });
  }

  test.describe("with an English browser", () => {
    test.use({ locale: "en-US" });

    test("has no accessibility violation", async ({ page }) => {
      await page.goto("/");
      await expect(languageSelector(page, "Language")).toBeVisible();

      const results = await new AxeBuilder({ page }).withTags(wcagTags).analyze();

      expect(results.violations).toEqual([]);
    });
  });

  test.describe("changing the language", () => {
    test.use({ locale: "fr-FR" });

    test("switches the interface at once and keeps the focus on the selector", async ({ page }) => {
      await page.goto("/");
      await languageSelector(page, "Langue").focus();

      await languageSelector(page, "Langue").selectOption("en");

      await expect(page.locator("html")).toHaveAttribute("lang", "en");
      await expect(languageSelector(page, "Language")).toHaveValue("en");
      await expect(languageSelector(page, "Language")).toBeFocused();
    });

    test("remembers the choice after a reload, over the browser language", async ({ page }) => {
      await page.goto("/");
      await languageSelector(page, "Langue").selectOption("en");

      await page.reload();

      await expect(page.locator("html")).toHaveAttribute("lang", "en");
      await expect(languageSelector(page, "Language")).toHaveValue("en");
    });

    test("stores the choice under its own key, apart from any page", async ({ page }) => {
      await page.goto("/");
      await languageSelector(page, "Langue").selectOption("en");

      const keys = await page.evaluate(() => Object.keys(localStorage));

      expect(keys).toEqual(["wiki3.language"]);
    });

    test("always shows the selector, even on a small screen", async ({ page }) => {
      await page.goto("/");

      await expect(languageSelector(page, "Langue")).toBeInViewport();
    });
  });
});
