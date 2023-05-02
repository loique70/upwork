import Image from 'next/image'
import { Content, Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { contents } from '@/data/content'
import { links } from '@/data/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const copy = '© 2023 Abstract Studio Design, Inc. All rights reserved.'
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          Hello Loique welcome to your firt deployed app
          <h1>What is up there</h1>
          <p>We are lioness</p>
      </div>
    </main>
  )
}
