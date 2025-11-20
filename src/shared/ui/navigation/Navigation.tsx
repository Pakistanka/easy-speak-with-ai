import Link from 'next/link'
import { ReactNode } from 'react'
import { NavButton } from './navButton';

export type UserRole = 'teacher' | 'student' | 'admin' | 'guest';

export interface NavItem {
  href: string
  label: string
  icon?: ReactNode
  roles?: UserRole[]
}

interface NavigationProps {
  items: NavItem[]
  className?: string
}

export const Navigation = ({ 
  items,
  className = '' 
}: NavigationProps) => {
  return (
    <nav className={`flex flex-col lg:flex-row gap-10 lg:gap-[clamp(1rem,-1.0984rem+3.2787vw,2rem)]  text-inherit lg:items-center ${className}`}>
      {items.map((item) => (
        <Link 
          key={item.label}
          href={item.href} 
          className="flex gap-4 items-center font-normal lg:hover:bg-[var(--header-hover)] lg:hover:outline-8 lg:hover:outline-offset-0 lg:hover:outline-[var(--header-hover)] rounded-[1px]"
        >
          <NavButton label={item.label} icon={item.icon} labelClassName={'py-2'}/>
        </Link>
      ))}
    </nav>
  )
}