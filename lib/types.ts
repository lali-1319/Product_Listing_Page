export interface Product {
  id: string
  name: string
  price: number
  image: string
  isNew?: boolean
  outOfStock?: boolean
}

export interface User {
  id: string
  email: string
  name?: string
}
