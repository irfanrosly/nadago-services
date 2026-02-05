'use client'

import { useState, useEffect, useMemo } from 'react'
import Papa from 'papaparse'
import { Service } from '../types'
import { mapToConsolidatedCategory } from '../utils/categoryMapping'

export function useServices() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch('/service-list.csv')
        if (!response.ok) {
          throw new Error('Failed to fetch CSV file')
        }
        const text = await response.text()
        
        Papa.parse<Service>(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            // Filter out rows where 'Service Provider/Name' is empty
            const validServices = results.data
              .filter((row) => row['Service Provider/Name'] && String(row['Service Provider/Name']).trim() !== '')
              .map((row) => ({
                ...row,
                ID: parseInt(String(row.ID)) || 0,
                'Notes/Location': row['Notes/Location'] ? String(row['Notes/Location']) : null,
                Category: String(row.Category || ''),
                'Service Provider/Name': String(row['Service Provider/Name'] || ''),
                'Contact Number': String(row['Contact Number'] || ''),
              }))
            setServices(validServices)
            setLoading(false)
          },
          error: (error) => {
            setError(error.message)
            setLoading(false)
          },
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred')
        setLoading(false)
      }
    }

    fetchCSV()
  }, [])

  return { services, loading, error }
}

export function useFilteredServices(
  services: Service[],
  searchQuery: string,
  selectedCategories: string[]
) {
  return useMemo(() => {
    let filtered = services

    // Apply category filter using consolidated categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((service) => {
        const consolidatedCategory = mapToConsolidatedCategory(service.Category)
        return selectedCategories.includes(consolidatedCategory)
      })
    }

    // Apply text search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter((service) => {
        const name = (service['Service Provider/Name'] || '').toLowerCase()
        const category = (service.Category || '').toLowerCase()
        const consolidatedCategory = mapToConsolidatedCategory(service.Category).toLowerCase()
        const notes = (service['Notes/Location'] || '').toLowerCase()
        return name.includes(query) || category.includes(query) || consolidatedCategory.includes(query) || notes.includes(query)
      })
    }

    return filtered
  }, [services, searchQuery, selectedCategories])
}
