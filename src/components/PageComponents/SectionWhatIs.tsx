import isaTarot from '@/assets/IsaTarot.svg'
import bg01 from '@/assets/bg01.svg'
import Image from 'next/image'
import { SectionWithBackground } from '../SectionWithBackground'
import { Card, CardContent } from '../ui/card'

export function SectionWhatIs() {
  return (
    <SectionWithBackground imageSrc={bg01} imageAlt="Background Tarot">
      <div className="flex h-full items-center justify-center px-6 lg:px-24">
        <Image src={isaTarot} className="w-1/2" alt="Isabela com carta" />
        <Card className="-ml-4 flex h-24 w-full items-center justify-center bg-background/75 shadow-md backdrop-blur-lg lg:-ml-12 lg:h-80 lg:w-110">
          <CardContent className="py-0 text-center text-xs font-semibold italic lg:text-2xl">
            <p>
              Com o Tarot, você amplia a visão sobre o que conhece e se torna
              consciente do que ainda não enxergou.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWithBackground>
  )
}
