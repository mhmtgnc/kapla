# GitHub ve Hostinger Deployment - Adım Adım Rehber

## 📦 BÖLÜM 1: GitHub Repository Oluşturma

### Adım 1: GitHub'da Yeni Repository Oluşturun

1. **GitHub.com**'a giriş yapın
2. Sağ üst köşedeki **"+"** butonuna tıklayın
3. **"New repository"** seçeneğini seçin

### Adım 2: Repository Ayarları

Aşağıdaki bilgileri doldurun:

- **Repository name**: `kapla` (veya istediğiniz isim)
- **Description**: `Araç kaplama ve cam filmi marketplace uygulaması`
- **Visibility**: 
  - ✅ **Private** (önerilen - ücretli hesap gerekir)
  - veya **Public** (ücretsiz, herkes görebilir)
- **Initialize this repository with**: 
  - ❌ README eklemeyin (zaten var)
  - ❌ .gitignore eklemeyin (zaten var)
  - ❌ License eklemeyin

4. **"Create repository"** butonuna tıklayın

### Adım 3: Repository URL'ini Kopyalayın

Repository oluşturulduktan sonra, sayfanın üst kısmında şu şekilde bir URL göreceksiniz:

```
https://github.com/kullanici_adiniz/kapla.git
```

Bu URL'yi kopyalayın (bir sonraki adımda kullanacağız).

---

## 💻 BÖLÜM 2: Local Projeyi Git ile Hazırlama

### Adım 1: Terminal'i Açın

Proje klasörünüze gidin:
```bash
cd /Users/mehmetgenc/Desktop/APP
```

### Adım 2: Git Repository'yi Başlatın

```bash
git init
```

### Adım 3: Tüm Dosyaları Ekleyin

```bash
git add .
```

### Adım 4: İlk Commit'i Oluşturun

```bash
git commit -m "Initial commit - Kapla marketplace app"
```

### Adım 5: Ana Branch'i Oluşturun

```bash
git branch -M main
```

### Adım 6: GitHub Repository'yi Bağlayın

**ÖNEMLİ**: `kullanici_adiniz` kısmını kendi GitHub kullanıcı adınızla değiştirin!

```bash
git remote add origin https://github.com/kullanici_adiniz/kapla.git
```

### Adım 7: GitHub'a Yükleyin

```bash
git push -u origin main
```

**Not**: İlk kez push yapıyorsanız, GitHub kullanıcı adı ve şifre (veya Personal Access Token) isteyebilir.

#### GitHub Authentication Sorunu Yaşıyorsanız:

Eğer şifre ile giriş yapamıyorsanız, **Personal Access Token** kullanmanız gerekir:

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. **"Generate new token"** → **"Generate new token (classic)"**
3. Token'a bir isim verin (örn: "Kapla Deployment")
4. **Expiration**: 90 days (veya istediğiniz süre)
5. **Scopes**: `repo` seçeneğini işaretleyin
6. **"Generate token"** butonuna tıklayın
7. Oluşturulan token'ı kopyalayın (bir daha gösterilmeyecek!)
8. Push yaparken şifre yerine bu token'ı kullanın

### Adım 8: Kontrol Edin

GitHub'da repository'nize gidin ve tüm dosyaların yüklendiğini kontrol edin.

---

## 🚀 BÖLÜM 3: Hostinger'da Git Bağlantısı

### Adım 1: Hostinger hPanel'e Giriş Yapın

1. **hostinger.com** → **hPanel** → Giriş yapın
2. **"Websites"** veya **"Hosting"** bölümüne gidin

### Adım 2: Node.js Uygulaması Oluşturun

1. **"Node.js"** veya **"Node.js Web Uygulamanızı Dağıtın"** bölümüne gidin
2. **"Git deposunu içe aktarın"** kartını seçin (Tavsiye edilen seçenek)
3. **"GitHub ile bağlantı kurun"** butonuna tıklayın

### Adım 3: GitHub Hesabını Bağlayın

1. GitHub authorization sayfası açılacak
2. **"Authorize Hostinger"** veya **"Install & Authorize"** butonuna tıklayın
3. Gerekirse GitHub şifrenizi girin
4. Hostinger'a erişim izni verin

### Adım 4: Repository Seçin

1. Repository listesinden **"kapla"** repository'sini seçin
2. **Branch**: `main` seçin (veya `master` - hangisi varsa)
3. **Root Directory**: Boş bırakın veya `/` yazın
4. **"Continue"** veya **"Devam Et"** butonuna tıklayın

### Adım 5: Node.js Ayarlarını Yapılandırın

Aşağıdaki ayarları yapın:

#### Temel Ayarlar:
- **App Name**: `kapla` (veya istediğiniz isim)
- **Node.js Version**: `18.x` veya `20.x` seçin (mümkünse en yeni LTS versiyonu)
- **Port**: Genellikle otomatik atanır (3000 veya başka bir port)

#### Build Ayarları:
- **Build Command**: 
  ```
  npm install && npm run build
  ```
  
- **Start Command**: 
  ```
  npm run start:prod
  ```
  veya PM2 kullanacaksanız:
  ```
  pm2 start ecosystem.config.js
  ```

#### Environment Variables:
**"Environment Variables"** veya **"Ortam Değişkenleri"** bölümüne tıklayın ve şunları ekleyin:

```
NODE_ENV=production
PORT=3000
```

**Not**: `DATABASE_URL` ve `NEXTAUTH_SECRET` şimdilik eklemeyin (veritabanı hazır olduğunda eklenecek).

### Adım 6: Domain Bağlantısı

1. **"Domain"** veya **"Domain Bağlantısı"** bölümüne gidin
2. `kaplaapp.com` domain'ini seçin
3. Node.js uygulamasına bağlayın

### Adım 7: SSL Sertifikası (HTTPS)

1. **"SSL"** veya **"Security"** bölümüne gidin
2. **"Let's Encrypt"** veya **"Free SSL"** seçeneğini aktif edin
3. SSL sertifikasının kurulmasını bekleyin (birkaç dakika sürebilir)

### Adım 8: Uygulamayı Başlatın

1. **"Deploy"** veya **"Başlat"** butonuna tıklayın
2. İlk build işlemi başlayacak (5-10 dakika sürebilir)
3. Build tamamlandığında uygulama otomatik başlayacak

---

## ✅ BÖLÜM 4: Kontrol ve Test

### Adım 1: Build Loglarını Kontrol Edin

Hostinger'da **"Logs"** veya **"Build Logs"** bölümünden build sürecini takip edin. Hata varsa burada görünecektir.

### Adım 2: Uygulama Durumunu Kontrol Edin

**"Status"** veya **"Durum"** bölümünden uygulamanın çalıştığını kontrol edin. **"Running"** veya **"Çalışıyor"** olmalı.

### Adım 3: Web Sitesini Test Edin

Tarayıcıdan şu adresleri ziyaret edin:

1. **Ana Sayfa**: `https://kaplaapp.com`
2. **Health Check**: `https://kaplaapp.com/api/check`

Health check endpoint'i şu şekilde bir yanıt döndürmeli:
```json
{
  "status": "ok",
  "timestamp": "2024-...",
  "database": "disconnected" // Normal - henüz veritabanı yok
}
```

### Adım 4: Hata Kontrolü

Eğer uygulama açılmıyorsa:

1. **PM2 Logs** kontrol edin (eğer PM2 kullanıyorsanız):
   - SSH üzerinden: `pm2 logs kapla`
   - veya Hostinger'da **"Logs"** bölümünden

2. **Build Logs** kontrol edin:
   - Hostinger'da **"Build Logs"** bölümünden hataları kontrol edin

3. **Environment Variables** kontrol edin:
   - Tüm değişkenlerin doğru girildiğinden emin olun

---

## 🔄 BÖLÜM 5: Güncelleme Süreci

Kod değişikliklerinden sonra güncelleme yapmak için:

### Local'de Değişiklik Yapın

```bash
# Dosyaları düzenleyin
# ...

# Değişiklikleri commit edin
git add .
git commit -m "Yapılan değişikliklerin açıklaması"
git push origin main
```

### Hostinger'da Yeniden Deploy

1. Hostinger hPanel'de Node.js uygulamanıza gidin
2. **"Redeploy"** veya **"Yeniden Dağıt"** butonuna tıklayın
3. Build işlemi otomatik başlayacak
4. Tamamlandığında uygulama otomatik yenilenecek

**Alternatif**: Hostinger otomatik deploy özelliği varsa, GitHub'a push yaptığınızda otomatik deploy başlayabilir.

---

## 📝 Önemli Notlar

1. **İlk Build**: İlk build işlemi 5-10 dakika sürebilir (bağımlılıklar yükleniyor)

2. **Veritabanı**: Şu an veritabanı yok, bu yüzden API endpoint'leri veritabanı işlemlerinde hata verebilir. Bu normaldir.

3. **Environment Variables**: `.env.production` dosyası yerine Hostinger'ın environment variables bölümünü kullanın.

4. **PM2**: Production'da PM2 kullanmanız önerilir (uygulama crash olursa otomatik restart).

5. **Port**: Hostinger genellikle port'u otomatik atar. Eğer özel port gerekiyorsa, Hostinger ayarlarından kontrol edin.

---

## 🆘 Sorun Giderme

### Build Başarısız Oluyor

- Node.js versiyonunu kontrol edin (18.x veya 20.x olmalı)
- Build loglarını kontrol edin
- `package.json` dosyasındaki script'leri kontrol edin

### Uygulama Başlamıyor

- Port çakışması olabilir
- Environment variables eksik olabilir
- Logları kontrol edin

### GitHub Bağlantı Hatası

- Personal Access Token kullanın (şifre yerine)
- GitHub repository'nin private/public durumunu kontrol edin
- Hostinger'ın GitHub erişim iznini kontrol edin

---

## ✅ Başarı Kontrol Listesi

- [ ] GitHub repository oluşturuldu
- [ ] Local proje GitHub'a push edildi
- [ ] Hostinger'da GitHub bağlantısı kuruldu
- [ ] Repository seçildi ve branch ayarlandı
- [ ] Build ve Start command'ları ayarlandı
- [ ] Environment variables eklendi
- [ ] Domain bağlandı
- [ ] SSL sertifikası kuruldu
- [ ] Build başarıyla tamamlandı
- [ ] Uygulama çalışıyor
- [ ] Ana sayfa açılıyor
- [ ] Health check endpoint çalışıyor

---

Herhangi bir adımda sorun yaşarsanız, hata mesajlarını paylaşın, birlikte çözelim! 🚀

