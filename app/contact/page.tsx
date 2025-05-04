"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formState)

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-medium mb-4">CONTACT US</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Have questions about our products, services, or want to collaborate? We'd love to hear from you. Fill out the
          form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-xl font-medium mb-6">Send Us a Message</h2>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">
                Your message has been sent successfully. We'll get back to you as soon as possible.
              </p>
              <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="inquiryType">Inquiry Type</Label>
                <Select value={formState.inquiryType} onValueChange={handleSelectChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product">Product Inquiry</SelectItem>
                    <SelectItem value="order">Order Status</SelectItem>
                    <SelectItem value="returns">Returns & Refunds</SelectItem>
                    <SelectItem value="collaboration">Collaboration</SelectItem>
                    <SelectItem value="press">Press & Media</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" value={formState.subject} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>

        <div>
          <h2 className="text-xl font-medium mb-6">Contact Information</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Customer Support</h3>
              <p className="text-gray-600 mb-1">Email: customercare@metamuse.com</p>
              <p className="text-gray-600 mb-1">Phone: +44 221 133 5360</p>
              <p className="text-gray-600">Hours: Monday-Friday, 9am-6pm CET</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Business Inquiries</h3>
              <p className="text-gray-600 mb-1">Email: business@metamuse.com</p>
              <p className="text-gray-600">For partnerships, press, and collaboration opportunities</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Headquarters</h3>
              <p className="text-gray-600 mb-1">Metà Muse Ltd.</p>
              <p className="text-gray-600 mb-1">123 Artisan Street</p>
              <p className="text-gray-600 mb-1">Milan, 20121</p>
              <p className="text-gray-600">Italy</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Developer Contact</h2>
            <div className="bg-white border p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                For technical inquiries about this website or to discuss development projects:
              </p>
              <p className="text-gray-600 mb-1">Name: [Your Name]</p>
              <p className="text-gray-600 mb-1">Email: developer@example.com</p>
              <p className="text-gray-600 mb-1">GitHub: github.com/yourusername</p>
              <p className="text-gray-600">LinkedIn: linkedin.com/in/yourusername</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
