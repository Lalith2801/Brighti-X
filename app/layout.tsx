import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechTrain - Software Consulting and Training',
  description: 'Launch your tech career with real-world experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">TechTrain</Link>
            <div className="space-x-4">
              <Link href="/about" className="text-gray-600 hover:text-primary">About</Link>
              <Link href="/services" className="text-gray-600 hover:text-primary">Services</Link>
              <Link href="/careers" className="text-gray-600 hover:text-primary">Careers</Link>
              <Link href="/login" className="text-gray-600 hover:text-primary">Login</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}