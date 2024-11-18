'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">TechTrain</Link>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            <div className={`md:flex space-y-4 md:space-y-0 md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 md:left-auto right-0 md:right-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}>
              <Link href="/about" className="block md:inline-block text-gray-600 hover:text-primary">About</Link>
              <Link href="/services" className="block md:inline-block text-gray-600 hover:text-primary">Services</Link>
              <Link href="/careers" className="block md:inline-block text-gray-600 hover:text-primary">Careers</Link>
              <Link href="/login" className="block md:inline-block text-gray-600 hover:text-primary">Login</Link>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  )
}