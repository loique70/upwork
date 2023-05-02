import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          Hello Loique welcome to your firt deployed app
          <h1>What is up there.....????.</h1>
          <p>We are lioness</p>
      </div>
    </main>
  )
}
