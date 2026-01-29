'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface ServiceCenter {
  id: string
  shopName: string
  city: string
  services: string
  rating: number
  description?: string
}

export default function SearchResults({ city, service }: { city?: string; service?: string }) {
  const [centers, setCenters] = useState<ServiceCenter[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const params = new URLSearchParams()
        if (city) params.set('city', city)
        if (service) params.set('service', service)
        
        const res = await fetch(`/api/service-centers?${params.toString()}`)
        const data = await res.json()
        setCenters(data)
      } catch (error) {
        console.error('Error fetching service centers:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCenters()
  }, [city, service])

  if (loading) {
    return <div className="text-center py-12">Yükleniyor...</div>
  }

  if (centers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">Sonuç bulunamadı.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {centers.map((center) => (
        <Link
          key={center.id}
          href={`/service-center/${center.id}`}
          className="card hover:shadow-lg transition-shadow duration-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{center.shopName}</h3>
          <p className="text-gray-600 mb-2">📍 {center.city}</p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">⭐</span>
            <span className="ml-1 text-gray-700 font-medium">{center.rating.toFixed(1)}</span>
          </div>
          <p className="text-sm text-gray-500 mb-3">{center.services}</p>
          {center.description && (
            <p className="text-sm text-gray-600 line-clamp-2">{center.description}</p>
          )}
        </Link>
      ))}
    </div>
  )
}

