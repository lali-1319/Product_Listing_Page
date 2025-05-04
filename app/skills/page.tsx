import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Skill {
  id: string
  title: string
  description: string
  image: string
  level: string
}

const skills: Skill[] = [
  {
    id: "1",
    title: "Leather Crafting",
    description:
      "Learn the art of traditional leather crafting from master artisans. Create durable and beautiful leather goods using time-honored techniques.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Beginner to Advanced",
  },
  {
    id: "2",
    title: "Textile Weaving",
    description:
      "Discover the intricate process of textile weaving. From selecting yarns to operating looms, create stunning fabrics with unique patterns.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Intermediate",
  },
  {
    id: "3",
    title: "Sustainable Design",
    description:
      "Learn how to incorporate sustainable practices into product design. Reduce waste and environmental impact while creating beautiful products.",
    image: "/placeholder.svg?height=400&width=600",
    level: "All Levels",
  },
  {
    id: "4",
    title: "Upcycling Workshops",
    description:
      "Transform discarded materials into valuable products. These workshops teach creative approaches to giving new life to old materials.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Beginner",
  },
  {
    id: "5",
    title: "Digital Craftsmanship",
    description:
      "Blend traditional crafting techniques with digital tools. Learn how technology can enhance and preserve traditional craftsmanship.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Intermediate to Advanced",
  },
  {
    id: "6",
    title: "Product Photography",
    description:
      "Master the art of product photography to showcase your creations. Learn lighting, composition, and editing techniques.",
    image: "/placeholder.svg?height=400&width=600",
    level: "All Levels",
  },
]

export default function SkillsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-medium mb-4">ARTISAN SKILLS & WORKSHOPS</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Discover workshops and courses taught by our master artisans. Learn traditional crafting techniques and
          contemporary approaches to creating beautiful, sustainable products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill.id} className="border rounded-lg overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={skill.image || "/placeholder.svg"}
                alt={skill.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{skill.level}</div>
              <h3 className="text-xl font-medium mb-2">{skill.title}</h3>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <Link href={`/skills/${skill.id}`}>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium mb-2">Become an Instructor</h2>
          <p className="text-gray-600">
            Are you a skilled artisan interested in sharing your knowledge? Join our community of instructors.
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="/contact">
            <Button>Contact Us to Learn More</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
