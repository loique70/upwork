import React, { ReactNode } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { links } from '@/data/footer'

interface LayoutProps{
    children: ReactNode
}

const Layout = ({children}:LayoutProps) => {
    const copy = '© 2023 Abstract Studio Design, Inc. All rights reserved.'
  return (
    <div>
        <NavBar />
        {children}
        <Footer links={links} copy={copy} />
    </div>
  )
}

export default Layout