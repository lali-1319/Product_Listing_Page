"use client"

import { useState } from "react"
import Image from "next/image"
import type { Product } from "@/lib/types"
import { Heart } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { user } = useAuth()
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="relative group">
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            {product.isNew && (
              <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 z-10">NEW PRODUCT</div>
            )}
            {product.outOfStock && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 z-10">OUT OF STOCK</div>
            )}
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <button onClick={() => toggleFavorite(product.id)} className="absolute top-2 right-2 p-2 z-10">
              <Heart
                className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-700"}`}
              />
            </button>
          </div>
          <div className="mt-3">
            <h3 className="text-sm font-medium uppercase">{product.name}</h3>
            <div className="mt-1 text-xs text-gray-500">
              {user ? (
                <span>${product.price.toFixed(2)}</span>
              ) : (
                <span>Sign in or create an account to see pricing</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
