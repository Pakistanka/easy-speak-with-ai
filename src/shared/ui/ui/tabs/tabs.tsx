import { cn } from '@/shared/lib/utils';
import * as React from 'react';

const MoonIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.125 6.90625C8.125 5.35133 8.35402 3.77762 8.9375 2.4375C5.05629 4.12699 2.4375 8.09047 2.4375 12.5938C2.4375 18.6514 7.34855 23.5625 13.4062 23.5625C17.9095 23.5625 21.873 20.9437 23.5625 17.0625C22.2224 17.646 20.6487 17.875 19.0938 17.875C13.0361 17.875 8.125 12.9639 8.125 6.90625Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const SunIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2.4375V4.875M13 21.125V23.5625M20.4689 5.53109L18.7454 7.25461M7.25461 18.7454L5.53109 20.4689M23.5625 13H21.125M4.875 13H2.4375M20.4689 20.4689L18.7454 18.7454M7.25461 7.25461L5.53109 5.53109" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M13 17.0625C15.2437 17.0625 17.0625 15.2437 17.0625 13C17.0625 10.7563 15.2437 8.9375 13 8.9375C10.7563 8.9375 8.9375 10.7563 8.9375 13C8.9375 15.2437 10.7563 17.0625 13 17.0625Z" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"/>
  </svg>
);

interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ defaultValue, value, onValueChange, className }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || 'light');
    
    const currentValue = value !== undefined ? value : internalValue;
    
    const handleValueChange = (newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    const isLight = currentValue === 'light';
    const isDark = currentValue === 'dark';

    return (
      <div 
        ref={ref}
        style={{
          backgroundColor: '#BBC2FA',
          borderRadius: '8px',
          padding: '4px',
          gap: '4px'
        }}
        className={cn(
          "inline-flex w-[352px] h-[66px]",
          className
        )}
      >
        <button
          style={{
            backgroundColor: isLight ? '#E0E3FF' : 'transparent',
            color: '#2F2E41',
            borderRadius: '8px'
          }}
          className={cn(
            "flex items-center justify-center gap-2 w-[170px] h-[58px] transition-all duration-200",
            isLight && "shadow-sm"
          )}
          onClick={() => handleValueChange('light')}
        >
          <SunIcon />
          <span className="text-body font-medium">Light</span>
        </button>
        
        <button
          style={{
            backgroundColor: isDark ? '#E0E3FF' : 'transparent',
            color: '#2F2E41',
            borderRadius: '8px'
          }}
          className={cn(
            "flex items-center justify-center gap-2 w-[170px] h-[58px] transition-all duration-200", 
            isDark && "shadow-sm"
          )}
          onClick={() => handleValueChange('dark')}
        >
          <MoonIcon />
          <span className="text-body font-medium">Dark</span>
        </button>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';