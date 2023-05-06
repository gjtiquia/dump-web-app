import Link from 'next/link'
import './globals.css'
import BaseLayout from '@/components/BaseLayout'

export const metadata = {
  title: 'Dump - Dump anything.',
  description: 'Dump anything.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  )
}
