'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempted with:', { email, password })
  }

  return (
    <div className="min-h-screen bg-brightix-background flex items-center justify-center">
      <Card className="w-full max-w-md bg-brightix-background border-brightix-highlight/20 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <div className="flex justify-center mb-4">
            {/* Avatar Image */}
            <Image
              src="/Lalith.jpg" // Change this path as necessary
              alt="User Avatar"
              width={80}
              height={80}
              className="rounded-full border-4 border-brightix-highlight shadow-lg"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-brightix-text animate-fadeIn animate-delay-0">
            Login to BrightiX
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-brightix-background text-brightix-text border-brightix-highlight/20"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-brightix-background text-brightix-text border-brightix-highlight/20"
              />
            </div>
            <Button type="submit" className="w-full bg-brightix-highlight text-brightix-text hover:bg-brightix-highlight/90 transition-all duration-200">
              Log In
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-brightix-text/80">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-brightix-highlight hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
