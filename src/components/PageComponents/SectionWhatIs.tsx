import IsaTarot from '@/assets/IsaTarot.svg'
import bg01 from '@/assets/bg01.svg'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'

export function SectionWhatIs() {
  return (
    <div className="relative flex items-center justify-center">
      <Image src={bg01} className="-z-50 w-full" alt="Background Tarot" />
      <div className="absolute inset-0 flex items-center pl-[213px]">
        <div className="relative">
          <Image
            src={IsaTarot}
            height={535}
            width={692}
            alt="Background Tarot"
          />
          <div className="absolute left-[641px] top-[107px] shadow-md backdrop-blur-lg">
            <Card className="flex h-[322px] w-[493px] items-center justify-center bg-background/75 px-5">
              <CardContent className="text-center text-2xl font-semibold italic text-themeGreen">
                <p>
                  Com o Tarot, você amplia a visão sobre o que conhece e se
                  torna consciente do que ainda não enxergou.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
