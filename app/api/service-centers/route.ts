import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const city = searchParams.get('city')
    const service = searchParams.get('service')

    const where: any = {}

    if (city) {
      where.city = city
    }

    if (service) {
      where.services = {
        contains: service,
      }
    }

    const centers = await prisma.serviceCenter.findMany({
      where,
      include: {
        user: {
          select: {
            email: true,
          },
        },
      },
      orderBy: {
        rating: 'desc',
      },
    })

    return NextResponse.json(centers)
  } catch (error) {
    console.error('Error fetching service centers:', error)
    return NextResponse.json(
      { error: 'Failed to fetch service centers' },
      { status: 500 }
    )
  }
}

