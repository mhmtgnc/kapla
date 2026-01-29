import SearchBar from '../components/SearchBar'
import ServiceCard from '../components/ServiceCard'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Araç Kaplama ve Cam Filmi Hizmeti
            </h1>
            <p className="text-xl text-gray-600">
              En iyi uygulama merkezlerini bulun ve hemen randevu alın
            </p>
          </div>
          
          {/* Large Search Bar */}
          <SearchBar />
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Popüler Hizmetler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="PPF (Paint Protection Film)"
            description="Araç boyasını koruyan şeffaf film kaplama"
            icon="🛡️"
          />
          <ServiceCard
            title="Cam Filmi"
            description="Güneş ışınlarından korunma ve gizlilik"
            icon="🌞"
          />
          <ServiceCard
            title="Ceramic Coating"
            description="Uzun ömürlü koruyucu seramik kaplama"
            icon="✨"
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nasıl Çalışır?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Ara</h3>
              <p className="text-gray-600">Şehrinizi ve hizmet türünü seçin</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Seç</h3>
              <p className="text-gray-600">Size uygun uygulama merkezini bulun</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Randevu Al</h3>
              <p className="text-gray-600">Uygun tarih ve saatte randevu oluşturun</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

