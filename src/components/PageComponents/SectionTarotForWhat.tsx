import iconMeditacao from '@/assets/IconMeditacao.svg'
import iconMente from '@/assets/IconMente.svg'
import iconTalk from '@/assets/IconTalk.svg'
import tarotCards from '@/assets/TarotCards.svg'
import Image from 'next/image'
import { IconSection } from '../IconSection'

export function SectionTarotForWhat() {
  return (
    <div className="relative flex items-center justify-center">
      <Image src={tarotCards} className="" alt="Background Tarot" />
      <div className="flex flex-col gap-4 pl-28 pr-36 text-themeGreen">
        <h2 className="text-5xl font-extrabold">Tarot pra quê?</h2>
        <div className="flex flex-col gap-4 text-xl">
          <p>Precisa compreender uma situação complicada?</p>
          <p>Quer entender como está sua relação com alguém?</p>
          <p>
            Quer saber como está sua vida, em geral, e como vai ficar nos
            próximos meses?
          </p>
          <p>
            Precisa tomar uma decisão e quer entender os caminhos possíveis?
          </p>
          <p>
            O Tarot é uma ferramenta de auxílio e expansão para essas e muitas
            outras questões. Ele te mostra o que precisa ser visto e cuidado. A
            partir do Tarot, você amplia a visão sobre o que já conhece e se
            torna consciente do que ainda não enxergou. Entende quais são suas
            condições, possibilidades e limites, para agir de modo mais
            assertivo.
          </p>
        </div>
        <div className="mx-4 flex justify-between pt-12">
          <IconSection title="Elucide situações" icon={iconMente} />
          <IconSection
            title="Amplie seu autoconhecimento"
            icon={iconMeditacao}
          />
          <IconSection title="Receba orientação" icon={iconTalk} />
        </div>
      </div>
    </div>
  )
}
