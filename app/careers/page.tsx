'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { ToastProvider } from "@/components/ui/toast"

function PositionCard({ title, description }: { title: string, description: string }) {
  return (
    <Card className="bg-brightix-background border-brightix-highlight/20 hover:scale-105 hover:bg-brightix-highlight/10 transition-all duration-300 ease-in-out">
      <CardHeader>
        <CardTitle className="text-brightix-text">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-brightix-text/80">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function CareersPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [resume, setResume] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, resume, message }),
      })

      if (response.ok) {
        toast({
          title: "Application Submitted",
          description: "Thank you for your application. We'll be in touch soon!",
        })
        // Reset form fields
        setName('')
        setEmail('')
        setResume('')
        setMessage('')
      } else {
        throw new Error('Failed to submit application')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ToastProvider>
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
                  title="UI/UX Design Intern"
                  description="Help create stunning user interfaces and enhance user experiences for our client projects."
                />
                <PositionCard 
                  title="Cybersecurity Intern"
                  description="Secure systems and protect data with cutting-edge cybersecurity skills."
                />
                <PositionCard 
                  title="AI & ML Intern"
                  description="Work on machine learning models and AI projects with real-world applications."
                />
                <PositionCard 
                  title="Cloud Intern"
                  description="Gain experience with cloud computing platforms and services, such as Microsoft Azure."
                />
                <PositionCard 
                  title="Web Technologies Intern"
                  description="Master modern web development frameworks and tools, enhancing your technical skills."
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
                    className="bg-brightix-background text-brightix-text border-brightix-highlight/20 hover:border-brightix-highlight focus:ring focus:ring-brightix-highlight focus:ring-opacity-50 transition-all duration-300"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-brightix-background text-brightix-text border-brightix-highlight/20 hover:border-brightix-highlight focus:ring focus:ring-brightix-highlight focus:ring-opacity-50 transition-all duration-300"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    required
                    className="bg-brightix-background text-brightix-text border-brightix-highlight/20 hover:border-brightix-highlight focus:ring focus:ring-brightix-highlight focus:ring-opacity-50 transition-all duration-300"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about yourself and why you're interested in joining our program"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="bg-brightix-background text-brightix-text border-brightix-highlight/20 hover:border-brightix-highlight focus:ring focus:ring-brightix-highlight focus:ring-opacity-50 transition-all duration-300"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-brightix-highlight text-brightix-text hover:scale-105 hover:bg-brightix-highlight/90 transition-all duration-300 ease-in-out"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ToastProvider>
  )
}
