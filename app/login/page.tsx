'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
      <Card className="w-full max-w-md bg-brightix-background border-brightix-highlight/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-brightix-text">Login to BrightiX</CardTitle>
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
            <Button type="submit" className="w-full bg-brightix-highlight text-brightix-text hover:bg-brightix-highlight/90">
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