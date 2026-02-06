'use client'

import { useState, useMemo } from 'react'
import { useServices, useFilteredServices } from './hooks/useServices'
import { getConsolidatedCategories } from './utils/categoryMapping'
import SearchBar from './components/SearchBar'
import CategoryFilters from './components/CategoryFilters'
import ServiceCard from './components/ServiceCard'
import StatsBar from './components/StatsBar'

export default function Home() {
  const { services, loading, error } = useServices()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Get consolidated categories
  const categories = useMemo(() => {
    return getConsolidatedCategories(services)
  }, [services])

  // Get filtered services
  const filteredServices = useFilteredServices(services, searchQuery, selectedCategories)

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#e07a5f]/20 border-t-[#e07a5f] mx-auto mb-6"></div>
            <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-[#e07a5f]/10"></div>
          </div>
          <p className="text-warm-gray/70 font-medium">Discovering local services...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center relative z-10 px-4">
        <div className="text-center max-w-md">
          <div className="glass-effect border-2 border-[#e07a5f]/20 rounded-2xl px-6 py-5 shadow-lg">
            <p className="font-bold text-warm-gray mb-2">Unable to load services</p>
            <p className="text-sm text-warm-gray/70">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'LocalServiceHub - Neighborhood Services Directory',
    description:
      'A curated list of local service providers including food, homestays, repairs, tuition, and wellness services.',
    itemListElement: services.slice(0, 50).map((service, index) => ({
      '@type': 'LocalBusiness',
      position: index + 1,
      name: service['Service Provider/Name'],
      telephone:
        service['Contact Number'] && service['Contact Number'].toUpperCase() !== 'N/A'
          ? service['Contact Number']
          : undefined,
      areaServed: service['Notes/Location'] || undefined,
      category: service.Category,
    })),
  }

  return (
    <main className="min-h-screen relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Top panel (sticky) */}
        <div className="sticky top-0 z-30 glass-effect rounded-3xl p-6 sm:p-8 mb-8 shadow-lg border border-[#e07a5f]/10">
          {/* Header */}
          <header className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#e07a5f] mb-3 leading-tight">
              LocalServiceHub
            </h1>
            <p className="text-lg sm:text-xl text-warm-gray/80 font-medium max-w-2xl">
              Discover trusted local services in your neighborhood
            </p>
          </header>

          {/* Search Bar */}
          <div className="mb-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          {/* Category Filters */}
          {categories.length > 0 && (
            <div className="mb-6">
              <CategoryFilters
                categories={categories}
                selectedCategories={selectedCategories}
                onToggleCategory={toggleCategory}
              />
            </div>
          )}

          {/* Stats Bar */}
          <div>
            <StatsBar
              visibleCount={filteredServices.length}
              totalCount={services.length}
            />
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
              {filteredServices.map((service, index) => (
                <div
                  key={service.ID}
                  className="opacity-0 animate-fade-in-up flex"
                  style={{
                    animationDelay: `${Math.min(index * 50, 500)}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20">
              <div className="glass-effect rounded-2xl p-8 sm:p-12 max-w-md mx-auto border border-[#e07a5f]/20">
                <p className="text-xl font-semibold text-warm-gray mb-3">
                  No services found
                </p>
                <p className="text-warm-gray/70 mb-6">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategories([])
                  }}
                  className="px-6 py-3 bg-[#e07a5f] text-white rounded-xl font-semibold hover:bg-[#d4694f] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Clear filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
