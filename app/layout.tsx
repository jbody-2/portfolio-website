import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import ScrollReset from '@/components/scroll-reset'
import './globals.css'

export const metadata: Metadata = {
  title: 'Julian Body — Senior Experience Designer',
  description: 'Julian Body is a senior experience designer at eBay, currently building AI buyer experiences. Based in the San Francisco Bay Area.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F5F5' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0B0B' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/Manrope-Variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <Script id="theme-init" strategy="beforeInteractive">{`document.documentElement.classList.toggle('theme-dark', localStorage.getItem('portfolio-theme') === 'dark')`}</Script>
      </head>
      <body className="antialiased">
        <ScrollReset />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
