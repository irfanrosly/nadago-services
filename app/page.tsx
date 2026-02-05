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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading services...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            <p className="font-semibold">Error loading services</p>
            <p className="text-sm mt-1">{error}</p>
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
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Top panel (sticky) */}
        <div className="sticky top-0 z-20 bg-gray-50 pb-4">
          {/* Header */}
          <header className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              LocalServiceHub
            </h1>
            <p className="text-gray-600">
              Find local neighborhood services in your area
            </p>
          </header>

          {/* Search Bar */}
          <div className="mb-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          {/* Category Filters */}
          {categories.length > 0 && (
            <div className="mb-4">
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
        <div className="mt-6">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.ID} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No services found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategories([])
                }}
                className="mt-4 text-blue-600 hover:text-blue-800 underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
