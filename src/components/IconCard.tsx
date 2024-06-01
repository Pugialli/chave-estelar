import iconCaret from '@/assets/CaretRight.svg'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { Card, CardContent } from './ui/card'

interface IconCardProps {
  icon: string
  children: ReactNode
  isLast?: boolean
}

export function IconCard({ children, icon, isLast = false }: IconCardProps) {
  return (
    <div className="flex items-center">
      <Card className="h-16 w-32 bg-background lg:h-60 lg:w-64">
        <CardContent className="flex flex-col items-center justify-center gap-1 px-1 py-1 lg:gap-2 lg:px-4 lg:py-12">
          <Image src={icon} className="h-3 w-3 lg:h-16 lg:w-16" alt="" />
          <p className="text-xxs font-medium lg:text-base">{children}</p>
        </CardContent>
      </Card>
      {!isLast && (
        <Image src={iconCaret} className="h-2 w-2 lg:h-8 lg:w-8" alt="" />
      )}
    </div>
  )
}
