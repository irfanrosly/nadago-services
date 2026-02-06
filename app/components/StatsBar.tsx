'use client'

interface StatsBarProps {
  visibleCount: number
  totalCount: number
}

export default function StatsBar({ visibleCount, totalCount }: StatsBarProps) {
  const percentage = totalCount > 0 ? Math.round((visibleCount / totalCount) * 100) : 0
  
  return (
    <div className="w-full bg-white/60 backdrop-blur-sm rounded-2xl px-5 py-4 border-2 border-[#e07a5f]/10">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-warm-gray">
          Showing <span className="text-[#e07a5f]">{visibleCount}</span> of{' '}
          <span className="text-[#e07a5f]">{totalCount}</span> services
        </span>
        <span className="text-xs font-bold text-[#e07a5f]">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-[#e07a5f]/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#e07a5f] to-[#f4a261] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}
