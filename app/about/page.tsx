import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Code, Database, Brain, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900">
          Launch Your Tech Career with Real-World Experience
        </h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600">
          Gain valuable skills through internships and project-based learning
        </p>
        <div>
          <Link href="/careers">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto">
              Explore Opportunities <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-900">Our Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <DomainCard 
              icon={<Code className="h-8 w-8 md:h-10 md:w-10 text-primary" />}
              title="Web Technologies"
              description="Master modern web development frameworks and tools"
            />
            <DomainCard 
              icon={<Brain className="h-8 w-8 md:h-10 md:w-10 text-primary" />}
              title="Artificial Intelligence"
              description="Dive into machine learning and AI applications"
            />
            <DomainCard 
              icon={<Database className="h-8 w-8 md:h-10 md:w-10 text-primary" />}
              title="Data Analytics"
              description="Learn to extract insights from complex datasets"
            />
            <DomainCard 
              icon={<BarChart className="h-8 w-8 md:h-10 md:w-10 text-primary" />}
              title="Business Intelligence"
              description="Develop skills in data visualization and reporting"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image 
              src="/placeholder.svg" 
              alt="About TechTrain" 
              width={400} 
              height={400} 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">About TechTrain</h2>
            <p className="text-base md:text-lg mb-6 text-gray-600">
              TechTrain is dedicated to bridging the gap between academic learning and industry requirements. 
              We offer hands-on experience through internships and real-world projects, helping students build 
              impressive portfolios and gain the skills needed to excel in the tech industry.
            </p>
            <Link href="/about">
              <Button variant="outline" className="w-full md:w-auto">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">Join our program and transform your career prospects</p>
          <Link href="/careers">
            <Button size="lg" variant="secondary" className="w-full md:w-auto">
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
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}