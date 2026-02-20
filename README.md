# Portfolio - Développeuse Web

Site de présentation personnel moderne et responsive créé en HTML, SASS et JavaScript vanilla.

## 📋 Description

Portfolio professionnel pour une développeuse web incluant :
- **Page d'accueil** avec animation
- **Section À propos** avec statistiques animées
- **Compétences** avec barres de progression
- **Projets** avec cartes interactives
- **Formulaire de contact**
- Design 100% responsive
- **Thème violet** comme couleur principale

## 🚀 Démarrage

### Installation

1. Téléchargez ou clonez les fichiers
2. Installez les dépendances :
   ```bash
   npm install
   ```

### Développement

Pour compiler le SASS automatiquement lors des modifications :
```bash
npm start
```

Pour compiler le SASS une seule fois :
```bash
npm run build
```

### Visualisation

Ouvrez simplement `index.html` dans votre navigateur web.

## 🎨 Personnalisation

### Modifier les couleurs

Dans `scss/_variables.scss`, modifiez les variables SASS :
```scss
// Couleurs principales
$primary-color: #8b5cf6;      // Violet principal
$primary-dark: #7c3aed;        // Violet foncé
$primary-light: #a78bfa;       // Violet clair
$secondary-color: #d946ef;     // Rose/magenta
$accent-color: #fbbf24;        // Jaune gold
```

### Structure SASS modulaire

Le projet utilise une architecture SASS organisée en modules :
- `_variables.scss` - Toutes les variables (couleurs, tailles, espacements)
- `_mixins.scss` - Mixins réutilisables (flexbox, transitions, responsive)
- `_base.scss` - Reset et styles de base
- `_navigation.scss` - Barre de navigation
- `_hero.scss` - Section héro/accueil
- `_sections.scss` - Toutes les autres sections

### Ajouter du contenu

- **Textes** : Modifiez directement dans `index.html`
- **Styles** : Éditez les fichiers SASS dans `scss/` (le CSS sera généré automatiquement)
- **Images de projets** : Ajoutez vos images dans un dossier `images/` et liez-les
- **Statistiques** : Changez les valeurs `data-target` dans les éléments `.stat-number`
- **Compétences** : Ajustez `data-width` pour les barres de progression

## 📁 Structure

```
Perso/
├── index.html          # Structure HTML principale
├── style.css           # CSS compilé (généré automatiquement)
├── script.js           # Interactions et animations
├── package.json        # Dépendances npm
├── scss/
│   ├── style.scss      # Fichier principal SASS
│   ├── _variables.scss # Variables (couleurs, tailles, etc.)
│   ├── _mixins.scss    # Mixins réutilisables
│   ├── _base.scss      # Styles de base
│   ├── _navigation.scss# Navigation
│   SASS/SCSS** - Préprocesseur CSS avec architecture modulaire
- **├── _hero.scss      # Section héro
│   └── _sections.scss  # Autres sections
└── README.md           # Ce fichier
```

## ✨ Fonctionnalités

- ✅ Design moderne et épuré
- ✅ Navigation sticky avec indicateur de section active
- ✅ Menu burger pour mobile
- ✅ Animations au scroll (IntersectionObserver)
- ✅ Compteurs animés pour les statistiques
- ✅ Barres de progression pour les compétences
- ✅ Cartes de projets interactives
- ✅ Formulaire de contact fonctionnel
- ✅ Effet parallaxe sur la section hero
- ✅ 100% responsive (mobile, tablette, desktop)

## 🛠️ Technologies

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes (Grid, Flexbox, animations)
- **JavaScript ES6** - Interactions et animations

## 📱 Responsive

Le site s'adapte automatiquement à toutes les tailles d'écran :
- Desktop (> 768px)
- Tablette (≤ 768px)
- Mobile (≤ 480px)

## 🎯 Prochaines étapes suggérées

1. Ajoutez vos propres images de projets
2. Connectez le formulaire à un service d'envoi d'emails (EmailJS, Formspree, etc.)
3. Ajoutez un favicon
4. Optimisez les images
5. Ajoutez Google Analytics si souhaité
6. Déployez sur GitHub Pages, Netlify ou Vercel

## 📝 Licence

Libre d'utilisation - Personnalisez selon vos besoins !

---

Créé avec ❤️ et beaucoup de café ☕
