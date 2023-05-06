import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className + " " + "min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-1"}>
        <header className='bg-gradient-to-b from-cyan-300 to-cyan-100'>
          <Link href="/">
            <div>
              <p className='font-bold p-2 text-slate-800'>
                Dump
              </p>
            </div>
          </Link>
        </header>

        <main className='bg-cyan-100'>
          {children}
        </main>

        <footer className='bg-cyan-100 flex justify-end'>
          <a className='p-2'>Github Link</a>
        </footer>
      </body>
    </html>
  )
}
