import Link from 'next/link'

interface NavItem {
  href: string
  label: string
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
    <nav className={`flex flex-col lg:flex-row gap-10 lg:gap-8 text-[var(--text-color)] text-[21px] ${className}`}>
      {items.map((item) => (
        <Link 
          key={item.label}
          href={item.href} 
          className="font-normal leading-none py-2 lg:hover:bg-[var(--header-hover)] lg:hover:outline-8 lg:hover:outline-offset-0 lg:hover:outline-[var(--header-hover)] rounded-[1px]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}