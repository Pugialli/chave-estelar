import iconMeditacao from '@/assets/IconMeditacao.svg'
import iconMente from '@/assets/IconMente.svg'
import iconTalk from '@/assets/IconTalk.svg'
import tarotCards from '@/assets/TarotCards.svg'
import Image from 'next/image'
import { IconSection } from '../IconSection'

export function SectionTarotForWhat() {
  return (
    // <div className="flex h-full items-center bg-red-600">
    <div className="grid h-full grid-cols-12 gap-5">
      {/* <Image src={tarotCards} className="w-1/4 lg:w-full" alt="Tarot Cards" /> */}
      <Image src={tarotCards} className="col-span-4" alt="Tarot Cards" />
      <div className="col-span-7 flex flex-col gap-2 pl-4 pt-4 lg:gap-4 lg:py-16 lg:pl-24">
        <h2 className="text-sm font-extrabold lg:text-5xl">Tarot pra quê?</h2>
        <div className="flex flex-col gap-4 text-xs lg:text-xl">
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
        <div className="grid grid-cols-6 justify-between gap-2 py-4 lg:py-12">
          <IconSection
            title="Elucide situações"
            icon={iconMente}
            className="col-span-3 lg:col-span-2"
          />
          <IconSection
            title="Amplie seu autoconhecimento"
            icon={iconMeditacao}
            className="col-span-3 lg:col-span-2"
          />
          <IconSection
            title="Receba orientação"
            icon={iconTalk}
            className="col-span-6 lg:col-span-2"
          />
        </div>
      </div>
    </div>
  )
}
