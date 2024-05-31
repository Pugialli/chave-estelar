import Image from 'next/image'

interface IconSectionProps {
  title: string
  icon: string
}

export function IconSection({ title, icon }: IconSectionProps) {
  return (
    <div className="flex w-40 flex-col items-center gap-6 text-center text-xl font-black text-themeGreen">
      <Image src={icon} alt={title} />
      <span>{title}</span>
    </div>
  )
}
