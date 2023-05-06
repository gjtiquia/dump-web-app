import Link from 'next/link'
import './globals.css'
import DumpBox from '@/components/DumpBox'

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
    <html lang="en" className='h-full'>
      <body className="max-h-screen h-full flex flex-col">
        <header className='bg-cyan-100 flex-grow-0'>
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
                <a target='_blank' href='https://github.com/gjtiquia/dump-web-app'>
                  <p className='text-slate-800 text-sm'>
                    GitHub
                  </p>
                </a>
              </li>
            </ul>

          </nav>
        </header>

        <main className='flex-grow overflow-y-auto bg-cyan-100'>
          {children}
        </main>

        <footer className='bg-cyan-100 flex-grow-0 flex justify-end'>
          {/* <a className='p-2'>Github Link</a> */}
          <div className='h-3'></div>
        </footer>
      </body>
    </html>
  )
}
