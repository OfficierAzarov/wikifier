import type { Locale } from "../domain/locale";

/** Remembers the interface language chosen by the utilisatrice. */
export interface LanguagePreference {
  read(): Locale | undefined;
  write(locale: Locale): void;
}

/** The languages the browser asks for, most wanted first. */
export interface BrowserLanguages {
  list(): readonly string[];
}
