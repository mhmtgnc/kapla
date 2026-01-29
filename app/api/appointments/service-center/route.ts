import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET() {
  try {
    // TODO: Get authenticated service center user ID
    // For now, returning all appointments (should be filtered by service center)
    const appointments = await prisma.appointment.findMany({
      include: {
        customer: {
          select: {
            email: true,
          },
        },
      },
      orderBy: {
        appointmentDate: 'asc',
      },
    })

    return NextResponse.json(appointments)
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    )
  }
}

