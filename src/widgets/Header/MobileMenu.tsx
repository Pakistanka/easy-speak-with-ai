interface MobileMenuProps {
  isOpen: boolean
  children: React.ReactNode
}

export const MobileMenu = ({ isOpen, children }: MobileMenuProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 bg-[var(--background)] ld:hidden">
      <div className="flex flex-col items-center justify-start gap-10 h-full pt-[104px]">
        {children}
      </div>
    </div>
  )
}