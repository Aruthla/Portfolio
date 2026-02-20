# Portfolio Personnel - React

Portfolio moderne de développeuse web, construit avec React, Vite et SASS.

## 🚀 Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour interfaces utilisateurs
- **Vite** - Build tool moderne et rapide  
- **SASS** - Préprocesseur CSS avec architecture modulaire
- **JavaScript ES6+** - Fonctionnalités modernes de JavaScript

## 🎨 Caractéristiques

- ✨ Design moderne avec thème violet personnalisé
- 📱 Responsive design (mobile, tablette, desktop)
- 🎭 Animations fluides et interactives
- ⚡ Performance optimisée avec Vite
- 🎯 Composants React réutilisables
- 💅 Styles SASS modulaires

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/Aruthla/Portfolio.git

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🌐 Déploiement

Le site est automatiquement déployé sur GitHub Pages via GitHub Actions à chaque push sur la branche `main`.

**URL du site :** [https://Aruthla.github.io/Portfolio/](https://Aruthla.github.io/Portfolio/)

## 📁 Structure du projet

```
Perso/
├── src/
│   ├── components/      # Composants React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/         # Fichiers SASS
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _base.scss
│   │   ├── _navigation.scss
│   │   ├── _hero.scss
│   │   ├── _sections.scss
│   │   └── style.scss
│   ├── App.jsx        # Composant principal
│   └── main.jsx       # Point d'entrée
├── public/            # Ressources statiques
├── .github/
│   └── workflows/
│       └── deploy.yml # CI/CD GitHub Actions
├── index.html         # Template HTML
├── vite.config.js     # Configuration Vite
└── package.json       # Dépendances npm
```

## 🎯 Sections du portfolio

1. **Accueil (Hero)** - Présentation avec liens sociaux
2. **À propos** - Présentation détaillée avec statistiques animées
3. **Compétences** - Technologies maîtrisées avec barres de progression
4. **Projets** - Showcase de projets récents avec liens GitHub
5. **Contact** - Formulaire de contact et informations

## 💜 Thème de couleurs

- Violet primaire : `#8b5cf6`
- Violet foncé : `#7c3aed`
- Violet clair : `#a78bfa`
- Violet secondaire : `#d946ef`
- Accent doré : `#fbbf24`

## 🛠️ Développement

Le projet utilise :
- **React Hooks** pour la gestion d'état
- **Intersection Observer** pour les animations au scroll
- **CSS Modules via SASS** pour le style
- **Vite HMR** pour le rechargement à chaud

## 📝 License

MIT © Laëtitia Borde
