import { prisma } from '../../lib/prisma'
import { notFound } from 'next/navigation'
import AppointmentForm from '../../components/AppointmentForm'

interface ServiceCenterPageProps {
  params: {
    id: string
  }
}

export default async function ServiceCenterPage({ params }: ServiceCenterPageProps) {
  const center = await prisma.serviceCenter.findUnique({
    where: { id: params.id },
    include: {
      user: {
        select: {
          email: true,
        },
      },
    },
  })

  if (!center) {
    notFound()
  }

  const services = center.services.split(',').map((s) => s.trim())

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="card mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{center.shopName}</h1>
          <div className="flex items-center gap-4 mb-4">
            <p className="text-gray-600">📍 {center.city}</p>
            <div className="flex items-center">
              <span className="text-yellow-500">⭐</span>
              <span className="ml-1 text-gray-700 font-medium">{center.rating.toFixed(1)}</span>
            </div>
          </div>
          
          {center.description && (
            <p className="text-gray-700 mb-4">{center.description}</p>
          )}
          
          {center.address && (
            <p className="text-gray-600 mb-2">📍 {center.address}</p>
          )}
          
          {center.phone && (
            <p className="text-gray-600 mb-4">📞 {center.phone}</p>
          )}

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Hizmetler</h3>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={service}
                  className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-6">Randevu Al</h2>
          <AppointmentForm serviceCenterId={center.id} />
        </div>
      </div>
    </div>
  )
}

