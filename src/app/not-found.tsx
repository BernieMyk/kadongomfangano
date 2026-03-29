import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text flex items-center justify-center p-6">
      <div className="max-w-xl rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-md dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg mb-6">The page you’re looking for does not exist.</p>
        <Link href="/" className="rounded-lg border border-primary px-4 py-2 text-primary transition hover:bg-primary hover:text-white">Return Home</Link>
      </div>
    </main>
  )
}
