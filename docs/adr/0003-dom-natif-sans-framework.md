# DOM natif, sans framework d'interface

L'interface est écrite avec les API du DOM, sans React, Vue ni équivalent. Elle se limite à deux onglets, un formulaire, une table des matières et des boîtes de dialogue : un framework ajouterait du poids et une dépendance majeure sans gain proportionné. Vite sert uniquement à construire et à servir en développement.

À reconsidérer si l'interface gagne des états partagés complexes ; l'architecture hexagonale limite ce changement aux adaptateurs `driving/`.
