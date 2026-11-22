import type { LanguagePreference } from "../../../application/ports";
import { isLocale } from "../../../domain/locale";

const storageKey = "wiki3.language";

/**
 * The preference is a convenience: when the storage is unavailable, the choice
 * only lasts for the session instead of getting in the way.
 */
export function createStorageLanguagePreference(
  storage: Pick<Storage, "getItem" | "setItem">,
): LanguagePreference {
  return {
    read: () => {
      try {
        const stored = storage.getItem(storageKey);
        return stored !== null && isLocale(stored) ? stored : undefined;
      } catch {
        return undefined;
      }
    },
    write: (locale) => {
      try {
        storage.setItem(storageKey, locale);
      } catch {
        // Nothing to do: see above.
      }
    },
  };
}
