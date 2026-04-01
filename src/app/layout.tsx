'use client'

import type { ReactNode } from 'react'
import Head from 'next/head'
import { ClientLayout } from '@/components/ClientLayout'
import '@/app/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Kadongo Resort | Mfangano Island</title>
        <meta name="description" content="Luxury resort on Mfangano Island with eco smart suites, kayaking, and safari adventures." />
      </Head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
