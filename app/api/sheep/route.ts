import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const sheep = await prisma.sheep.findMany({
      include: {
        sire: true,
        dam: true,
      }
    });
    return NextResponse.json(sheep);
  } catch (error) {
    console.error('Failed to fetch sheep:', error);
    return NextResponse.json({ error: 'Failed to fetch sheep' }, { status: 500 });
  }
}
