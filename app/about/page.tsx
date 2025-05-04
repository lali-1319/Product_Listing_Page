import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-medium mb-4">ABOUT METÀ MUSE</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Connecting artisans with conscious consumers through sustainable, handcrafted products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-medium mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At Metà Muse, we believe in the power of craftsmanship to transform lives and preserve cultural heritage.
            Our mission is to create a sustainable marketplace that connects skilled artisans with conscious consumers
            who value quality, story, and impact.
          </p>
          <p className="text-gray-600 mb-4">
            We curate a collection of handcrafted products that celebrate traditional techniques while embracing
            contemporary design. Each item in our marketplace tells a story of exceptional skill, cultural significance,
            and sustainable practices.
          </p>
          <p className="text-gray-600">
            By choosing Metà Muse, you're not just purchasing a product – you're supporting artisans, preserving
            cultural heritage, and promoting sustainable consumption.
          </p>
        </div>
        <div className="relative h-80 md:h-96">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Artisan at work"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-medium mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-medium">1</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Craftsmanship</h3>
            <p className="text-gray-600">
              We celebrate exceptional skill and traditional techniques, ensuring every product meets the highest
              standards of quality.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-medium">2</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We prioritize environmentally responsible materials and production methods to minimize our impact on the
              planet.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-medium">3</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Community</h3>
            <p className="text-gray-600">
              We support artisan communities by providing fair compensation and helping preserve cultural heritage.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-medium mb-6 text-center">Developer Information</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 border rounded-lg">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">About the Developer</h3>
            <p className="text-gray-600">
              This e-commerce platform was developed by [Your Name], a full-stack developer specializing in creating
              responsive, user-friendly web applications with modern technologies.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Technical Skills</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
              <li>Backend: Node.js, Express, RESTful APIs</li>
              <li>Database: MongoDB, PostgreSQL</li>
              <li>Deployment: Vercel, Netlify, AWS</li>
              <li>Version Control: Git, GitHub</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Project Features</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Server-side rendering for improved performance and SEO</li>
              <li>Responsive design for optimal viewing on all devices</li>
              <li>User authentication and account management</li>
              <li>Integration with external APIs for product data</li>
              <li>Accessible UI components following WCAG guidelines</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Contact Information</h3>
            <p className="text-gray-600">
              For inquiries about this project or to discuss potential collaborations, please reach out through the
              contact form or directly at:
            </p>
            <p className="text-gray-600 mt-2">
              Email: developer@example.com
              <br />
              GitHub: github.com/yourusername
              <br />
              LinkedIn: linkedin.com/in/yourusername
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-medium mb-4">Join Our Community</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Whether you're an artisan looking to showcase your products or a customer seeking unique handcrafted items, we
          invite you to be part of our growing community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
          <Link href="/shop">
            <Button variant="outline">Explore Products</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
