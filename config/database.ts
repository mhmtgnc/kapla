import { prisma } from '@/lib/prisma'

export async function connectDatabase() {
  try {
    await prisma.$connect()
    console.log('✅ Database connected successfully')
  } catch (error) {
    console.error('❌ Database connection error:', error)
    throw error
  }
}

export async function disconnectDatabase() {
  await prisma.$disconnect()
}

