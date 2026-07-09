Conversion HTML → PowerPoint

Contenu:
- `convert_to_pptx.py` : script Python qui lit `index.html` et génère `Portfolio_Rodrigue_Tadmbaye.pptx`.

Pré-requis (Windows / macOS / Linux):

1) Créer un virtualenv (recommandé):

```bash
python -m venv .venv
# Windows
.\.venv\Scripts\activate
# macOS / Linux
source .venv/bin/activate
```

2) Installer dépendances:

```bash
pip install python-pptx beautifulsoup4 lxml
```

3) Exécuter la conversion:

```bash
python convert_to_pptx.py
```

Résultat:
- `Portfolio_Rodrigue_Tadmbaye.pptx` sera créé dans le dossier courant.

Remarques:
- Le script tente d'insérer `lklklk.png` si présent pour la diapositive d'accueil.
- Si tu veux que j'exécute le script ici, donne-moi la confirmation et j'essaierai de l'exécuter (les installations pip peuvent être nécessaires).