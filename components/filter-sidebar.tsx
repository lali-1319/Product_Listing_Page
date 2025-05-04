"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FilterCategory {
  name: string
  options: string[]
}

export default function FilterSidebar() {
  const filterCategories: FilterCategory[] = [
    { name: "CUSTOMIZABLE", options: ["Yes"] },
    { name: "IDEAL FOR", options: ["All"] },
    { name: "OCCASION", options: ["All"] },
    { name: "WORK", options: ["All"] },
    { name: "FABRIC", options: ["All"] },
    { name: "SEGMENT", options: ["All"] },
    { name: "SUITABLE FOR", options: ["All"] },
    { name: "RAW MATERIALS", options: ["All"] },
    { name: "PATTERN", options: ["All"] },
  ]

  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    filterCategories.map((category) => category.name),
  )

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName) ? prev.filter((name) => name !== categoryName) : [...prev, categoryName],
    )
  }

  return (
    <div className="space-y-6">
      {filterCategories.map((category) => (
        <div key={category.name} className="border-b pb-4">
          <button
            className="flex justify-between items-center w-full py-2 text-sm font-medium"
            onClick={() => toggleCategory(category.name)}
          >
            <span>{category.name}</span>
            {expandedCategories.includes(category.name) ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          {expandedCategories.includes(category.name) && (
            <div className="mt-2 space-y-2">
              {category.options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox id={`${category.name}-${option}`} />
                  <label htmlFor={`${category.name}-${option}`} className="text-sm text-gray-600">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
