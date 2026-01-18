interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileMenuButton = ({
  isOpen,
  onClick,
}: MobileMenuButtonProps) => (
  <button
    type="button"
    className="inline-flex items-center justify-center lg:hidden"
    onClick={onClick}
  >
    {isOpen ? (
      // Крест
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 12.5L27.5 27.5M12.5 27.5L27.5 12.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    ) : (
      // Бургер
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.25 12.5H33.75M6.25 20H33.75M6.25 27.5H33.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    )}
  </button>
);
