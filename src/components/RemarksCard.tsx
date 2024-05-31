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
    <>
      {divided ? (
        <Card className="flex items-center gap-4 bg-background/70 p-4	">
          <CardTitle className="w-[512px] text-center text-2xl font-extrabold">
            {title}
          </CardTitle>
          <CardContent className="p-0 text-xl font-medium">
            {children}
          </CardContent>
        </Card>
      ) : (
        <Card className="flex items-center justify-center bg-background/70 p-4	">
          <CardContent className="w-full p-0 text-xl font-medium">
            {children}
          </CardContent>
        </Card>
      )}
    </>
  )
}
