'use client'

import type { LucideIcon } from 'lucide-react'
import {
  Home,
  Utensils,
  HeartPulse,
  GraduationCap,
  Truck,
  Sparkles,
  BedDouble,
  Briefcase,
  Tag,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  'Home Services': Home,
  'Food & Catering': Utensils,
  'Health & Wellness': HeartPulse,
  Education: GraduationCap,
  Cleaning: Sparkles,
  'Transport & Auto': Truck,
  'Events & Services': Sparkles,
  Homestay: BedDouble,
  'Business Services': Briefcase,
}

export function getCategoryIcon(category: string): LucideIcon {
  return iconMap[category] ?? Tag
}

