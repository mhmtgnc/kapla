# Hostinger Deployment Rehberi - Kapla App

Bu rehber, Kapla uygulamasını Hostinger'a (kaplaapp.com) deploy etmek için adım adım talimatlar içerir.

## 📋 Ön Gereksinimler

1. Hostinger hesabınızda Node.js hosting aktif olmalı
2. MySQL veritabanı oluşturulmuş olmalı (daha sonra yapılacak)
3. Domain (kaplaapp.com) Hostinger'a bağlı olmalı

## 🚀 Deployment Adımları

### Yöntem 1: Git Repository ile (Önerilen)

#### 1. GitHub'a Projeyi Yükleyin

```bash
# Git repository oluşturun
git init
git add .
git commit -m "Initial commit - Kapla marketplace app"
git branch -M main
git remote add origin https://github.com/kullanici_adi/kapla.git
git push -u origin main
```

#### 2. Hostinger'da Git Repository'yi Bağlayın

1. Hostinger hPanel'e giriş yapın
2. **Node.js** bölümüne gidin
3. **"Git deposunu içe aktarın"** seçeneğini seçin
4. **"GitHub ile bağlantı kurun"** butonuna tıklayın
5. GitHub hesabınızı bağlayın
6. Repository'nizi seçin
7. Branch: `main` seçin
8. Root Directory: `/` (boş bırakın veya `/` yazın)

#### 3. Build Ayarlarını Yapılandırın

Hostinger'da Node.js uygulaması ayarlarında:

- **Node Version**: 18.x veya 20.x seçin
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run start:prod` veya `pm2 start ecosystem.config.js`
- **Port**: 3000 (veya Hostinger'ın atadığı port)

### Yöntem 2: Dosya Yükleme ile

#### 1. Projeyi Build Alın

```bash
# Bağımlılıkları yükleyin
npm install

# Production build alın
npm run build
```

#### 2. Dosyaları Hostinger'a Yükleyin

**ÖNEMLİ**: `.next` klasörünü ve `node_modules` klasörünü yüklemeyin (bunlar sunucuda oluşturulacak).

Yüklenecek dosyalar:
- `app/`
- `components/`
- `lib/`
- `prisma/`
- `public/`
- `config/`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `next.config.js`
- `tailwind.config.ts`
- `postcss.config.js`
- `.env.production` (sunucuda oluşturun)
- `ecosystem.config.js`

#### 3. Hostinger File Manager veya FTP ile Yükleyin

1. Hostinger hPanel'den **File Manager**'a gidin
2. `public_html` veya domain klasörüne gidin
3. Dosyaları yükleyin

#### 4. Sunucuda Build Alın

Hostinger Terminal/SSH üzerinden:

```bash
cd /path/to/your/app
npm install --production
npm run build
```

## ⚙️ Sunucu Yapılandırması

### 1. Environment Variables (.env.production)

Hostinger File Manager veya SSH ile `.env.production` dosyası oluşturun:

```env
DATABASE_URL="mysql://kullanici:sifre@localhost:3306/kapla"
NEXTAUTH_URL="https://kaplaapp.com"
NEXTAUTH_SECRET="güvenli-uzun-secret-key-buraya"
NODE_ENV="production"
PORT=3000
```

**ÖNEMLİ**: `.env.production` dosyasını `.gitignore`'a ekleyin (zaten ekli).

### 2. PM2 ile Process Management (Önerilen)

PM2 kurulumu ve başlatma:

```bash
# PM2'yi global olarak kurun (eğer yoksa)
npm install -g pm2

# Uygulamayı başlatın
pm2 start ecosystem.config.js

# PM2'yi sistem başlangıcında çalışacak şekilde ayarlayın
pm2 startup
pm2 save
```

### 3. Port Yapılandırması

Hostinger genellikle port'u otomatik atar. Eğer özel port gerekiyorsa:

1. Hostinger Node.js ayarlarından port'u kontrol edin
2. `.env.production` dosyasında `PORT` değişkenini güncelleyin
3. `ecosystem.config.js` dosyasında port'u güncelleyin

### 4. Domain Yapılandırması

1. Hostinger hPanel'den **Domains** bölümüne gidin
2. `kaplaapp.com` domain'ini seçin
3. **Node.js App** ile bağlayın
4. Gerekirse SSL sertifikası ekleyin (Let's Encrypt ücretsiz)

## 🗄️ Veritabanı Kurulumu (Sonraki Aşama)

Veritabanı kurulumu için:

1. Hostinger hPanel'den MySQL veritabanı oluşturun
2. Veritabanı bilgilerini `.env.production` dosyasına ekleyin
3. SSH üzerinden:

```bash
cd /path/to/your/app
npx prisma generate
npx prisma db push
```

## ✅ Kontrol ve Test

### 1. Health Check

Uygulama çalıştıktan sonra:

```bash
curl https://kaplaapp.com/api/check
```

Başarılı yanıt:
```json
{
  "status": "ok",
  "timestamp": "2024-...",
  "database": "connected"
}
```

### 2. Ana Sayfa Kontrolü

Tarayıcıdan `https://kaplaapp.com` adresini ziyaret edin.

## 🔧 Sorun Giderme

### Uygulama Başlamıyor

1. PM2 loglarını kontrol edin:
```bash
pm2 logs kapla
```

2. Port çakışması olabilir, port'u değiştirin
3. `.env.production` dosyasını kontrol edin

### Build Hatası

1. Node.js versiyonunu kontrol edin (18.x veya 20.x olmalı)
2. `npm install` komutunu tekrar çalıştırın
3. Disk alanını kontrol edin

### Veritabanı Bağlantı Hatası

1. MySQL veritabanı bilgilerini kontrol edin
2. Veritabanı sunucusunun çalıştığından emin olun
3. Firewall ayarlarını kontrol edin

## 📝 Önemli Notlar

- **Standalone Build**: Next.js standalone build kullanıyoruz, bu daha küçük ve optimize bir build sağlar
- **PM2**: Production'da process manager kullanmak önerilir (uygulama crash olursa otomatik restart)
- **Environment Variables**: Asla `.env.production` dosyasını Git'e commit etmeyin
- **SSL**: HTTPS için Let's Encrypt sertifikası kullanın (Hostinger'da ücretsiz)

## 🔄 Güncelleme Süreci

Kod güncellemeleri için:

```bash
# Git ile
git pull origin main
npm install
npm run build
pm2 restart kapla

# veya dosya yükleme ile
# Yeni dosyaları yükleyin
npm install
npm run build
pm2 restart kapla
```

## 📞 Destek

Sorun yaşarsanız:
1. PM2 loglarını kontrol edin: `pm2 logs`
2. Hostinger hPanel'den Node.js loglarını kontrol edin
3. Browser console'da hataları kontrol edin

