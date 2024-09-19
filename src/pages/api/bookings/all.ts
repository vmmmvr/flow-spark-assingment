// app/api/users/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// GET /api/bookings/all
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
      const bookings = await prisma.bookings.findMany({
        select: {
          date: true,
          time: true
        }
      });
      return res.status(200).json({bookings});
  } catch (error) {
    console.error('Error handling request:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}