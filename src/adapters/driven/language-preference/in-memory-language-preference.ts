import type { LanguagePreference } from "../../../application/ports";
import type { Locale } from "../../../domain/locale";

export function createInMemoryLanguagePreference(initial?: Locale): LanguagePreference {
  let stored = initial;
  return {
    read: () => stored,
    write: (locale) => {
      stored = locale;
    },
  };
}
