import { SectionAboutMe } from '@/components/PageComponents/SectionAboutMe'
import { SectionFAQ } from '@/components/PageComponents/SectionFAQ'
import { SectionFooter } from '@/components/PageComponents/SectionFooter'
import { SectionHowItWorks } from '@/components/PageComponents/SectionHowItWorks'
import { SectionRemarksEthics } from '@/components/PageComponents/SectionRemarksEthics'
import { SectionTarotForWhat } from '@/components/PageComponents/SectionTarotForWhat'
import { SectionWhatIs } from '@/components/PageComponents/SectionWhatIs'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-themeGreen">
      <SectionWhatIs />
      <SectionTarotForWhat />
      <SectionAboutMe />
      <SectionHowItWorks />
      <SectionRemarksEthics />
      <SectionFAQ />
      <SectionFooter />
    </main>
  )
}
