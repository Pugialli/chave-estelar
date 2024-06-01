import { cn } from '@/lib/utils'
import Image from 'next/image'

interface IconSectionProps {
  title: string
  icon: string
  className?: string
}

export function IconSection({ title, icon, className }: IconSectionProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-3 lg:w-48 lg:gap-6',
        className,
      )}
    >
      <Image src={icon} className="h-12 w-12 lg:h-24 lg:w-24" alt={title} />
      <span className="text-center text-xs font-black lg:w-full lg:text-xl">
        {title}
      </span>
    </div>
  )
}
