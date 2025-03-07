"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample data for testimonials
const testimonials = [
  {
    id: 1,
    name: "James Miller",
    title: "Product and Sales Manager",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "As a busy professional, managing investments can be challenging, but Pagedone simplifies this task by providing me with the tools to stay on top of my portfolio effortlessly. Its intuitive interface allows me to make informed decisions swiftly, ensuring that I can navigate my investments efficiently despite a hectic schedule.",
  },
  {
    id: 2,
    name: "Mia Thompson",
    title: "Product Designer",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "Pagedone has revolutionized how I approach design projects. The platform's comprehensive toolkit and streamlined workflow have significantly reduced my production time while enhancing the quality of my deliverables. I particularly appreciate the intuitive interface that makes complex design tasks accessible and manageable.",
  },
  {
    id: 3,
    name: "Olivia Carter",
    title: "Design Lead",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "Leading a design team requires both creative vision and practical organization. Pagedone delivers on both fronts, providing my team with powerful tools that foster collaboration and innovation. The platform's versatility has become indispensable to our creative process and client satisfaction.",
  },
  {
    id: 4,
    name: "Matthew Bennett",
    title: "Sales Manager",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "In sales, time is money, and Pagedone has given me back hours each week. The platform's ability to generate professional materials quickly has enhanced my client presentations and improved conversion rates. I can confidently say that Pagedone has become a competitive advantage for our sales team.",
  },
]

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0])

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">What Customers Are Saying About Pagedone</h1>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          This practical guide is your roadmap to success, offering invaluable insights, strategies, and actionable
          advice tailored to the unique challenges faced by creative entrepreneurs.
        </p>

        {/* Testimonial avatars */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`flex items-center gap-3 cursor-pointer pb-2 ${
                selectedTestimonial.id === testimonial.id ? "border-b-2 border-red-500" : ""
              }`}
              onClick={() => setSelectedTestimonial(testimonial)}
            >
              <Avatar className="h-12 w-12 border border-gray-700">
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured testimonial */}
        <div className="rounded-2xl border border-gray-800 p-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={selectedTestimonial.image || "/placeholder.svg"}
                  alt={selectedTestimonial.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-1">{selectedTestimonial.name}</h3>
              <p className="text-red-500 mb-6">{selectedTestimonial.title}</p>

              <h4 className="text-3xl font-bold mb-4">It highlights customer satisfaction, testimonials.</h4>

              <p className="text-gray-300 leading-relaxed">{selectedTestimonial.testimonial}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

