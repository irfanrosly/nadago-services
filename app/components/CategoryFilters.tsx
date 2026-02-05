'use client'

import { getCategoryIcon } from '../utils/categoryIcons'

interface CategoryFiltersProps {
  categories: string[]
  selectedCategories: string[]
  onToggleCategory: (category: string) => void
}

export default function CategoryFilters({
  categories,
  selectedCategories,
  onToggleCategory,
}: CategoryFiltersProps) {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex gap-2 min-w-max px-1">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category)
          const Icon = getCategoryIcon(category)
          return (
            <button
              key={category}
              onClick={() => onToggleCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                isSelected
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{category}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

