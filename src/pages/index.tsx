import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Content from '@/components/Content'
import { contents } from '@/data/content'




export default function Home() {
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24  pt-20`}
    >
      <Content contents={contents} />
    </main>
  )
}
