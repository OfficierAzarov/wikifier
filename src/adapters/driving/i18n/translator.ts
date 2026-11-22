import { locales, type Locale } from "../../../domain/locale";
import type { Dictionary } from "./dictionary";
import { en } from "./en";
import { fr } from "./fr";

// A `Record` over `Locale`: adding a locale without its dictionary does not compile.
const dictionaries: Record<Locale, Dictionary> = { fr, en };

type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & {
  readonly other: string;
};

export interface Translator {
  readonly locale: Locale;
  readonly texts: Dictionary;
  /** Every supported language, named in its own language. */
  readonly languages: readonly { readonly locale: Locale; readonly name: string }[];
  formatDate(date: Date): string;
  plural(count: number, forms: PluralForms): string;
}

export function createTranslator(locale: Locale): Translator {
  const dateFormat = new Intl.DateTimeFormat(locale, { dateStyle: "long" });
  const pluralRules = new Intl.PluralRules(locale);
  return {
    locale,
    texts: dictionaries[locale],
    languages: locales.map((code) => ({ locale: code, name: dictionaries[code].languageName })),
    formatDate: (date) => dateFormat.format(date),
    plural: (count, forms) => forms[pluralRules.select(count)] ?? forms.other,
  };
}
