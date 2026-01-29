import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { serviceCenterId, appointmentDate, notes } = await request.json()

    // TODO: Get authenticated user ID
    // For now, using a placeholder - this should come from session/auth
    const customerId = 'placeholder-customer-id'

    const appointment = await prisma.appointment.create({
      data: {
        serviceCenterId,
        customerId,
        appointmentDate: new Date(appointmentDate),
        notes,
        status: 'PENDING',
      },
      include: {
        serviceCenter: {
          select: {
            shopName: true,
          },
        },
      },
    })

    return NextResponse.json(appointment, { status: 201 })
  } catch (error) {
    console.error('Error creating appointment:', error)
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    )
  }
}

