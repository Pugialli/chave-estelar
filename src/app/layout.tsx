import { Header } from '@/components/Header'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chave Estelar',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="antialiased" suppressHydrationWarning>
      <body className={cn(nunito.className, 'bg-background')}>
        <Header />
        {children}
      </body>
    </html>
  )
}
