#!/bin/bash

# Kapla App - GitHub'a Yükleme Hızlı Başlangıç Scripti
# Bu script'i çalıştırmadan önce GitHub'da repository oluşturmanız gerekiyor!

echo "🚀 Kapla App - GitHub'a Yükleme Başlıyor..."
echo ""

# GitHub kullanıcı adınızı ve repository adınızı buraya yazın
read -p "GitHub kullanıcı adınızı girin: " GITHUB_USER
read -p "Repository adını girin (varsayılan: kapla): " REPO_NAME
REPO_NAME=${REPO_NAME:-kapla}

echo ""
echo "📦 Git repository başlatılıyor..."
git init

echo "📝 Dosyalar ekleniyor..."
git add .

echo "💾 İlk commit oluşturuluyor..."
git commit -m "Initial commit - Kapla marketplace app"

echo "🌿 Main branch oluşturuluyor..."
git branch -M main

echo "🔗 GitHub repository bağlanıyor..."
git remote add origin https://github.com/${GITHUB_USER}/${REPO_NAME}.git

echo "⬆️  GitHub'a yükleniyor..."
echo ""
echo "⚠️  NOT: GitHub kullanıcı adı ve şifre (veya Personal Access Token) istenecek!"
echo ""

git push -u origin main

echo ""
echo "✅ Tamamlandı! GitHub'da repository'nizi kontrol edin:"
echo "   https://github.com/${GITHUB_USER}/${REPO_NAME}"
echo ""
echo "📚 Sonraki adımlar için GITHUB_SETUP.md dosyasına bakın!"

