import type { Metadata } from 'next'
import { Geist, Geist_Mono, Crimson_Text, Lora } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _crimsonText = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"] });
const _lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Infinite Home Healthcare | Professional In-Home Care Services',
  description: 'Infinite Home Healthcare provides compassionate, professional in-home care services for seniors and individuals with special needs in Commerce City, Colorado.',
  icons: {
      icon: [
        {
          url: '/images/infinitehome-logo-remove.png',
          media: '(prefers-color-scheme: light)',
        },
        {
          url: '/images/infinitehome-logo-remove.png',
          media: '(prefers-color-scheme: dark)',
        },
        {
          url: '/images/infinitehome-logo-remove.png',
          type: 'image/svg+xml',
        },
      ],
      apple: '/images/infinitehome-logo-remove.png',
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
