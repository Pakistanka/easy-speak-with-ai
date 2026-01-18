interface MobileMenuProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const MobileMenu = ({ isOpen, children }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 pt-[104px] bg-[var(--background)] ld:hidden text-[var(--text-color)] text-[21px]">
      <div className="flex flex-col items-start justify-start gap-10 h-full px-5">
        {children}
      </div>
    </div>
  );
};
