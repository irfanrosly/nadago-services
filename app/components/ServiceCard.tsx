'use client'

import { Phone } from 'lucide-react'
import { Service } from '../types'
import { mapToConsolidatedCategory } from '../utils/categoryMapping'
import { getCategoryIcon } from '../utils/categoryIcons'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const phoneNumber = service['Contact Number']?.trim() || ''
  const notes = service['Notes/Location']?.trim() || null
  const hasValidPhone = phoneNumber && phoneNumber.toUpperCase() !== 'N/A'
  const consolidatedCategory = mapToConsolidatedCategory(service.Category)
  const CategoryIcon = getCategoryIcon(consolidatedCategory)

  return (
    <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="mb-3">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
          <CategoryIcon className="w-4 h-4" />
          <span>{consolidatedCategory}</span>
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-3">
        {service['Service Provider/Name']}
      </h3>

      {notes && (
        <p className="text-sm text-gray-600 mb-4">
          {notes}
        </p>
      )}

      {hasValidPhone && (
        <a
          href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
        >
          <Phone className="w-4 h-4" />
          Call {phoneNumber}
        </a>
      )}
    </div>
  )
}

