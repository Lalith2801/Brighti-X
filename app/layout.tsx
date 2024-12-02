import './globals.css'
import { Inter } from 'next/font/google'
import ClientLayout from './client-layout'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BrightiX - Software Consulting and Training',
  description: 'Launch your tech career with real-world experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#202124] text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}