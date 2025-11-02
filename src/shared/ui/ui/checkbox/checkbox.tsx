import { cn } from '@/shared/lib/utils';
import * as React from 'react';

const CheckedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" fill="#161616"/>
    <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#161616"/>
    <path d="M15 6L8 14L5 11" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const UncheckedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#161616"/>
  </svg>
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string;
  onChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onChange, label, disabled, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.checked);
    };

    return (
      <label className={cn(
        "inline-flex items-center gap-3 cursor-pointer",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}>
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only" // скрываем нативный input
          {...props}
        />
        
        <span className={cn(
          "inline-flex items-center justify-center transition-all duration-200",
          "hover:scale-105 active:scale-95",
          disabled && "hover:scale-100 active:scale-100"
        )}>
          {checked ? <CheckedIcon /> : <UncheckedIcon />}
        </span>
        
        {label && (
          <span className="text-body text-black select-none">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };