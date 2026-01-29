# Kapla - Araç Kaplama ve Cam Filmi Marketplace

Next.js 14+ (App Router) kullanılarak geliştirilmiş profesyonel bir marketplace uygulaması. Araç kaplama ve cam filmi hizmeti veren uygulama merkezleri ile müşterileri buluşturur.

## 🚀 Özellikler

- **Müşteri Arayüzü**: Şehir ve hizmet türüne göre arama
- **Uygulama Merkezi Paneli**: Takvim bazlı randevu yönetimi
- **PWA Desteği**: Telefona uygulama olarak yüklenebilir
- **Modern Tasarım**: Pastel indigo ve mint yeşili renk paleti, minimalist arayüz

## 📋 Teknik Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Database**: MySQL (Prisma ORM)
- **Authentication**: NextAuth.js (hazır altyapı)
- **TypeScript**: Tam tip güvenliği

## 🛠️ Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. `.env` dosyasını oluşturun:
```bash
cp .env.example .env
```

3. `.env` dosyasında veritabanı bağlantı bilgilerini güncelleyin:
```
DATABASE_URL="mysql://user:password@localhost:3306/kapla"
NEXTAUTH_SECRET="your-secret-key-here"
```

4. Prisma veritabanını oluşturun:
```bash
npx prisma generate
npx prisma db push
```

5. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## 📁 Proje Yapısı

```
APP/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard sayfaları
│   ├── globals.css        # Global stiller
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Ana sayfa
├── components/            # React bileşenleri
├── lib/                   # Yardımcı fonksiyonlar
│   ├── prisma.ts         # Prisma client
│   └── auth.ts           # Authentication yardımcıları
├── prisma/               # Prisma şeması
│   └── schema.prisma     # Veritabanı modelleri
├── public/               # Statik dosyalar
│   └── manifest.json     # PWA manifest
└── config/               # Yapılandırma dosyaları
```

## 🗄️ Veritabanı Modelleri

### User
- Email, şifre, rol (Müşteri veya Uygulama Merkezi)

### ServiceCenter
- Dükkan adı, şehir, hizmetler, puanlama

### Appointment
- Randevu tarihi, müşteri, dükkan, durum

## 🔐 API Endpoints

- `GET /api/check` - Health check endpoint
- `GET /api/service-centers` - Uygulama merkezlerini listele
- `GET /api/appointments/service-center` - Randevuları listele
- `PATCH /api/appointments/[id]` - Randevu durumunu güncelle

## 📱 PWA Özellikleri

Uygulama PWA olarak yapılandırılmıştır. Tarayıcıdan "Ana Ekrana Ekle" seçeneği ile telefona yüklenebilir.

## 🚢 Deployment

Hostinger (kaplaapp.com) için production ortamı hazırlanmıştır. `.env.production` dosyasında production veritabanı bilgileri saklanmalıdır.

## 📝 Notlar

- İleri seviye özellikler için gerekli altyapı hazırlanmıştır
- Authentication sistemi için NextAuth.js entegrasyonu yapılabilir
- Daha fazla özellik eklemek için mevcut yapı genişletilebilir

