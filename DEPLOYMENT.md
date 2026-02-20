# 🚀 Instructions de déploiement sur GitHub Pages

## Étape 1 : Créer le repository sur GitHub

1. Allez sur [GitHub](https://github.com/new)
2. Créez un nouveau repository :
   - **Nom** : `portfolio-personnel` (ou le nom de votre choix)
   - **Visibilité** : Public (requis pour GitHub Pages gratuit)
   - **Ne cochez pas** "Initialize with README" (vous avez déjà les fichiers)
3. Cliquez sur "Create repository"

## Étape 2 : Pousser le code vers GitHub

Une fois le repository créé, GitHub vous donnera des instructions. Utilisez ces commandes :

```bash
# Remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE_USERNAME/portfolio-personnel.git
git branch -M main
git push -u origin main
```

**OU si vous préférez SSH :**

```bash
git remote add origin git@github.com:VOTRE_USERNAME/portfolio-personnel.git
git branch -M main
git push -u origin main
```

## Étape 3 : Activer GitHub Pages

1. Allez dans votre repository sur GitHub
2. Cliquez sur **Settings** (en haut à droite)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Dans "Source", sélectionnez **GitHub Actions**
5. Le workflow se déclenchera automatiquement !

## Étape 4 : Accéder à votre site

Après quelques minutes, votre site sera accessible à :
```
https://VOTRE_USERNAME.github.io/portfolio-personnel/
```

Vous pouvez suivre le déploiement dans l'onglet **Actions** de votre repository.

## 🔄 Mises à jour futures

Pour mettre à jour votre site :

1. Modifiez vos fichiers SCSS ou HTML
2. Commitez les changements :
   ```bash
   git add .
   git commit -m "Description de vos modifications"
   git push
   ```
3. Le workflow GitHub Actions recompilera automatiquement le SASS et déploiera la nouvelle version !

## 🎨 Personnalisation du domaine (optionnel)

Si vous avez un nom de domaine personnel :

1. Créez un fichier `CNAME` à la racine avec votre domaine
2. Configurez les DNS de votre domaine pour pointer vers GitHub Pages
3. Dans Settings > Pages, ajoutez votre domaine personnalisé

---

✨ Votre portfolio sera en ligne et se mettra à jour automatiquement à chaque push !
