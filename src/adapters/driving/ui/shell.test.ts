// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Locale } from "../../../domain/locale";
import { mountShell, type ShellTranslation } from "./shell";

const translate = (locale: Locale): ShellTranslation => ({
  texts: { languageLabel: locale === "fr" ? "Langue" : "Language" },
  languages: [
    { locale: "fr", name: "Français" },
    { locale: "en", name: "English" },
  ],
});

function mount(locale: Locale) {
  document.documentElement.lang = "";
  document.body.innerHTML = '<div id="app"></div>';
  const select = vi.fn((chosen: Locale) => chosen);
  const root = document.querySelector<HTMLElement>("#app");
  if (root === null) throw new Error("test setup: missing root");
  mountShell(root, { locale, select, translate });
  const selector = document.querySelector<HTMLSelectElement>("select");
  const label = document.querySelector("label");
  if (selector === null || label === null) throw new Error("language selector not rendered");
  const choose = (value: string) => {
    selector.value = value;
    selector.dispatchEvent(new Event("change", { bubbles: true }));
  };
  return { select, selector, label, choose };
}

describe("mountShell", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("shows the name of the app as the main heading", () => {
    mount("fr");

    expect(document.querySelector("h1")?.textContent).toBe("Wiki3");
  });

  it("starts in the given locale", () => {
    const { selector, label } = mount("fr");

    expect(selector.value).toBe("fr");
    expect(label.textContent).toBe("Langue");
    expect(document.documentElement.lang).toBe("fr");
  });

  it("labels the selector with the language label", () => {
    const { selector, label } = mount("en");

    expect(label.htmlFor).toBe(selector.id);
    expect(selector.id).not.toBe("");
  });

  it("offers every language in its own language", () => {
    const { selector } = mount("en");

    const options = [...selector.options].map((option) => [
      option.value,
      option.textContent,
      option.lang,
    ]);

    expect(options).toEqual([
      ["fr", "Français", "fr"],
      ["en", "English", "en"],
    ]);
  });

  it("reports the chosen language and switches the interface at once", () => {
    const { select, label, choose } = mount("fr");

    choose("en");

    expect(select).toHaveBeenCalledExactlyOnceWith("en");
    expect(label.textContent).toBe("Language");
    expect(document.documentElement.lang).toBe("en");
  });

  it("keeps the focus on the selector when the language changes", () => {
    const { selector, choose } = mount("fr");
    selector.focus();

    choose("en");

    expect(document.activeElement).toBe(selector);
  });

  it("ignores a value that is not a supported language", () => {
    const { select, label, choose } = mount("fr");

    choose("de");

    expect(select).not.toHaveBeenCalled();
    expect(label.textContent).toBe("Langue");
  });
});
