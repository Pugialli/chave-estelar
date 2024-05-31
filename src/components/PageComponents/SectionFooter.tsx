import bg01 from '@/assets/bg01.svg'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Card, CardFooter } from '../ui/card'

export function SectionFooter() {
  return (
    <div className="relative flex items-center justify-center">
      <Image src={bg01} className="-z-50 w-full" alt="Background Tarot" />
      <div className="absolute inset-0 px-20 py-24">
        <Card className="flex h-full w-full flex-col items-center justify-end gap-4 bg-background/75 px-10 py-8 shadow-md">
          <CardFooter className="flex w-full gap-3 p-0 px-28 text-xl font-medium">
            <Button
              variant="secondary"
              className="h-16 w-full text-2xl font-bold"
            >
              Visite o Instagram
            </Button>
            <Button className="h-16 w-full text-2xl font-bold">
              Agende sua leitura
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
