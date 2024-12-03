"use client";

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Trigger the animation once the component is mounted
    setInView(true);
  }, []);

  return (
    <div className="min-h-screen bg-brightix-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h1
          className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-brightix-text transition-opacity duration-1000 ease-in-out ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          About BrightiX
        </h1>
        <div
          id="about-section"
          className={`max-w-3xl mx-auto transition-all duration-1000 ease-in-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-base md:text-lg mb-4 md:mb-6 text-brightix-text/80">
            Welcome to Brightix, where perseverance meets opportunity. Founded by B.S.M Somnath Chakravarthi, 
            the Founder and CEO, and a Computer Science graduate with a specialization in Cybersecurity, 
            Brightix is built on the values of hard work, dedication, and a passion for empowering others.
          </p>
          <p className="text-base md:text-lg mb-4 md:mb-6 text-brightix-text/80">
            Our mission is simple yet impactful: to help individuals who’ve faced setbacks in interviews or are looking to kickstart their careers in tech. 
            At Brightix, interns don’t just learn—they gain real-world experience by working on actual projects, 
            equipping them with the skills and confidence needed to succeed in today’s tech-driven world.
          </p>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-brightix-text/80">
            We don’t provide ready-made solutions—we empower our interns to explore, learn, and create, 
            fostering growth and innovation at every step. 
            At Brightix, we believe everyone deserves a second chance and the right platform to shine.
          </p>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-brightix-text/80">
            Let’s redefine your career journey together.
          </p>
          <div className="text-center">
            <Link href="/careers">
              <Button
                size="lg"
                className="bg-brightix-highlight text-brightix-text hover:bg-brightix-highlight/90 w-full md:w-auto transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Join Our Program
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
