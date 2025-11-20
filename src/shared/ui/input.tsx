import { cn } from '@/shared/lib/utils';
import { motion } from 'framer-motion';
import * as React from 'react';
import { EyeSlashIcon } from './eyeSlashIcon';
import { EyeIcon } from './eyeIcon';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  withAnimation?: boolean;
  validationMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    title,
    placeholder,
    validationMessage,
    type = 'text',
    withAnimation = false,
    ...props
  }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    const isPasswordField = type === 'password';
    const inputType = isPasswordField && isPasswordVisible ? 'text' : type;

    const togglePasswordVisibility = React.useCallback(() => {
      setIsPasswordVisible(prev => !prev);
    }, []);
    
    const inputElement = (
      <div className="text-(--text-color)">
        <label 
          htmlFor={`${title}_input`} 
          className='block mb-1 text-inherit'
        >
          {title}
        </label>

        <div className="relative">
          <input 
            id={`${title}_input`}
            className={`
              text-inherit w-full p-3 border-[1.5px] rounded-md placeholder-[var(--input-placeholder)]
              focus:outline-none bg-[var(--input-bg)]
              ${validationMessage 
                ? 'border-[var(--input-error-color)]' 
                : 'border-[var(--input-border-color)] focus:border-[var(--input-border-focus)]'
              }
              ${isPasswordField ? 'pr-10' : ''}
              [&::-webkit-contacts-auto-fill-button]:hidden
              [&::-webkit-credentials-auto-fill-button]:hidden
            `}
            placeholder={placeholder}
            type={inputType}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            {...props}
          />

          {isPasswordField && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer p-0 flex justify-center items-center hover:opacity-75"
              onClick={togglePasswordVisibility}
              tabIndex={-1}
              aria-label={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
            >
              {isPasswordVisible ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          )}
        </div>

        {validationMessage && (
          <span className='text-[var(--input-error-color)] text-xs mt-1 block'>{validationMessage}</span>
        )}
      </div>
    );

    if (withAnimation) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileFocus={{ scale: 1.02 }}
        >
          {inputElement}
        </motion.div>
      );
    }

    return inputElement;
  }
);
Input.displayName = 'Input';

export { Input };
