'use client'

import { useState } from 'react'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { AuthButtons } from './AuthButtons'
import { WalletButton } from './WalletButton'
import { MobileMenu } from './MobileMenu'
import { MobileMenuButton } from './MobileMenuButton'

interface HeaderProps {
  isLoggedIn?: boolean
}

// Конфигурация навигации
const unauthenticatedNavItems = [
  { href: "#", label: "Features" },
  { href: "#", label: "How it works" },
  { href: "#", label: "Contact us" },
  { href: "#", label: "FAQs" },
]

const authenticatedNavItems = [
  { href: "#", label: "Settings" },
]

export default function Header({ isLoggedIn = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = isLoggedIn ? authenticatedNavItems : unauthenticatedNavItems

  return (
    <>
      <header className="bg-transparent pt-4 pb-2 px-5 lg:py-10 lg:px-[104px] text-[var(--text-color)] text-[21px] z-3">
        <div className="flex justify-between items-center">
          <Logo />
          <Navigation 
            items={navItems}
            className="hidden lg:flex"
          />

          <div className="hidden lg:flex items-center gap-6">
            <WalletButton />
            <AuthButtons isLoggedIn={isLoggedIn} />
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <WalletButton />
            <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
          </div>
        </div>
      </header>
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
      >
        <Navigation 
          items={navItems} 
          className="flex-1"
        />
        <AuthButtons 
          isLoggedIn={isLoggedIn}
          className="mt-auto"
        />
      </MobileMenu>
    </>
  )
}