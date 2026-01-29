import { Suspense } from 'react'
import SearchResults from '../../components/SearchResults'

export default function SearchPage({
  searchParams,
}: {
  searchParams: { city?: string; service?: string }
}) {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Arama Sonuçları
        </h1>
        <Suspense fallback={<div className="text-center py-12">Yükleniyor...</div>}>
          <SearchResults city={searchParams.city} service={searchParams.service} />
        </Suspense>
      </div>
    </div>
  )
}

