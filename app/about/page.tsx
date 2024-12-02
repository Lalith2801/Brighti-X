import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brightix-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-brightix-text">About BrightiX</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg mb-4 md:mb-6 text-brightix-text/80">
            BrightiX is a leading software consulting company dedicated to nurturing the next generation of tech talent. 
            We believe in the power of hands-on experience and project-based learning to bridge the gap between academic 
            knowledge and industry requirements.
          </p>
          <p className="text-base md:text-lg mb-4 md:mb-6 text-brightix-text/80">
            Our mission is to provide students and aspiring professionals with real-world experience through internships 
            and challenging projects. By working on actual client projects, our interns gain valuable skills, build impressive 
            portfolios, and prepare themselves for successful careers in the tech industry.
          </p>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-brightix-text/80">
            With a team of experienced mentors and a wide network of industry partners, we offer comprehensive training 
            and guidance in various domains including web technologies, artificial intelligence, data analytics, and 
            business intelligence.
          </p>
          <div className="text-center">
            <Link href="/careers">
              <Button size="lg" className="bg-brightix-highlight text-brightix-text hover:bg-brightix-highlight/90 w-full md:w-auto">
                Join Our Program
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}