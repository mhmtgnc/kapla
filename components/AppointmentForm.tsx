'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface AppointmentFormProps {
  serviceCenterId: string
}

export default function AppointmentForm({ serviceCenterId }: AppointmentFormProps) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const appointmentDateTime = new Date(`${date}T${time}`)
      
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceCenterId,
          appointmentDate: appointmentDateTime.toISOString(),
          notes,
        }),
      })

      if (res.ok) {
        router.push('/appointments/success')
      } else {
        alert('Randevu oluşturulamadı. Lütfen tekrar deneyin.')
      }
    } catch (error) {
      console.error('Error creating appointment:', error)
      alert('Bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setLoading(false)
    }
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
          Tarih
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={today}
          required
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
          Saat
        </label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
          Notlar (Opsiyonel)
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="input-field"
          placeholder="Araç modeli, özel istekler vb."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-3 text-lg"
      >
        {loading ? 'Gönderiliyor...' : 'Randevu Oluştur'}
      </button>
    </form>
  )
}

