# Veritabanı Environment Variables Ekleme

## 📋 Mevcut Durum

Environment Variables'da şu an:
- ✅ `NODE_ENV=production`
- ✅ `PORT=3000`

## ➕ Eklenecek Yeni Değişkenler

### 1. DATABASE_URL

**Anahtar (Key)**: `DATABASE_URL`

**Değer (Value)**: 
```
mysql://u159592559_kaplaapp:Abisch2024**@localhost:3306/u159592559_kaplaapp
```

**ÖNEMLİ**: Şifrede özel karakterler (`**`) olduğu için URL encoding yapılmalı. Şifre kısmı `Abisch2024%2A%2A` olarak encode edilmeli.

**Doğru Format**:
```
mysql://u159592559_kaplaapp:Abisch2024%2A%2A@localhost:3306/u159592559_kaplaapp
```

**Karakter Encoding Tablosu**:
- `*` → `%2A`
- `@` → `%40`
- `#` → `%23`
- `$` → `%24`
- `%` → `%25`
- `&` → `%26`
- `+` → `%2B`
- `=` → `%3D`

### 2. NEXTAUTH_SECRET

**Anahtar (Key)**: `NEXTAUTH_SECRET`

**Değer (Value)**: Güvenli bir random string (en az 32 karakter)

**Örnek** (kendi benzersiz anahtarınızı oluşturun):
```
kapla-app-secret-key-2024-production-secure-random-string-xyz123
```

**Güvenli Secret Oluşturma** (Terminal'de):
```bash
openssl rand -base64 32
```

veya

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 3. NEXTAUTH_URL (Opsiyonel ama önerilen)

**Anahtar (Key)**: `NEXTAUTH_URL`

**Değer (Value)**:
```
https://kaplaapp.com
```

## 📝 Hostinger'da Eklenecek Tam Liste

1. **NODE_ENV** = `production` ✅ (Zaten var)
2. **PORT** = `3000` ✅ (Zaten var)
3. **DATABASE_URL** = `mysql://u159592559_kaplaapp:Abisch2024%2A%2A@localhost:3306/u159592559_kaplaapp` ➕ (Eklenecek)
4. **NEXTAUTH_SECRET** = `[güvenli-random-string]` ➕ (Eklenecek)
5. **NEXTAUTH_URL** = `https://kaplaapp.com` ➕ (Eklenecek - opsiyonel)

## ⚠️ Önemli Notlar

1. **Şifre Encoding**: Şifredeki `**` karakterleri `%2A%2A` olarak encode edilmeli
2. **Güvenlik**: `NEXTAUTH_SECRET` asla paylaşılmamalı ve güçlü olmalı
3. **Test**: Environment variables eklendikten sonra uygulamayı yeniden deploy edin

## ✅ Ekleme Sonrası Yapılacaklar

1. Environment variables'ı ekleyin
2. Uygulamayı yeniden deploy edin
3. Veritabanı bağlantısını test edin: `https://kaplaapp.com/api/check`
4. Prisma migration çalıştırın (SSH üzerinden veya Hostinger terminal'den)

