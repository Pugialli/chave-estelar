import Image from 'next/image'
import type { ReactNode } from 'react'

export interface SectionWithBackgroundProps {
  children: ReactNode
  imageSrc: string
  imageAlt: string
}

export function SectionWithBackground({
  children,
  imageSrc,
  imageAlt,
}: SectionWithBackgroundProps) {
  return (
    <div className="relative flex items-center">
      <Image src={imageSrc} className="-z-50 w-full" alt={imageAlt} />
      <div className="absolute left-0 top-0 h-full w-full">{children}</div>
    </div>
  )
}
