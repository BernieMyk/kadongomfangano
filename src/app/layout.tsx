import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ClientLayout } from '@/components/ClientLayout'

export const metadata: Metadata = {
  title: 'Kadongo Resort | Mfangano Island',
  description: 'Luxury resort on Mfangano Island with eco smart suites, kayaking, and safari adventures.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
