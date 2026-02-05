import type { Metadata } from 'next'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://localservicehub.example.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'LocalServiceHub - Neighborhood Services Directory',
    template: '%s | LocalServiceHub',
  },
  description:
    'LocalServiceHub is a community-driven directory for trusted neighborhood services such as food, homestays, plumbers, electricians, tutors, and more.',
  keywords: [
    'local services',
    'neighborhood directory',
    'homestay',
    'food delivery',
    'plumber',
    'electrician',
    'cleaning service',
    'massage',
    'tuition',
    'Nilai',
    'Bandar Baru Nilai',
  ],
  authors: [{ name: 'LocalServiceHub' }],
  creator: 'LocalServiceHub',
  publisher: 'LocalServiceHub',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'LocalServiceHub - Neighborhood Services Directory',
    description:
      'Discover trusted local services in your neighborhood: food, homestays, repairs, tuition, and more.',
    siteName: 'LocalServiceHub',
    locale: 'en_MY',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LocalServiceHub - Neighborhood Services Directory',
    description:
      'Quickly find and contact trusted local service providers around you.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}

