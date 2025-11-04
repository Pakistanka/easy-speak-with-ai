interface MobileMenuButtonProps {
  onClick: () => void
}

export const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => (
  <button
    type="button"
    className="inline-flex items-center justify-center g:hidden"
    onClick={onClick}
  >
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.25 12.5H33.75M6.25 20H33.75M6.25 27.5H33.75" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
    </svg>
  </button>
)