import { resolveLocale, type Locale } from "../domain/locale";
import type { BrowserLanguages, LanguagePreference } from "./ports";

interface StartLocaleDependencies {
  readonly preference: LanguagePreference;
  readonly browserLanguages: BrowserLanguages;
}

export function startLocale({ preference, browserLanguages }: StartLocaleDependencies): Locale {
  return preference.read() ?? resolveLocale(browserLanguages.list());
}

export function selectLocale(preference: LanguagePreference, locale: Locale): Locale {
  preference.write(locale);
  return locale;
}
