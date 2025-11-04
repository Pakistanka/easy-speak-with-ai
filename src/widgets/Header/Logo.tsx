import Link from 'next/link'

export const Logo = () => (
  <Link href="/" className="flex h-7 lg:h-12">
    <span className="flex items-baseline text-2xl lg:text-[40px] font-bold leading-none">
      <span className="text-[var(--header-primary-color)]">E</span>
      <span>asy </span>
      <span className="text-[var(--header-accent-color)]">S</span>
      <span>peak</span>
    </span>
  </Link>
)