# Hostinger Deployment Checklist

## ✅ Hazırlık Aşaması

- [ ] Proje GitHub'a yüklendi
- [ ] `.env.production.example` dosyası hazır
- [ ] `package.json` production script'leri eklendi
- [ ] `next.config.js` standalone output yapılandırıldı
- [ ] `ecosystem.config.js` PM2 yapılandırması hazır

## 🚀 Hostinger'da Yapılacaklar

### 1. Node.js Uygulaması Oluşturma
- [ ] Hostinger hPanel'den Node.js bölümüne gidildi
- [ ] "Git deposunu içe aktarın" seçeneği seçildi
- [ ] GitHub hesabı bağlandı
- [ ] Repository seçildi (kapla)
- [ ] Branch: `main` seçildi

### 2. Build Ayarları
- [ ] Node Version: 18.x veya 20.x seçildi
- [ ] Build Command: `npm install && npm run build` ayarlandı
- [ ] Start Command: `npm run start:prod` veya `pm2 start ecosystem.config.js` ayarlandı
- [ ] Port ayarı yapıldı (genellikle otomatik)

### 3. Environment Variables
- [ ] `.env.production` dosyası oluşturuldu
- [ ] `DATABASE_URL` eklendi (veritabanı hazır olduğunda)
- [ ] `NEXTAUTH_URL="https://kaplaapp.com"` eklendi
- [ ] `NEXTAUTH_SECRET` güvenli bir anahtar ile oluşturuldu
- [ ] `NODE_ENV="production"` eklendi

### 4. Domain Yapılandırması
- [ ] kaplaapp.com domain'i Node.js app ile bağlandı
- [ ] SSL sertifikası eklendi (Let's Encrypt)
- [ ] HTTPS yönlendirmesi aktif edildi

### 5. PM2 Kurulumu (Önerilen)
- [ ] SSH erişimi sağlandı
- [ ] PM2 global olarak kuruldu: `npm install -g pm2`
- [ ] `pm2 start ecosystem.config.js` çalıştırıldı
- [ ] `pm2 startup` ve `pm2 save` yapıldı

## 🗄️ Veritabanı (Sonraki Aşama)

- [ ] MySQL veritabanı Hostinger'da oluşturuldu
- [ ] Veritabanı kullanıcı adı ve şifresi alındı
- [ ] `.env.production` dosyasına `DATABASE_URL` eklendi
- [ ] SSH üzerinden `npx prisma generate` çalıştırıldı
- [ ] SSH üzerinden `npx prisma db push` çalıştırıldı

## ✅ Test ve Kontrol

- [ ] `https://kaplaapp.com/api/check` endpoint'i test edildi
- [ ] Ana sayfa açılıyor mu kontrol edildi
- [ ] Arama fonksiyonu çalışıyor mu test edildi
- [ ] PM2 logları kontrol edildi: `pm2 logs kapla`
- [ ] Browser console'da hata var mı kontrol edildi

## 📝 Notlar

- Veritabanı kurulumu sonraki aşamada yapılacak
- İlk deployment'ta sadece frontend çalışacak
- Veritabanı hazır olduğunda API endpoint'leri çalışacak

