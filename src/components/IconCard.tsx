import Image from 'next/image'
import type { ReactNode } from 'react'
import { Card, CardContent } from './ui/card'

interface IconCardProps {
  icon: string
  children: ReactNode
}

export function IconCard({ children, icon }: IconCardProps) {
  return (
    <Card className="h-60 w-64 bg-background">
      <CardContent className="flex flex-col items-center justify-center gap-2 px-4 py-12">
        <Image src={icon} width={72} height={72} alt="" />
        <p className="font-medium">{children}</p>
      </CardContent>
    </Card>
  )
}
