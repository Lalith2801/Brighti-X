"use client";
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">About TechTrain</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 text-gray-600">
            TechTrain is a leading software consulting company dedicated to nurturing the next generation of tech talent. 
            We believe in the power of hands-on experience and project-based learning to bridge the gap between academic 
            knowledge and industry requirements.
          </p>
          <p className="text-lg mb-6 text-gray-600">
            Our mission is to provide students and aspiring professionals with real-world experience through internships 
            and challenging projects. By working on actual client projects, our interns gain valuable skills, build impressive 
            portfolios, and prepare themselves for successful careers in the tech industry.
          </p>
          <p className="text-lg mb-8 text-gray-600">
            With a team of experienced mentors and a wide network of industry partners, we offer comprehensive training 
            and guidance in various domains including web technologies, artificial intelligence, data analytics, and 
            business intelligence.
          </p>
          <div className="text-center">
            <Link href="/careers">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Join Our Program
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}