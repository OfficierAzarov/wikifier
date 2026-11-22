export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

function findLocale(language: string): Locale | undefined {
  const tag = language.toLowerCase();
  return locales.find((locale) => tag === locale || tag.startsWith(`${locale}-`));
}

export function resolveLocale(languages: readonly string[]): Locale {
  for (const language of languages) {
    const locale = findLocale(language);
    if (locale !== undefined) return locale;
  }
  return defaultLocale;
}
