import type { FC } from 'react';
import { memo, useState, useCallback } from 'react';

import { EyeSlashIcon } from './icons/eyeSlashIcon';
import { EyeIcon } from './icons/eyeIcon';

export type TInputUIProps = {
  error?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;

export const InputUI: FC<TInputUIProps> = memo(
  ({ title, placeholder, error, type = 'text', autoComplete, ...props }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const isPasswordField = type === 'password';
    const inputType = isPasswordField && isPasswordVisible ? 'text' : type;

    const togglePasswordVisibility = useCallback(() => {
      setIsPasswordVisible(prev => !prev);
    }, []);

    return (
      <>
        <label htmlFor={`${title}_input`} className="block mb-1 text-inherit">
          {title}
        </label>

        <div className="relative">
          <input
            id={`${title}_input`}
            className={`
              text-inherit w-full p-3 border-[1.5px] rounded-md placeholder-[var(--input-placeholder)]
              focus:outline-none bg-[var(--input-bg)]
              ${
                error
                  ? 'border-[var(--input-error-color)]'
                  : 'border-[var(--input-border-color)] focus:border-[var(--input-border-focus)]'
              }
              ${isPasswordField ? 'pr-10' : ''}
              [&::-webkit-contacts-auto-fill-button]:hidden
              [&::-webkit-credentials-auto-fill-button]:hidden
            `}
            placeholder={placeholder}
            type={inputType}
            autoComplete={autoComplete || 'off'}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          />

          {isPasswordField && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer p-0 flex justify-center items-center hover:opacity-75"
              onClick={togglePasswordVisibility}
              tabIndex={-1}
              aria-label={
                isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'
              }
            >
              {isPasswordVisible ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </>
    );
  }
);
