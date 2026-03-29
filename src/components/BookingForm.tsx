'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

const initialState = {
  fullName: '',
  email: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
  message: '',
}

type BookingState = typeof initialState

export function BookingForm() {
  const [form, setForm] = useState<BookingState>(initialState)
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('saving')
    setError(null)

    try {
      await addDoc(collection(db, 'bookings'), {
        ...form,
        guests: Number(form.guests),
        createdAt: serverTimestamp(),
      })
      setStatus('success')
      setForm(initialState)
    } catch (err) {
      setError((err as Error).message)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Reservation Request</h3>

      <div className="grid gap-4 md:grid-cols-2">
        <input value={form.fullName} name="fullName" onChange={handleChange} required placeholder="Full Name" className="rounded-lg border p-3 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100" />
        <input value={form.email} name="email" onChange={handleChange} required type="email" placeholder="Email Address" className="rounded-lg border p-3 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100" />
        <input value={form.checkIn} name="checkIn" onChange={handleChange} required type="date" className="rounded-lg border p-3 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100" />
        <input value={form.checkOut} name="checkOut" onChange={handleChange} required type="date" className="rounded-lg border p-3 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100" />
        <select value={form.guests} name="guests" onChange={handleChange} className="rounded-lg border p-3 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100">
          {[1,2,3,4,5,6].map((n) => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
        </select>
      </div>

      <textarea value={form.message} name="message" onChange={handleChange} rows={4} placeholder="Special requests" className="mt-4 w-full rounded-lg border p-3 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100" />

      {status === 'success' && <p className="mt-3 text-sm text-emerald-600">Booking request sent successfully!</p>}
      {status === 'error' && <p className="mt-3 text-sm text-red-500">Error: {error}</p>}

      <button type="submit" disabled={status === 'saving'} className="mt-4 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60">
        {status === 'saving' ? 'Sending...' : 'Submit Booking'}
      </button>
    </form>
  )
}
