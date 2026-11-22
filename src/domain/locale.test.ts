import fc from "fast-check";
import { describe, expect, it } from "vitest";
import { defaultLocale, isLocale, locales, resolveLocale } from "./locale";

describe("isLocale", () => {
  it("accepts every supported locale", () => {
    for (const locale of locales) expect(isLocale(locale)).toBe(true);
  });

  it("refuses anything else", () => {
    expect(isLocale("de")).toBe(false);
    expect(isLocale("fr-FR")).toBe(false);
    expect(isLocale("")).toBe(false);
  });
});

describe("resolveLocale", () => {
  it("falls back to English when no language is given", () => {
    expect(defaultLocale).toBe("en");
    expect(resolveLocale([])).toBe("en");
  });

  it("picks French for a French browser", () => {
    expect(resolveLocale(["fr"])).toBe("fr");
  });

  it("ignores the region and the letter case", () => {
    expect(resolveLocale(["fr-CA"])).toBe("fr");
    expect(resolveLocale(["FR"])).toBe("fr");
    expect(resolveLocale(["EN-gb"])).toBe("en");
  });

  it("falls back to English for an unsupported language", () => {
    expect(resolveLocale(["de-DE"])).toBe("en");
  });

  it("takes the first supported language of the list", () => {
    expect(resolveLocale(["de", "fr", "en"])).toBe("fr");
    expect(resolveLocale(["de", "en", "fr"])).toBe("en");
  });

  it("always returns a supported locale", () => {
    fc.assert(
      fc.property(fc.array(fc.string()), (languages) => {
        expect(locales).toContain(resolveLocale(languages));
      }),
    );
  });
});
