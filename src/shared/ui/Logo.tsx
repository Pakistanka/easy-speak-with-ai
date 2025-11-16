import Link from 'next/link'

interface LogoProps {
  withLogo: boolean
}

export const Logo = ({ withLogo }: LogoProps) => (
  <Link href="/" className={`flex h-7 lg:h-[clamp(2.5rem,1.4508rem+1.6393vw,3rem)] ${!withLogo && 'lg:hidden'}`}>
    <span className="flex items-baseline text-2xl lg:text-[clamp(2rem,0.9508rem+1.6393vw,2.5rem)] font-bold leading-none">
      <span className="text-[var(--header-primary-color)]">E</span>
      <span>asy </span>
      <span className="text-[var(--header-accent-color)]">S</span>
      <span>peak</span>
    </span>
  </Link>
)