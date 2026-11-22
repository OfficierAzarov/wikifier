import { describe, expect, it } from "vitest";
import { locales } from "../../../domain/locale";
import { createTranslator } from "./translator";

const noonOnTheTwentySecond = new Date("2026-11-22T12:00:00Z");

describe("createTranslator", () => {
  it("gives the texts of its locale", () => {
    expect(createTranslator("fr").texts.languageLabel).toBe("Langue");
    expect(createTranslator("en").texts.languageLabel).toBe("Language");
  });

  it("remembers its locale", () => {
    for (const locale of locales) expect(createTranslator(locale).locale).toBe(locale);
  });

  it("names every language in that language, whatever the interface language", () => {
    const expected = [
      { locale: "fr", name: "Français" },
      { locale: "en", name: "English" },
    ];

    expect(createTranslator("fr").languages).toEqual(expected);
    expect(createTranslator("en").languages).toEqual(expected);
  });

  it("formats dates in the language of the interface", () => {
    expect(createTranslator("fr").formatDate(noonOnTheTwentySecond)).toBe("22 novembre 2026");
    expect(createTranslator("en").formatDate(noonOnTheTwentySecond)).toBe("November 22, 2026");
  });

  it("picks the plural form that the language of the interface uses", () => {
    const forms = { one: "one page", other: "several pages" };

    expect(createTranslator("en").plural(1, forms)).toBe("one page");
    expect(createTranslator("en").plural(0, forms)).toBe("several pages");
    expect(createTranslator("fr").plural(0, forms)).toBe("one page");
    expect(createTranslator("fr").plural(2, forms)).toBe("several pages");
  });

  it("uses the general form when the language has no specific one", () => {
    expect(createTranslator("fr").plural(1_000_000, { one: "one", other: "other" })).toBe("other");
  });
});
