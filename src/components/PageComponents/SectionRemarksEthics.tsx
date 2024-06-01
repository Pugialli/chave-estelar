import bg03 from '@/assets/bg03.svg'
import { RemarksCard } from '../RemarksCard'
import { SectionWithBackground } from '../SectionWithBackground'

export function SectionRemarksEthics() {
  return (
    <SectionWithBackground imageSrc={bg03} imageAlt="Background Tarot">
      <div className="flex h-full flex-col items-center justify-center gap-1 px-6 lg:gap-4 lg:px-36 lg:py-24">
        <h2 className="text-xs font-extrabold lg:text-4xl">Avisos e Ética</h2>
        <div className="grid grid-cols-4 gap-1 lg:gap-y-4">
          <RemarksCard divided title="Não leio sobre:">
            <div className="flex gap-6 text-left lg:gap-12">
              <ul className="list-disc">
                <li>gravidez</li>
                <li>traição</li>
                <li>morte</li>
                <li>doenças</li>
              </ul>
              <ul className="list-disc lg:w-80">
                <li>vida de terceiros (encarnados ou desencarnados)</li>
                <li>conselhos para prejudicar a vida de alguém</li>
              </ul>
            </div>
          </RemarksCard>
          <div className="col-span-2 flex w-full flex-col gap-1 lg:col-span-4 lg:gap-4">
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
          </div>
          <RemarksCard>
            <p>
              <strong>
                O Tarot te entrega chaves e é você que escolhe o que fazer com
                isso.
              </strong>{' '}
              Cabe a você refletir, elaborar e escolher seus caminhos. Ele é um
              facilitador e orientador nas mudanças que só você pode fazer na
              sua vida.
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
    </SectionWithBackground>
  )
}
