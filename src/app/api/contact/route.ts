import { NextResponse } from 'next/server'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export async function POST(request: Request) {
  const data = await request.json()

  if (!data?.name || !data?.email || !data?.message) {
    return NextResponse.json({ error: 'Invalid contact payload' }, { status: 400 })
  }

  try {
    await addDoc(collection(db, 'contacts'), {
      ...data,
      createdAt: serverTimestamp(),
    })
    return NextResponse.json({ message: 'Message submitted' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
