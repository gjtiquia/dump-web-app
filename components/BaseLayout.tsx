import Link from 'next/link'

export default function BaseLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='max-h-screen min-h-screen flex flex-col bg-cyan-100'>
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
                            <a target='_blank' href='https://github.com/gjtiquia/dump-web-app'>
                                <p className='text-slate-800 text-sm'>
                                    GitHub
                                </p>
                            </a>
                        </li>
                    </ul>

                </nav>
            </header>

            <main>
                {children}
            </main>
        </div>
    )
}