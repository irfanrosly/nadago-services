import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LocalServiceHub - Neighborhood Services Directory',
  description: 'A community-driven directory for local neighborhood services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
