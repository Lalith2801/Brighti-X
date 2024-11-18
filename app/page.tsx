'use client'

import Link from 'next/link'
import { ChevronRight, Code, Database, Brain, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useContent } from './contexts/ContentContext'

export default function HomePage() {
  const { content } = useContent()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          {content.home.title}
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          {content.home.description}
        </p>
        <div>
          <Link href="/careers">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Opportunities <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.services.map((service, index) => (
              <DomainCard 
                key={index}
                icon={[<Code className="h-10 w-10 text-primary" />, <Brain className="h-10 w-10 text-primary" />, <Database className="h-10 w-10 text-primary" />, <BarChart className="h-10 w-10 text-primary" />][index]}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/placeholder.svg?height=400&width=400" alt="About TechTrain" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">About TechTrain</h2>
            <p className="text-lg mb-6 text-gray-600">
              {content.about.content}
            </p>
            <Link href="/about">
              <Button variant="outline">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join our program and transform your career prospects</p>
          <Link href="/careers">
            <Button size="lg" variant="secondary">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

function DomainCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="mb-4 inline-block rounded-full bg-primary/10 p-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}