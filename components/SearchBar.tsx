'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [city, setCity] = useState('')
  const [service, setService] = useState('')
  const router = useRouter()

  const cities = [
    'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 
    'Adana', 'Gaziantep', 'Konya', 'Kayseri', 'Mersin'
  ]

  const services = [
    'PPF (Paint Protection Film)',
    'Cam Filmi',
    'Ceramic Coating',
    'Vinil Kaplama',
    'Tüm Hizmetler'
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (city || service) {
      const params = new URLSearchParams()
      if (city) params.set('city', city)
      if (service) params.set('service', service)
      router.push(`/search?${params.toString()}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* City Select */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            Şehir
          </label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input-field w-full"
          >
            <option value="">Tüm Şehirler</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Service Select */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Hizmet Türü
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="input-field w-full"
          >
            <option value="">Tüm Hizmetler</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="btn-primary w-full h-[50px] text-lg font-semibold"
          >
            🔍 Ara
          </button>
        </div>
      </div>
    </form>
  )
}

