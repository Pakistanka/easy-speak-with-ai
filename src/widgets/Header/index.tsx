'use client'

import { useState } from 'react'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { AuthButtons } from './AuthButtons'
import { WalletButton } from './WalletButton'
import { MobileMenu } from './MobileMenu'
import { MobileMenuButton } from './MobileMenuButton'
import { useTranslations } from 'next-intl'

interface HeaderProps {
  isLoggedIn?: boolean
}

export default function Header({ isLoggedIn = false }: HeaderProps) {
  const t = useTranslations('header')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const unauthenticatedNavItems = [
    { href: "#", label: t('navigation.features') },
    { href: "#", label: t('navigation.howItWorks') },
    { href: "#", label: t('navigation.contactUs') },
    { href: "#", label: t('navigation.faqs') },
  ]

  const authenticatedNavItems = [
    { href: "#", label: t('navigation.settings') },
  ]

  const navItems = isLoggedIn ? authenticatedNavItems : unauthenticatedNavItems

  return (
    <>
      <header className="bg-transparent pt-4 pb-2 px-5 lg:py-10 lg:px-[104px] text-[var(--text-color)] text-[21px] z-50 relative">
        <div className="flex justify-between items-center">
          <Logo />
          <Navigation 
            items={navItems}
            className="hidden lg:flex"
          />

          <div className="flex items-center gap-4 lg:gap-6">
            <WalletButton />
            <AuthButtons isLoggedIn={isLoggedIn} className='hidden lg:flex'/>
            <MobileMenuButton isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}/>
          </div>
        </div>
      </header>
      
      <MobileMenu isOpen={mobileMenuOpen}>
        <Navigation 
          items={navItems}
        />
        <AuthButtons 
          isLoggedIn={isLoggedIn}
        />
      </MobileMenu>
    </>
  )
}