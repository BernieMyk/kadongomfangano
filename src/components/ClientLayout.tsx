'use client'

import { ThemeProvider } from '@/context/ThemeContext'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}