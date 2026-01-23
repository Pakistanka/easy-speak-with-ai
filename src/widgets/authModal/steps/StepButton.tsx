type TStepButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const StepButton: React.FC<TStepButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="my-2 flex gap-1 items-center text-(--text-color) hover:opacity-75"
    >
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 13L13 3M13 3H5.5M13 3V10.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
