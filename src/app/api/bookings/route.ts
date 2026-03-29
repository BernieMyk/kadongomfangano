import { NextResponse } from 'next/server'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export async function POST(request: Request) {
  const data = await request.json()

  if (!data?.fullName || !data?.email || !data?.checkIn || !data?.checkOut) {
    return NextResponse.json({ error: 'Invalid booking payload' }, { status: 400 })
  }

  try {
    await addDoc(collection(db, 'bookings'), {
      ...data,
      guests: Number(data.guests ?? 1),
      createdAt: serverTimestamp(),
    })
    return NextResponse.json({ message: 'Booking created' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
