# Guide de Développement - Portfolio React

## 🛠️ Prérequis

- Node.js (v18 ou supérieur)
- npm ou yarn
- Git

## 🚀 Démarrage rapide

### 1. Installation

```bash
# Cloner le repository
git clone https://github.com/Aruthla/Portfolio.git
cd Portfolio

# Installer les dépendances
npm install
```

### 2. Développement

```bash
# Lancer le serveur de développement
npm run dev
```

Le site sera accessible à l'adresse [http://localhost:5173](http://localhost:5173)

### 3. Build

```bash
# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure des fichiers

```
src/
├── components/         # Composants React
│   ├── Navbar.jsx     # Barre de navigation
│   ├── Hero.jsx       # Section d'accueil
│   ├── About.jsx      # Section à propos
│   ├── Skills.jsx     # Compétences
│   ├── Projects.jsx   # Projets
│   ├── Contact.jsx    # Formulaire de contact
│   └── Footer.jsx     # Pied de page
├── styles/            # Fichiers SASS
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _base.scss
│   ├── _navigation.scss
│   ├── _hero.scss
│   ├── _sections.scss
│   └── style.scss
├── App.jsx           # Composant racine
└── main.jsx          # Point d'entrée
```

## 🎨 Personnalisation

### Modifier les couleurs

Éditez `src/styles/_variables.scss` :

```scss
$primary-color: #8b5cf6;      // Violet principal
$primary-dark: #7c3aed;        // Violet foncé
$primary-light: #a78bfa;       // Violet clair
$secondary-color: #d946ef;     // Rose/magenta
$accent-color: #fbbf24;        // Jaune doré
```

### Ajouter un nouveau projet

Dans `src/components/Projects.jsx`, ajoutez un objet dans `projectsData` :

```javascript
{
  title: 'Nom du projet',
  description: 'Description du projet',
  tags: ['React', 'Node.js', 'MongoDB'],
  link: 'https://github.com/username/projet'
}
```

### Modifier les compétences

Dans `src/components/Skills.jsx`, ajoutez ou modifiez dans `skillsData` :

```javascript
{
  title: 'Nouvelle compétence',
  description: 'Description de la compétence',
  width: 85,  // Niveau (0-100)
  icon: (/* SVG icon */)
}
```

## 🔧 Technologies utilisées

- **React 18** - Framework UI
- **Vite** - Build tool
- **SASS** - Préprocesseur CSS
- **React Hooks** - useState, useEffect, useRef
- **Intersection Observer API** - Animations au scroll

## 📦 Scripts npm

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualiser le build
```

## 🚀 Déploiement

Le projet est configuré pour un déploiement automatique sur GitHub Pages :

1. Push sur la branche `main`
2. GitHub Actions compile automatiquement
3. Le site est déployé sur `https://username.github.io/Portfolio/`

### Configuration dans `vite.config.js`

```javascript
export default defineConfig({
  base: '/Portfolio/',  // Nom du repository
  plugins: [react()],
})
```

## 🎯 Fonctionnalités principales

### Animations

- **Compteurs animés** dans la section About
- **Barres de progression** dans Skills
- **Smooth scroll** pour la navigation
- **Effets hover** sur tous les éléments interactifs

### Responsive Design

- Mobile first
- Breakpoints : 768px (tablet), 1024px (desktop)
- Menu burger sur mobile

### Optimisations

- Lazy loading des sections
- Code splitting automatique (Vite)
- SASS minifié en production
- Assets optimizes

## 🐛 Debugging

### Problèmes courants

**Le serveur ne démarre pas :**
```bash
# Nettoyer node_modules et reinstaller
rm -rf node_modules package-lock.json
npm install
```

**Les styles ne s'appliquent pas :**
```bash
# Vérifier que le SASS est bien compilé
npm run build
```

**Erreur 404 après déploiement :**
```bash
# Vérifier que base est correct dans vite.config.js
base: '/Portfolio/'  # Doit correspondre au nom du repo
```

## 📝 Bonnes pratiques

1. **Composants** - Un fichier par composant
2. **Hooks** - Utiliser les hooks React (useState, useEffect, useRef)
3. **SASS** - Respecter l'architecture modulaire
4. **Git** - Commits atomiques avec messages descriptifs
5. **Code** - Commenter le code complexe

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📄 License

MIT © Laëtitia Borde
