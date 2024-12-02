'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CareersPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [resume, setResume] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Application submitted:', { name, email, resume, message })
    // Reset form fields
    setName('')
    setEmail('')
    setResume('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-brightix-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brightix-text">Career Opportunities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-brightix-text">Available Positions</h2>
            <div className="space-y-6">
              <PositionCard 
                title="Web Development Intern"
                description="Join our web development team and work on exciting projects using modern frameworks like React and Next.js."
              />
              <PositionCard 
                title="Data Science Intern"
                description="Dive into the world of data analytics and machine learning, working on real-world data sets and predictive models."
              />
              <PositionCard 
                title="UI/UX Design Intern"
                description="Help create stunning user interfaces and enhance user experiences for our client projects."
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-brightix-text">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-brightix-background text-brightix-text border-brightix-highlight/20"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-brightix-background text-brightix-text border-brightix-highlight/20"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                  value={resume}
                  onChange={(e) => setResume(e.target.value)}
                  required
                  className="bg-brightix-background text-brightix-text border-brightix-highlight/20"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about yourself and why you're interested in joining our program"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="bg-brightix-background text-brightix-text border-brightix-highlight/20"
                />
              </div>
              <Button type="submit" className="w-full bg-brightix-highlight text-brightix-text hover:bg-brightix-highlight/90">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

function PositionCard({ title, description }: { title: string, description: string }) {
  return (
    <Card className="bg-brightix-background border-brightix-highlight/20">
      <CardHeader>
        <CardTitle className="text-brightix-text">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-brightix-text/80">{description}</p>
      </CardContent>
    </Card>
  )
}