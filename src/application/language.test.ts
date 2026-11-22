import { describe, expect, it } from "vitest";
import { createInMemoryLanguagePreference } from "../adapters/driven/language-preference/in-memory-language-preference";
import { selectLocale, startLocale } from "./language";
import type { BrowserLanguages } from "./ports";

const browserSpeaking = (...languages: string[]): BrowserLanguages => ({ list: () => languages });

describe("startLocale", () => {
  it("uses the language of the browser when nothing was chosen yet", () => {
    const preference = createInMemoryLanguagePreference();

    expect(startLocale({ preference, browserLanguages: browserSpeaking("fr-FR") })).toBe("fr");
  });

  it("falls back to English when the language of the browser is not supported", () => {
    const preference = createInMemoryLanguagePreference();

    expect(startLocale({ preference, browserLanguages: browserSpeaking("de-DE") })).toBe("en");
  });

  it("prefers the remembered choice over the language of the browser", () => {
    const preference = createInMemoryLanguagePreference("en");

    expect(startLocale({ preference, browserLanguages: browserSpeaking("fr-FR") })).toBe("en");
  });
});

describe("selectLocale", () => {
  it("remembers the choice for the next start", () => {
    const preference = createInMemoryLanguagePreference();

    selectLocale(preference, "en");

    expect(startLocale({ preference, browserLanguages: browserSpeaking("fr") })).toBe("en");
  });

  it("returns the chosen locale", () => {
    expect(selectLocale(createInMemoryLanguagePreference(), "fr")).toBe("fr");
  });
});
