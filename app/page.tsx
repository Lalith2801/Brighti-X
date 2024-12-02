import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Code, Database, Brain, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brightix-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-brightix-text">
          Launch Your Tech Career with Real-World Experience
        </h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 text-brightix-text/80">
          Gain valuable skills through internships and project-based learning
        </p>
        <div>
          <Link href="/careers">
            <Button size="lg" className="bg-brightix-highlight text-brightix-text hover:bg-brightix-highlight/90 w-full md:w-auto">
              Explore Opportunities <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-brightix-background/50 border-y border-brightix-highlight/20 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-brightix-text">Our Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <DomainCard 
              icon={<Code className="h-8 w-8 md:h-10 md:w-10 text-brightix-highlight" />}
              title="Web Technologies"
              description="Master modern web development frameworks and tools"
            />
            <DomainCard 
              icon={<Brain className="h-8 w-8 md:h-10 md:w-10 text-brightix-highlight" />}
              title="Artificial Intelligence"
              description="Dive into machine learning and AI applications"
            />
            <DomainCard 
              icon={<Database className="h-8 w-8 md:h-10 md:w-10 text-brightix-highlight" />}
              title="Data Analytics"
              description="Learn to extract insights from complex datasets"
            />
            <DomainCard 
              icon={<BarChart className="h-8 w-8 md:h-10 md:w-10 text-brightix-highlight" />}
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
              src="logo.svg" 
              alt="About BrightiX" 
              width={400} 
              height={400} 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-brightix-text">About BrightiX</h2>
            <p className="text-base md:text-lg mb-6 text-brightix-text/80">
              BrightiX is dedicated to bridging the gap between academic learning and industry requirements. 
              We offer hands-on experience through internships and real-world projects, helping students build 
              impressive portfolios and gain the skills needed to excel in the tech industry.
            </p>
            <Link href="/about">
              <Button variant="outline" className="w-full md:w-auto border-brightix-highlight text-brightix-highlight hover:bg-brightix-highlight hover:text-brightix-text">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brightix-highlight text-brightix-text py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">Join our program and transform your career prospects</p>
          <Link href="/careers">
            <Button size="lg" variant="outline" className="w-full md:w-auto border-brightix-text text-brightix-text hover:bg-brightix-text hover:text-brightix-highlight">
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
    <Card className="text-center bg-brightix-background border-brightix-highlight/20">
      <CardContent className="pt-6">
        <div className="mb-4 inline-block rounded-full bg-brightix-highlight/10 p-3">
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-brightix-text">{title}</h3>
        <p className="text-sm md:text-base text-brightix-text/80">{description}</p>
      </CardContent>
    </Card>
  )
}