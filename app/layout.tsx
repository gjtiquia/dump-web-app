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
        <header className='bg-cyan-100'>
          <nav className='flex items-center justify-between'>
            <Link href="/">
              <p className='font-bold p-2 text-slate-800'>
                Dump
              </p>
            </Link>

            <ul className='flex gap-2 mr-2'>
              <li>
                <Link href="/">
                  <p className='text-slate-800 text-sm'>
                    Home
                  </p>
                </Link>
              </li>

              <li>
                <Link href="/about">
                  <p className='text-slate-800 text-sm'>
                    About
                  </p>
                </Link>
              </li>

              <li>
                <a>
                  <p className='text-slate-800 text-sm'>
                    GitHub
                  </p>
                </a>
              </li>
            </ul>

          </nav>
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
