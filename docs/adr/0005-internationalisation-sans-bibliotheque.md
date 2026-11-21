# Internationalisation sans bibliothèque

Les textes de l'interface sont des dictionnaires TypeScript (`fr.ts` sert de référence, `en.ts` doit avoir le même type : une clé manquante fait échouer la compilation). Les dates et les pluriels passent par `Intl`, fourni par le navigateur. La langue est détectée depuis le navigateur, choisie avec un sélecteur toujours visible, et n'est pas stockée dans la sauvegarde.

À cette échelle (deux langues, une cinquantaine de textes), une bibliothèque comme i18next ou FormatJS n'apporterait rien de plus. On en adoptera une si l'on dépasse quelques langues, si des traductrices ou traducteurs externes travaillent sur une plateforme de traduction, ou si la grammaire devient complexe. Le changement restera confiné à l'adaptateur d'internationalisation.

Le français de l'interface utilise l'écriture inclusive avec le point médian.
