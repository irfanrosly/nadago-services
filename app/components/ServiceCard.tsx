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
    <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-[#e07a5f]/10 hover:border-[#e07a5f]/30 shadow-md hover:shadow-2xl transition-all duration-300 card-hover relative overflow-hidden flex flex-col h-full w-full">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e07a5f]/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#e07a5f]/10 to-[#f4a261]/10 text-[#e07a5f] text-xs font-bold rounded-2xl border border-[#e07a5f]/20 backdrop-blur-sm">
            <CategoryIcon className="w-4 h-4" />
            <span>{consolidatedCategory}</span>
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-warm-gray mb-3 leading-tight group-hover:text-[#e07a5f] transition-colors">
          {service['Service Provider/Name']}
        </h3>

        <div className="flex-grow mb-5">
          {notes ? (
            <p className="text-sm text-warm-gray/70 leading-relaxed">
              {notes}
            </p>
          ) : (
            <div className="h-0"></div>
          )}
        </div>

        {hasValidPhone && (
          <a
            href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-[#81b29a] to-[#81b29a]/90 text-white rounded-xl hover:from-[#6fa089] hover:to-[#6fa089]/90 transition-all font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 mt-auto"
          >
            <Phone className="w-4 h-4" />
            <span>Call {phoneNumber}</span>
          </a>
        )}
      </div>
    </div>
  )
}

