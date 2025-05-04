import { fetchProducts } from "@/lib/api"
import ProductGrid from "@/components/product-grid"
import FilterSidebar from "@/components/filter-sidebar"

export default async function ShopPage() {
  const products = await fetchProducts()

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-medium mb-4">DISCOVER OUR PRODUCTS</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Explore our curated collection of handcrafted products. Each item tells a story of exceptional craftsmanship
          and sustainable practices, bringing unique character to your everyday life.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <FilterSidebar />
        </div>
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">3425 ITEMS</div>
            <div className="flex items-center gap-2">
              <button className="text-xs text-gray-500 uppercase">Hide Filter</button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">RECOMMENDED</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
          <ProductGrid products={products} />
        </div>
      </div>
    </main>
  )
}
