import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Story {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  category: string
}

const stories: Story[] = [
  {
    id: "1",
    title: "The Revival of Traditional Craftsmanship in Modern Design",
    excerpt:
      "Discover how artisans are blending centuries-old techniques with contemporary aesthetics to create products that honor tradition while embracing innovation.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 15, 2023",
    author: "Elena Martinez",
    category: "Craftsmanship",
  },
  {
    id: "2",
    title: "From Waste to Wonder: The Art of Upcycled Fashion",
    excerpt:
      "Meet the designers transforming discarded materials into high-quality fashion items, reducing waste and creating unique pieces with character and history.",
    image: "/placeholder.svg?height=400&width=600",
    date: "June 3, 2023",
    author: "Michael Chen",
    category: "Sustainability",
  },
  {
    id: "3",
    title: "The Journey of Leather: From Farm to Fashion",
    excerpt:
      "Follow the fascinating process of how raw hides are transformed into luxurious leather goods through traditional tanning methods and skilled craftsmanship.",
    image: "/placeholder.svg?height=400&width=600",
    date: "July 22, 2023",
    author: "Sophia Williams",
    category: "Materials",
  },
  {
    id: "4",
    title: "Preserving Cultural Heritage Through Textile Arts",
    excerpt:
      "Explore how artisans around the world are keeping their cultural traditions alive by passing down textile techniques from generation to generation.",
    image: "/placeholder.svg?height=400&width=600",
    date: "August 10, 2023",
    author: "David Okafor",
    category: "Culture",
  },
  {
    id: "5",
    title: "The Psychology of Handmade: Why We Value Artisanal Products",
    excerpt:
      "Delve into the psychological aspects of why handcrafted items hold special meaning in our increasingly mass-produced world.",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 5, 2023",
    author: "Amara Singh",
    category: "Psychology",
  },
  {
    id: "6",
    title: "Artisans of Change: How Craft Communities Are Driving Sustainability",
    excerpt:
      "Learn how craft communities around the world are leading the way in sustainable practices, from material sourcing to production methods.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 18, 2023",
    author: "Thomas Bergman",
    category: "Community",
  },
]

export default function StoriesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-medium mb-4">STORIES & INSPIRATION</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Explore the stories behind our products, the artisans who create them, and the impact of sustainable
          craftsmanship on communities and the environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <div key={story.id} className="border rounded-lg overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={story.image || "/placeholder.svg"}
                alt={story.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-medium">{story.category}</div>
            </div>
            <div className="p-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>{story.date}</span>
                <span>By {story.author}</span>
              </div>
              <h3 className="text-xl font-medium mb-2">{story.title}</h3>
              <p className="text-gray-600 mb-4">{story.excerpt}</p>
              <Link href={`/stories/${story.id}`}>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-medium mb-4">Share Your Story</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Are you an artisan or customer with a story to tell? We'd love to feature your experience with handcrafted
          products.
        </p>
        <Link href="/contact">
          <Button>Submit Your Story</Button>
        </Link>
      </div>
    </main>
  )
}
