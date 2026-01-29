# Hostinger Build Hatası Düzeltme

## 🔴 Tespit Edilen Sorunlar

1. ✅ **Düzeltildi**: `next.config.js`'de eski `experimental.appDir` ayarı kaldırıldı (Next.js 14'te gerekli değil)
2. ⚠️ **Kritik**: Build command çalışmamış - `.next` klasörü oluşmamış

## 🔧 Yapılması Gerekenler

### 1. Değişiklikleri GitHub'a Push Edin

Local'de düzeltmeleri yaptık, şimdi GitHub'a push edin:

```bash
git add .
git commit -m "Fix: Remove deprecated experimental.appDir from next.config.js"
git push origin main
```

### 2. Hostinger'da Build Command'ı Kontrol Edin

Hostinger hPanel'de Node.js uygulamanızın ayarlarına gidin ve **Build Command**'ın şu şekilde olduğundan emin olun:

```
npm install && npm run build
```

**ÖNEMLİ**: Build command'ın mutlaka çalışması gerekiyor. Eğer sadece `npm install` çalışıyorsa, build çalışmıyor demektir.

### 3. Hostinger'da Yeniden Deploy Edin

1. Hostinger hPanel'de Node.js uygulamanıza gidin
2. **"Redeploy"** veya **"Yeniden Dağıt"** butonuna tıklayın
3. Build işleminin başladığını kontrol edin
4. Build loglarını takip edin

### 4. Build Loglarını Kontrol Edin

Build sırasında logları kontrol edin. Şu satırları görmelisiniz:

```
> kapla@1.0.0 build
> next build

Creating an optimized production build...
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

Eğer bu satırları görmüyorsanız, build command çalışmıyor demektir.

## 🆘 Alternatif Çözüm: Build Command'ı Manuel Kontrol

Eğer Hostinger'da build command çalışmıyorsa, şu adımları deneyin:

### Seçenek 1: Build Command'ı Değiştirin

Hostinger'da Build Command'ı şu şekilde değiştirin:

```bash
npm ci && npm run build
```

### Seçenek 2: Ayrı Build Script Kullanın

Hostinger'da Build Command'ı:

```bash
npm install
```

Sonra Start Command'ı:

```bash
npm run build && npm run start:prod
```

**Not**: Bu ideal değil ama çalışabilir.

### Seçenek 3: SSH ile Manuel Build

Eğer SSH erişiminiz varsa:

```bash
cd /path/to/your/app
npm install
npm run build
pm2 restart kapla
```

## ✅ Başarılı Build Kontrol Listesi

Build başarılı olduğunda şunları görmelisiniz:

- [ ] `npm install` tamamlandı
- [ ] `npm run build` çalıştı
- [ ] `.next` klasörü oluştu
- [ ] `✓ Compiled successfully` mesajı göründü
- [ ] `npm run start:prod` başarıyla başladı
- [ ] `✓ Starting...` mesajı göründü
- [ ] Uygulama `Running` durumunda

## 📝 Notlar

- Build işlemi 5-10 dakika sürebilir
- İlk build daha uzun sürebilir (tüm bağımlılıklar yükleniyor)
- Build loglarını mutlaka kontrol edin
- Eğer build başarısız olursa, hata mesajlarını paylaşın

