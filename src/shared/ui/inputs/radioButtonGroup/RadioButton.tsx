import { useRadioContext } from './RadioContext';

interface RadioButtonProps {
  value: string;
  disabled?: boolean;
  title?: string;
  description?: string;
  className?: string;
  error?: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  disabled = false,
  title,
  description,
  error,
}) => {
  const context = useRadioContext();

  const { selectedValue, onValueChange } = context;
  const isSelected = selectedValue === value;

  const handleClick = () => {
    if (!disabled && !isSelected) {
      onValueChange(value);
    }
  };

  const baseStyles = `
    rounded-2xl
    border
    py-6
    px-4
    transition-all
    duration-200
    ease-in-out
    font-sans
    font-normal
    w-full
    text-left
    shadow-[var(--option-shadow)]
    ${error ? 'border-[var(--input-error-color)]' : 'border-[var(--option-border-color)]'}
  `;

  const normalStyles = `
    bg-[var(--option-primary-bg-color)]
    hover:scale-[1.01]
    active:scale-[0.99]
  `;

  const selectedStyles = `
    bg-[var(--option-accent-bg-color)]
  `;

  const disabledStyles = `
    opacity-50
    cursor-not-allowed
    hover:scale-[1]
    active:scale-[1]
  `;

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled || isSelected}
      className={`
        ${baseStyles}
        ${isSelected ? selectedStyles : normalStyles}
        ${disabled ? disabledStyles : ''}
        ${!isSelected && !disabled ? 'cursor-pointer' : ''}
      `}
    >
      {title ? (
        <div className="flex flex-col gap-2">
          <span className="text-base font-bold">{title}</span>
          <span className="text-base">{description}</span>
        </div>
      ) : (
        <span className="text-base">{description}</span>
      )}
    </button>
  );
};
