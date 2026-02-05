/**
 * Maps specific categories from CSV to broader consolidated categories
 */
export function mapToConsolidatedCategory(originalCategory: string): string {
  const category = originalCategory.trim()
  
  // Home Services - Repairs, maintenance, construction
  if (
    category.includes('Appliances') ||
    category.includes('Plumbing') ||
    category.includes('Plumb') ||
    category.includes('Electrical') ||
    category.includes('Elec') ||
    category.includes('Aircon') ||
    category.includes('AC') ||
    category === 'Garden' ||
    category.includes('Home/Garden') ||
    category === 'Auto Gate' ||
    category === 'Construction'
  ) {
    return 'Home Services'
  }
  
  // Food & Catering
  if (
    category === 'Food' ||
    category.includes('Food/') ||
    category === 'Gas'
  ) {
    return 'Food & Catering'
  }
  
  // Health & Wellness
  if (
    category === 'Health' ||
    category === 'Massage' ||
    category === 'Beauty' ||
    category.includes('Beauty/') ||
    category === 'Grooming'
  ) {
    return 'Health & Wellness'
  }
  
  // Education
  if (category === 'Education' || category.includes('Education')) {
    return 'Education'
  }
  
  // Cleaning (check before Transport to catch Cleaning/Trans)
  if (category === 'Cleaning' || category === 'Cleaning/Trans') {
    return 'Cleaning'
  }
  
  // Transport & Auto
  if (
    category === 'Transport' ||
    category === 'Auto' ||
    category.includes('Waste/Auto')
  ) {
    return 'Transport & Auto'
  }
  
  // Events & Services
  if (
    category === 'Events' ||
    category.includes('Events/') ||
    category === 'Runner'
  ) {
    return 'Events & Services'
  }
  
  // Homestay
  if (category === 'Homestay') {
    return 'Homestay'
  }
  
  // Business Services
  if (
    category === 'Insurance' ||
    category === 'Finance' ||
    category === 'IT' ||
    category.includes('IT/') ||
    category === 'Telco' ||
    category === 'Industrial' ||
    category === 'Tailor' ||
    category === 'Sports'
  ) {
    return 'Business Services'
  }
  
  // Default: return original if no match
  return category
}

/**
 * Get all consolidated categories from services
 */
export function getConsolidatedCategories(services: Array<{ Category: string }>): string[] {
  const consolidatedSet = new Set<string>()
  services.forEach((service) => {
    consolidatedSet.add(mapToConsolidatedCategory(service.Category))
  })
  return Array.from(consolidatedSet).sort()
}
