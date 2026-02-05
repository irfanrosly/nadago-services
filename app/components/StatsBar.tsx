'use client'

interface StatsBarProps {
  visibleCount: number
  totalCount: number
}

export default function StatsBar({ visibleCount, totalCount }: StatsBarProps) {
  return (
    <div className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700">
      <span className="font-semibold">{visibleCount}</span> of{' '}
      <span className="font-semibold">{totalCount}</span> services visible
    </div>
  )
}
