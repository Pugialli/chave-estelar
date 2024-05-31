import bg03 from '@/assets/bg03.svg'
import Image from 'next/image'
import { RemarksCard } from '../RemarksCard'

export function SectionRemarksEthics() {
  return (
    <div className="relative flex items-center justify-center">
      <Image src={bg03} className="-z-50 w-full" alt="Background Tarot" />
      <div className="absolute inset-0 flex flex-col justify-center gap-4 px-36 py-24 text-center text-themeGreen">
        <h2 className="text-4xl font-extrabold">Avisos e Ética</h2>
        <RemarksCard divided title="Não leio sobre:">
          <div className="flex gap-12 text-left">
            <ul className="list-disc">
              <li>gravidez</li>
              <li>traição</li>
              <li>morte</li>
              <li>doenças</li>
            </ul>
            <ul className="w-80 list-disc">
              <li>vida de terceiros (encarnados ou desencarnados)</li>
              <li>conselhos para prejudicar a vida de alguém</li>
            </ul>
          </div>
        </RemarksCard>
        <RemarksCard divided title="Não faço:">
          <ul className="list-disc">
            <li>“trabalho”, “feitiços” e afins</li>
          </ul>
        </RemarksCard>
        <RemarksCard divided title="Não faço (e abomino):">
          <ul className="list-disc">
            <li>“amarração amorosa” e afins</li>
          </ul>
        </RemarksCard>
        <RemarksCard>
          <p>
            <strong>
              O Tarot te entrega chaves e é você que escolhe o que fazer com
              isso.
            </strong>{' '}
            Cabe a você refletir, elaborar e escolher seus caminhos. Ele é um
            facilitador e orientador nas mudanças que só você pode fazer na sua
            vida.
          </p>
        </RemarksCard>
        <RemarksCard>
          <p>
            <strong>Tarot mostra tendências, não sentenças imutáveis.</strong>{' '}
            Reflete a situação atual e sugere possibilidades para lidar da
            melhor maneira dentro desse contexto.{' '}
          </p>
        </RemarksCard>
        <RemarksCard>
          <p className="w-full font-extrabold">
            Consulta de Tarot é um auxílio, um complemento.
            <br />
            Não substitui consultas a especialistas como psicólogos, médicos,
            advogados e etc.
          </p>
        </RemarksCard>
      </div>
    </div>
  )
}
