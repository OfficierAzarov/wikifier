import { isLocale, type Locale } from "../../../domain/locale";

/** What the shell needs from the internationalisation, wired by `main.ts`: an adapter never imports another. */
export interface ShellTranslation {
  readonly texts: { readonly languageLabel: string };
  /** Every supported language, named in its own language. */
  readonly languages: readonly { readonly locale: Locale; readonly name: string }[];
}

export interface ShellOptions {
  readonly locale: Locale;
  readonly translate: (locale: Locale) => ShellTranslation;
  /** Remembers the chosen language and returns the locale to show. */
  readonly select: (locale: Locale) => Locale;
}

/**
 * Builds the shell once and updates its texts in place, so the language selector
 * keeps the focus when the language changes.
 */
export function mountShell(root: HTMLElement, { locale, select, translate }: ShellOptions): void {
  const document = root.ownerDocument;

  const heading = document.createElement("h1");
  heading.textContent = "Wiki3";

  const label = document.createElement("label");
  const selector = document.createElement("select");
  selector.id = "language";
  label.htmlFor = selector.id;
  for (const language of translate(locale).languages) {
    const option = document.createElement("option");
    option.value = language.locale;
    option.lang = language.locale;
    option.textContent = language.name;
    selector.append(option);
  }

  const header = document.createElement("header");
  header.append(heading, label, selector);
  root.replaceChildren(header, document.createElement("main"));

  const show = (shown: Locale) => {
    document.documentElement.lang = shown;
    label.textContent = translate(shown).texts.languageLabel;
    selector.value = shown;
  };
  selector.addEventListener("change", () => {
    if (isLocale(selector.value)) show(select(selector.value));
  });
  show(locale);
}
