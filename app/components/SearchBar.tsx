'use client'

import { Search } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full group">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <Search className="w-5 h-5 text-[#e07a5f]/60 group-focus-within:text-[#e07a5f] transition-colors" />
      </div>
      <input
        type="text"
        placeholder="Search services, categories, or locations..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-6 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#e07a5f]/20 rounded-2xl focus:outline-none focus:border-[#e07a5f] focus:ring-4 focus:ring-[#e07a5f]/10 transition-all shadow-sm hover:shadow-md text-warm-gray placeholder:text-warm-gray/50 font-medium"
      />
    </div>
  )
}
