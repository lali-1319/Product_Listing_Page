import type { Product } from "./types"

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://fakestoreapi.com/products")

    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }

    const data = await response.json()

    // Transform the data to match our Product interface
    return data.map((item: any) => ({
      id: item.id.toString(),
      name: item.title.toUpperCase(),
      price: item.price,
      image: item.image,
      isNew: Math.random() > 0.8, // Randomly mark some products as new
      outOfStock: Math.random() > 0.9, // Randomly mark some products as out of stock
    }))
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function signIn(email: string, password: string) {
  // In a real app, you would make an API call to your authentication endpoint
  return {
    id: "1",
    email,
    name: "User",
  }
}

export async function signUp(email: string, password: string, name: string) {
  // In a real app, you would make an API call to your registration endpoint
  return {
    id: "1",
    email,
    name,
  }
}
