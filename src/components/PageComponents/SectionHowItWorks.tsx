import CaretRight from '@/assets/CaretRight.svg'
import IconCalendarCheck from '@/assets/IconCalendarCheck.svg'
import IconDownloadCloud from '@/assets/IconDownloadCloud.svg'
import IconMessageCircle from '@/assets/IconMessageCircle.svg'
import IconPointer from '@/assets/IconPointer.svg'

import bg02 from '@/assets/bg02.svg'
import Image from 'next/image'
import { IconCard } from '../IconCard'

export function SectionHowItWorks() {
  return (
    <div className="relative flex items-center justify-center">
      <Image src={bg02} className="-z-50 w-full" alt="Background Tarot" />
      <div className="absolute inset-0 flex flex-col gap-4 p-16 text-center text-themeGreen">
        <h2 className="text-4xl font-extrabold">Como funciona</h2>
        <p className="px-14 text-xl">
          Acesso simplificado e flexível: as{' '}
          <strong>leituras são enviadas</strong> por e-mail ou WhatsApp, em foto
          e áudios. Não precisamos encontrar o mesmo horário nas nossas agendas
          e você tem <strong>acesso eterno ao seu jogo baixado</strong>.
        </p>
        <div className="flex w-full justify-center pt-12">
          <IconCard icon={IconPointer}>
            <strong>Escolha sua leitura no meu catálogo.</strong> Ou me conte o
            que busca no Tarot e eu te oriento.
          </IconCard>
          <Image src={CaretRight} width={32} height={32} alt="" />
          <IconCard icon={IconCalendarCheck}>
            Mediante pagamento,{' '}
            <strong>garantimos seu espaço na minha agenda.</strong>
          </IconCard>
          <Image src={CaretRight} width={32} height={32} alt="" />
          <IconCard icon={IconDownloadCloud}>
            Aguarde e <strong>você receberá seu jogo para baixar</strong> e
            escutar quantas vezes quiser.
          </IconCard>
          <Image src={CaretRight} width={32} height={32} alt="" />
          <IconCard icon={IconMessageCircle}>
            Depois, <strong>estarei à disposição</strong> para dúvidas através
            do WhatsApp.
          </IconCard>
        </div>
      </div>
    </div>
  )
}
