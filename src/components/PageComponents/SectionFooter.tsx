import bg01 from '@/assets/bg01.svg'
import { SectionWithBackground } from '../SectionWithBackground'
import { Button } from '../ui/button'
import { Card, CardFooter } from '../ui/card'

export function SectionFooter() {
  return (
    <SectionWithBackground imageSrc={bg01} imageAlt="Background Tarot">
      <div className="flex h-full flex-col-reverse items-center justify-center gap-1 px-3 py-6 lg:flex-row lg:gap-9 lg:px-20 lg:py-24">
        {/* <div className="relative flex items-center justify-center"> */}
        {/* <div className="absolute inset-0 px-20 py-24"> */}
        <Card className="flex h-full w-full flex-col items-center justify-end gap-4 bg-background/75 px-1 py-2 shadow-md lg:px-10 lg:py-8">
          <CardFooter className="flex w-full gap-6 p-0 text-xl font-medium lg:gap-3 lg:px-28">
            <Button
              variant="secondary"
              className="h-8 w-full text-xs font-bold lg:h-16 lg:text-2xl"
            >
              Visite o Instagram
            </Button>
            <Button className="h-8 w-full text-xs font-bold lg:h-16 lg:text-2xl">
              Agende sua leitura
            </Button>
          </CardFooter>
        </Card>
      </div>
    </SectionWithBackground>
  )
}
