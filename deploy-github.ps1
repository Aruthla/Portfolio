# Script de déploiement GitHub
# Exécutez ce script après avoir créé votre repository sur GitHub

Write-Host "🚀 Configuration du repository GitHub" -ForegroundColor Cyan
Write-Host ""

# Demander le nom d'utilisateur GitHub
$username = Read-Host "Entrez votre nom d'utilisateur GitHub"

# Demander le nom du repository
$repoName = Read-Host "Entrez le nom du repository (par défaut: portfolio-personnel)"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "portfolio-personnel"
}

# Demander le protocole (HTTPS ou SSH)
$protocol = Read-Host "Utiliser HTTPS ou SSH ? (h/s, par défaut: h)"
if ([string]::IsNullOrWhiteSpace($protocol) -or $protocol -eq "h") {
    $remoteUrl = "https://github.com/$username/$repoName.git"
} else {
    $remoteUrl = "git@github.com:$username/$repoName.git"
}

Write-Host ""
Write-Host "📦 Configuration de l'origin..." -ForegroundColor Yellow

# Supprimer l'origin s'il existe déjà
git remote remove origin 2>$null

# Ajouter le nouveau remote
git remote add origin $remoteUrl

# Renommer la branche en main
git branch -M main

Write-Host "✅ Remote configuré : $remoteUrl" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Push vers GitHub..." -ForegroundColor Yellow

# Pousser vers GitHub
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Code poussé avec succès !" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Prochaines étapes :" -ForegroundColor Cyan
    Write-Host "1. Allez sur https://github.com/$username/$repoName/settings/pages" -ForegroundColor White
    Write-Host "2. Dans 'Source', sélectionnez 'GitHub Actions'" -ForegroundColor White
    Write-Host "3. Votre site sera disponible à : https://$username.github.io/$repoName/" -ForegroundColor White
    Write-Host ""
    
    # Proposer d'ouvrir le repository
    $openRepo = Read-Host "Ouvrir le repository dans le navigateur ? (o/n)"
    if ($openRepo -eq "o") {
        Start-Process "https://github.com/$username/$repoName"
    }
} else {
    Write-Host ""
    Write-Host "❌ Erreur lors du push. Vérifiez vos identifiants et que le repository existe." -ForegroundColor Red
}
