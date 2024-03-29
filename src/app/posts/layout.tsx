import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: "Blog | Sujeito Programador"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
