// Composition root: the only place that wires adapters to ports (docs/adr/0002-architecture-hexagonale.md).
import "./styles.css";
import { createStorageLanguagePreference } from "./adapters/driven/language-preference/storage-language-preference";
import { createTranslator } from "./adapters/driving/i18n/translator";
import { mountShell } from "./adapters/driving/ui/shell";
import { selectLocale, startLocale } from "./application/language";

const preference = createStorageLanguagePreference(localStorage);
const locale = startLocale({
  preference,
  browserLanguages: { list: () => navigator.languages },
});

const root = document.querySelector<HTMLElement>("#app");
if (root !== null) {
  mountShell(root, {
    locale,
    translate: createTranslator,
    select: (chosen) => selectLocale(preference, chosen),
  });
}
