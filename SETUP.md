# Kapla Kurulum Rehberi

## Hızlı Başlangıç

### 1. Bağımlılıkları Yükleyin
```bash
npm install
```

### 2. Ortam Değişkenlerini Ayarlayın

`.env` dosyası oluşturun (`.env.example` dosyasını kopyalayarak):
```bash
cp .env.example .env
```

`.env` dosyasını düzenleyin ve MySQL veritabanı bilgilerinizi girin:
```
DATABASE_URL="mysql://kullanici_adi:sifre@localhost:3306/kapla"
NEXTAUTH_SECRET="rastgele-gizli-anahtar-buraya"
```

### 3. Veritabanını Oluşturun

Prisma şemasını veritabanına uygulayın:
```bash
npx prisma generate
npx prisma db push
```

### 4. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

Uygulama http://localhost:3000 adresinde çalışacaktır.

## Veritabanı Yönetimi

### Prisma Studio ile Veritabanını Görüntüleme
```bash
npm run db:studio
```

### Yeni Migration Oluşturma
```bash
npm run db:migrate
```

## Production Deployment (Hostinger)

1. `.env.production` dosyası oluşturun ve production veritabanı bilgilerini ekleyin
2. Build alın:
```bash
npm run build
```
3. Production sunucusunu başlatın:
```bash
npm start
```

## Önemli Notlar

- İlk çalıştırmada veritabanı tabloları otomatik oluşturulacaktır
- Authentication sistemi henüz tam entegre edilmemiştir (TODO olarak işaretlenmiştir)
- PWA icon dosyalarını (`icon-192x192.png` ve `icon-512x512.png`) `public/` klasörüne eklemeniz gerekmektedir

