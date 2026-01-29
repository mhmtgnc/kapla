'use client'

import { useEffect, useState } from 'react'
import AppointmentCalendar from '@/components/AppointmentCalendar'

interface Appointment {
  id: string
  appointmentDate: string
  status: string
  customer: {
    email: string
  }
  notes?: string
}

export default function ServiceCenterDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Implement authentication check
    fetchAppointments()
  }, [])

  const fetchAppointments = async () => {
    try {
      const res = await fetch('/api/appointments/service-center')
      const data = await res.json()
      setAppointments(data)
    } catch (error) {
      console.error('Error fetching appointments:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusUpdate = async (appointmentId: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/appointments/${appointmentId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      
      if (res.ok) {
        fetchAppointments()
      }
    } catch (error) {
      console.error('Error updating appointment:', error)
    }
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Randevu Yönetim Paneli
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar View */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Takvim Görünümü</h2>
              <AppointmentCalendar appointments={appointments} />
            </div>
          </div>

          {/* Appointments List */}
          <div className="lg:col-span-1">
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Randevular</h2>
              <div className="space-y-4">
                {appointments.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Henüz randevu yok</p>
                ) : (
                  appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-gray-900">
                            {new Date(appointment.appointmentDate).toLocaleDateString('tr-TR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                          <p className="text-sm text-gray-600">{appointment.customer.email}</p>
                        </div>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            appointment.status === 'APPROVED'
                              ? 'bg-green-100 text-green-800'
                              : appointment.status === 'PENDING'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {appointment.status === 'APPROVED'
                            ? 'Onaylandı'
                            : appointment.status === 'PENDING'
                            ? 'Beklemede'
                            : appointment.status}
                        </span>
                      </div>
                      {appointment.notes && (
                        <p className="text-sm text-gray-500 mt-2">{appointment.notes}</p>
                      )}
                      <div className="mt-3 flex gap-2">
                        {appointment.status === 'PENDING' && (
                          <>
                            <button
                              onClick={() => handleStatusUpdate(appointment.id, 'APPROVED')}
                              className="btn-primary text-sm py-1 px-3"
                            >
                              Onayla
                            </button>
                            <button
                              onClick={() => handleStatusUpdate(appointment.id, 'REJECTED')}
                              className="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-3 rounded-lg"
                            >
                              Reddet
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

