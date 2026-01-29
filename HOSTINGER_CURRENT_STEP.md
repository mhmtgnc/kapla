# Hostinger Yapılandırma - Şu Anki Adımlar

## ✅ Mevcut Durum (Doğru Ayarlar)

- ✅ Framework: Next.js
- ✅ Branch: main
- ✅ Node Version: 20.x
- ✅ Root Directory: ./
- ✅ Domain: kaplaapp.com

## 🔧 Yapılması Gerekenler

### 1. Build Ayarlarını Özelleştirin

**"Derleme ve çıktı ayarları"** bölümündeki **"Değiştir"** butonuna tıklayın ve şunları ayarlayın:

#### Build Command:
```
npm install && npm run build
```

#### Start Command:
```
npm run start:prod
```

**VEYA** PM2 kullanacaksanız:
```
pm2 start ecosystem.config.js
```

### 2. Environment Variables Ekleyin

**"Ortam değişkenleri"** bölümündeki **"Ekle"** butonuna tıklayın ve şu değişkenleri ekleyin:

#### Değişken 1:
- **Key**: `NODE_ENV`
- **Value**: `production`

#### Değişken 2:
- **Key**: `PORT`
- **Value**: `3000`

**Not**: `DATABASE_URL` ve `NEXTAUTH_SECRET` şimdilik eklemeyin (veritabanı hazır olduğunda eklenecek).

### 3. Deploy Butonuna Tıklayın

Tüm ayarları yaptıktan sonra:
1. Sayfanın altındaki **"Deploy"** veya **"Dağıt"** butonuna tıklayın
2. İlk build işlemi başlayacak (5-10 dakika sürebilir)
3. Build tamamlandığında uygulama otomatik başlayacak

## 📋 Kontrol Listesi

- [ ] Build Command: `npm install && npm run build` ayarlandı
- [ ] Start Command: `npm run start:prod` ayarlandı
- [ ] Environment Variable: `NODE_ENV=production` eklendi
- [ ] Environment Variable: `PORT=3000` eklendi
- [ ] Deploy butonuna tıklandı
- [ ] Build işlemi tamamlandı
- [ ] Uygulama çalışıyor durumda

## ✅ Build Sonrası Kontrol

Build tamamlandıktan sonra:

1. **Status** bölümünden uygulamanın **"Running"** veya **"Çalışıyor"** olduğunu kontrol edin

2. Tarayıcıdan test edin:
   - Ana sayfa: `https://kaplaapp.com`
   - Health check: `https://kaplaapp.com/api/check`

3. Health check yanıtı şöyle olmalı:
```json
{
  "status": "ok",
  "timestamp": "2024-...",
  "database": "disconnected"
}
```
(Veritabanı henüz yok, bu normal)

## 🆘 Sorun Yaşarsanız

### Build Başarısız Olursa:
- **Logs** bölümünden build loglarını kontrol edin
- Node.js versiyonunun 20.x olduğundan emin olun
- Build Command'ın doğru yazıldığından emin olun

### Uygulama Başlamazsa:
- **Logs** bölümünden hata loglarını kontrol edin
- Environment variables'ın doğru eklendiğinden emin olun
- Port çakışması olabilir (Hostinger genellikle otomatik atar)

