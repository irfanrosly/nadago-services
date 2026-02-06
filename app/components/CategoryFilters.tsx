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
    <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex gap-3 min-w-max px-1">
        {categories.map((category, index) => {
          const isSelected = selectedCategories.includes(category)
          const Icon = getCategoryIcon(category)
          return (
            <button
              key={category}
              onClick={() => onToggleCategory(category)}
              className={`group flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                isSelected
                  ? 'bg-gradient-to-br from-[#e07a5f] to-[#f4a261] text-white shadow-lg shadow-[#e07a5f]/30 scale-105'
                  : 'bg-white/60 backdrop-blur-sm text-warm-gray border-2 border-[#e07a5f]/20 hover:border-[#e07a5f]/40 hover:bg-white/80 shadow-sm hover:shadow-md'
              }`}
              style={{
                animationDelay: `${index * 30}ms`,
              }}
            >
              <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isSelected ? 'text-white' : 'text-[#e07a5f]'}`} />
              <span>{category}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

