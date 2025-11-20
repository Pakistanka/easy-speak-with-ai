'use client'

import { useMemo, useState } from 'react'
import { Logo, UserRole, NavItem, Navigation, WalletButton, SettingsIcon, SupportIcon, BecomeIcon, ProfileIcon, NavButton} from '@/shared'
import { useTranslations } from 'next-intl'
import { AuthButtons } from './AuthButtons'
import { MobileMenuButton } from './MobileMenuButton'
import { MobileMenu } from './MobileMenu'

interface HeaderProps {
  isLoggedIn?: boolean
  withLogo?: boolean
  role?: UserRole
}

export default function Header({ isLoggedIn = true, withLogo = true, role = 'teacher'}: HeaderProps) {
  const t = useTranslations('header')
  const n = useTranslations('navigation')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false)
  
  //TO DO: ссылки
  const navConfig = useMemo(() => {
    const unauthenticatedNavItems: NavItem[] = [
      { href: "/", label: n('features') },
      { href: "/", label: n('howItWorks') },
      { href: "/", label: n('contactUs') },
      { href: "/", label: n('faqs') },
    ]

    const allAuthenticatedNavItems: NavItem[] = [
      { href: "/", label: n('myProfile'), icon: <ProfileIcon />, roles: ['teacher', 'student'] },
      { href: "/", label: n('becomeAStudent'), icon: <BecomeIcon />, roles: ['teacher'] },
      { href: "/", label: n('becomeATeacher'), icon: <BecomeIcon />, roles: ['student'] },
      { href: "/", label: n('support'), icon: <SupportIcon /> }
    ]

    if (!isLoggedIn) {
      return unauthenticatedNavItems
    }

    return allAuthenticatedNavItems.filter(item => 
      !item.roles || item.roles.includes(role)
    )
  }, [isLoggedIn, role, n])

  //TO DO: добавить модалку настроек
  //TO DO: добавить обработку кликов на кнопки аутентификации

  return (
    <>
      <header className="bg-transparent z-50 relative">
        <div className={`flex items-center justify-between pt-4 pb-2 px-5 lg:py-10 lg:px-[clamp(3.25rem,calc(-3.5697rem+10.6557vw),6.5rem)] text-[var(--text-color)] text-[clamp(1rem,0.3443rem+1.0246vw,1.3125rem)] ${!withLogo ? 'lg:justify-end' : ''} ${mobileMenuOpen && 'w-full fixed'}`}>
          <Logo withLogo={withLogo}/>
          
          {!isLoggedIn && (
            <Navigation 
              items={navConfig}
              className="hidden lg:flex"
            />
          )}

          <div className="flex items-center gap-4 lg:gap-6">
            {isLoggedIn && (
              <button onClick={() => {setSettingsMenuOpen(true)}} className="hidden lg:block lg:hover:bg-[var(--header-hover)] lg:hover:outline-8 lg:hover:outline-offset-0 lg:hover:outline-[var(--header-hover)] rounded-[1px]">
                <NavButton label={t('settings')} labelClassName={'py-2'}/>
              </button>
            )}
            
            <WalletButton />
            <AuthButtons isLoggedIn={isLoggedIn} className='hidden lg:flex'/>
            <MobileMenuButton isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}/>
          </div>
        </div>
      </header>
      
      <MobileMenu isOpen={mobileMenuOpen}>
        <Navigation 
          items={navConfig}
        />
        {isLoggedIn && (
          <button onClick={() => {setSettingsMenuOpen(true)}} className="flex gap-4 items-center">
            <NavButton label={t('settings')} icon={<SettingsIcon />} labelClassName={'py-2'}/>
          </button>
        )}
        <AuthButtons 
          isLoggedIn={isLoggedIn}
        />
      </MobileMenu>
    </>
  )
}