import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Kadongo Resort | Mfangano Island',
  description: 'Luxury resort on Mfangano Island with eco smart suites, kayaking, and safari adventures.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
