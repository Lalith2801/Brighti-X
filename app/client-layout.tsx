'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#202124] border-b border-[#202124]/20 h-16 z-50 relative">
        <div className="container mx-auto flex items-center justify-between px-4 h-full">
          {/* Left Logo */}
          <Link href="/" className="flex items-center z-30">
            <Image 
              src="/logo4.svg" 
              alt="BrightiX Logo" 
              width={200} 
              height={50} 
              className="w-auto h-auto max-w-[180px] max-h-[28px]"
            />
          </Link>

          {/* Center Image */}
          <div className="absolute inset-0 flex justify-center items-center h-full pointer-events-none md:pointer-events-auto z-10">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo2.svg" 
                alt="Center Image" 
                width={200} 
                height={50} 
                className="w-auto h-auto max-w-[180px]"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-30">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`fixed top-16 left-0 w-full bg-[#202124] border-t border-[#202124]/20 p-4 md:static md:flex md:space-x-8 md:p-0 md:top-0 md:left-auto md:w-auto z-20 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <Link
              href="/about"
              className="block md:inline-block text-white hover:text-[#A084DC] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block md:inline-block text-white hover:text-[#A084DC] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/careers"
              className="block md:inline-block text-white hover:text-[#A084DC] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/login"
              className="block md:inline-block text-white hover:text-[#A084DC] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {children}
    </>
  );
}
