'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-[#202124] border-b border-[#A084DC]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Initial%20Name%20Content%20Writer%20MK%20logo-kCjsa4oLKu2uWJu6MB7dfDIAnNfpMX.svg"
                alt="BrightiX Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            <div className={`md:flex space-y-4 md:space-y-0 md:space-x-8 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 md:left-auto right-0 md:right-auto bg-[#202124] md:bg-transparent p-4 md:p-0 border-b md:border-0 border-[#A084DC]/20`}>
              <Link href="/about" className="block md:inline-block text-white hover:text-[#A084DC] transition-colors">About</Link>
              <Link href="/services" className="block md:inline-block text-white hover:text-[#A084DC] transition-colors">Services</Link>
              <Link href="/careers" className="block md:inline-block text-white hover:text-[#A084DC] transition-colors">Careers</Link>
              <Link href="/login" className="block md:inline-block text-white hover:text-[#A084DC] transition-colors">Login</Link>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  )
}