import { memo } from 'react';

export type TCheckboxUIProps = {
  children?: React.ReactNode;
  error?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;

export const CheckboxUI: React.FC<TCheckboxUIProps> = memo(
  ({ children, value, name, error, ...props }) => {
    const inputId = `${name}_checkbox_item_with_value__${value}`;

    return (
      <div
        className="flex relative w-fit gap-3 items-center cursor-pointer hover:opacity-75"
        key={inputId}
      >
        <div className="relative flex items-center justify-center">
          <input
            className={`
                peer
                appearance-none w-5 h-5
                border-[1.5px]
                ${
                  error
                    ? 'border-[var(--input-error-color)]'
                    : 'border-[var(--input-border-color)]'
                }
                rounded cursor-pointer
                bg-transparent
                checked:bg-[var(--text-color)]
                checked:border-[var(--text-color)]
              `}
            type="checkbox"
            id={inputId}
            value={value}
            name={name}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
          >
            <path
              d="M15 6L8 14L5 11"
              stroke="var(--background)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <label className="cursor-pointer text-inherit" htmlFor={inputId}>
          {children}
        </label>
      </div>
    );
  }
);
