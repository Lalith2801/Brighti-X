"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: "Internship Program",
      description: "Gain hands-on experience working on real client projects under the guidance of experienced mentors.",
      features: ["3-6 month programs", "Mentorship from industry experts", "Exposure to diverse tech stacks"]
    },
    {
      title: "Project-Based Learning",
      description: "Work on challenging projects to build your portfolio and enhance your problem-solving skills.",
      features: ["Real-world projects", "Collaborative team environment", "Regular code reviews and feedback"]
    },
    {
      title: "Skill Development Workshops",
      description: "Participate in workshops and training sessions to stay updated with the latest industry trends.",
      features: ["Weekly tech talks", "Hands-on coding sessions", "Soft skills development"]
    },
    {
      title: "Career Guidance",
      description: "Receive personalized career advice and support in your job search process.",
      features: ["Resume building", "Interview preparation", "Networking opportunities"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}