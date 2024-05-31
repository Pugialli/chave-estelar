import isaAvatar from '@/assets/IsaAvatar.svg'
import bg01 from '@/assets/bg01.svg'
import Image from 'next/image'
import { Card, CardContent, CardTitle } from '../ui/card'

export function SectionAboutMe() {
  return (
    <div className="relative flex items-center justify-center">
      <Image src={bg01} className="-z-50 w-full" alt="Background Tarot" />
      <div className="absolute inset-0 flex items-center gap-9 px-24">
        <Card className="flex flex-col items-center justify-center gap-8 bg-background/70 px-10 py-8 text-center text-themeGreen shadow-md">
          <CardTitle className="text-4xl font-extrabold">Sobre mim</CardTitle>
          <CardContent className="flex flex-col gap-3 text-xl font-medium">
            <div>
              <p>
                Olá, bom ver você aqui! Eu me chamo{' '}
                <strong>Isabela Xavier</strong>,
              </p>
              <p>
                sou carioca, canceriana nascida em 1990. Sou psicóloga,
                oraculista e artista.
              </p>
            </div>
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
        <Image src={isaAvatar} height={374} width={374} alt="Avatar Isabela" />
      </div>
    </div>
  )
}
