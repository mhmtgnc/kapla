import Link from 'next/link'

export default function AppointmentSuccessPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl">✓</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Randevu Başarıyla Oluşturuldu!
        </h1>
        <p className="text-gray-600 mb-8">
          Randevunuz uygulama merkezi tarafından onaylandıktan sonra size bildirim gönderilecektir.
        </p>
        <div className="space-y-3">
          <Link href="/" className="btn-primary block w-full">
            Ana Sayfaya Dön
          </Link>
          <Link href="/dashboard/customer" className="btn-secondary block w-full">
            Randevularımı Görüntüle
          </Link>
        </div>
      </div>
    </div>
  )
}

