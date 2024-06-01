import iconCalendarCheck from '@/assets/IconCalendarCheck.svg'
import iconDownloadCloud from '@/assets/IconDownloadCloud.svg'
import iconMessageCircle from '@/assets/IconMessageCircle.svg'
import iconPointer from '@/assets/IconPointer.svg'
import bg02 from '@/assets/bg02.svg'
import { IconCard } from '../IconCard'
import { SectionWithBackground } from '../SectionWithBackground'

export function SectionHowItWorks() {
  return (
    <SectionWithBackground imageSrc={bg02} imageAlt="Background Tarot">
      <div className="flex h-full flex-row px-2 text-center lg:flex-col lg:px-24 lg:py-16">
        {/* <div className="gap-4 p-16"> */}
        <div className="flex flex-col items-center justify-center gap-1 lg:gap-9 lg:pb-12 ">
          <h2 className="text-xxs font-extrabold lg:text-4xl">Como funciona</h2>
          <p className="px-2 text-xxs lg:px-14 lg:text-xl">
            Acesso simplificado e flexível: as{' '}
            <strong>leituras são enviadas</strong> por e-mail ou WhatsApp, em
            foto e áudios. Não precisamos encontrar o mesmo horário nas nossas
            agendas e você tem{' '}
            <strong>acesso eterno ao seu jogo baixado</strong>.
          </p>
        </div>
        <div className="flex w-full flex-col justify-center gap-y-2 lg:flex-row">
          <div className="flex justify-center ">
            <IconCard icon={iconPointer}>
              <strong>Escolha sua leitura no meu catálogo.</strong> Ou me conte
              o que busca no Tarot e eu te oriento.
            </IconCard>
            <IconCard icon={iconCalendarCheck}>
              Mediante pagamento,{' '}
              <strong>garantimos seu espaço na minha agenda.</strong>
            </IconCard>
          </div>
          <div className="flex justify-center ">
            <IconCard icon={iconDownloadCloud}>
              Aguarde e <strong>você receberá seu jogo para baixar</strong> e
              escutar quantas vezes quiser.
            </IconCard>
            <IconCard icon={iconMessageCircle} isLast>
              Depois, <strong>estarei à disposição</strong> para dúvidas através
              do WhatsApp.
            </IconCard>
          </div>
        </div>
      </div>
    </SectionWithBackground>
  )
}
