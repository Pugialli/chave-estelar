import isaAvatar from '@/assets/IsaAvatar.svg'
import bg01 from '@/assets/bg01.svg'
import Image from 'next/image'
import { SectionWithBackground } from '../SectionWithBackground'
import { Card, CardContent, CardTitle } from '../ui/card'

export function SectionAboutMe() {
  return (
    <SectionWithBackground imageSrc={bg01} imageAlt="Background Tarot">
      <div className="flex h-full flex-col-reverse items-center justify-center gap-1 px-6 lg:flex-row lg:gap-9 lg:px-24">
        <Card className="flex h-auto w-full flex-col items-center justify-center gap-2 bg-background/70 py-4 text-center shadow-md lg:gap-8 lg:py-8">
          <CardTitle className="py-0 text-xs font-extrabold lg:text-4xl">
            Sobre mim
          </CardTitle>
          <CardContent className="flex flex-col gap-1 py-0 text-xxs font-medium lg:gap-3 lg:text-xl">
            <p>
              Olá, bom ver você aqui! Eu me chamo{' '}
              <strong>Isabela Xavier</strong>, sou carioca, canceriana nascida
              em 1990. Sou psicóloga, oraculista e artista.
            </p>
            <p>
              Vejo o Tarot como um conjunto simbólico que reflete as diversas
              possibilidades da experiência humana e também como uma ponte de
              comunicação direta com o Sagrado. Minha consulta é voltada para
              elucidação de situações, autoconhecimento e orientação (o famoso
              “conselho do Tarot’), de maneira a não apenas{' '}
              <strong>trazer respostas</strong>, mas também{' '}
              <strong>provocar reflexões</strong>. Também são feitas previsões
              conforme necessidade.
            </p>
          </CardContent>
        </Card>
        <Image
          src={isaAvatar}
          className="w-1/12 lg:w-1/4"
          alt="Avatar Isabela"
        />
      </div>
    </SectionWithBackground>
  )
}
