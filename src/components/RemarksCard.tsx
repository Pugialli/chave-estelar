import type { ReactNode } from 'react'
import { Card, CardContent, CardTitle } from './ui/card'

interface IconCardProps {
  title?: string
  children: ReactNode
  divided?: boolean
}

export function RemarksCard({
  children,
  title,
  divided = false,
}: IconCardProps) {
  return (
    <div className="col-span-2 lg:col-span-4">
      {divided ? (
        <Card className="flex h-full w-full flex-col items-center gap-1 bg-background/70 p-2 text-center lg:flex-row lg:gap-4 lg:p-4">
          <CardTitle className="text-xxs font-extrabold lg:w-120 lg:text-2xl">
            {title}
          </CardTitle>
          <CardContent className="p-0 text-xxss font-medium lg:text-xl">
            {children}
          </CardContent>
        </Card>
      ) : (
        <Card className="flex h-full w-full items-center justify-center bg-background/70 p-4 text-center">
          <CardContent className="w-full p-0 text-xxss font-medium lg:text-xl">
            {children}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
