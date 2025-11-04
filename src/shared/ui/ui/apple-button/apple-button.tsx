import { cn } from '@/shared/lib/utils';
import * as React from 'react';

const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.9854 2C12.921 2.07229 11.6791 2.74999 10.9517 3.63481C10.2918 4.43669 9.74892 5.62621 9.96181 6.7798H10.047C11.1806 6.7798 12.3408 6.09722 13.0185 5.2226C13.6714 4.39012 14.1664 3.21036 13.9854 2Z" fill="currentColor"/>
    <path d="M16.1022 6.77979C14.3139 6.77979 13.5582 7.63311 12.3128 7.63311C11.0359 7.63311 10.0619 6.78599 8.51227 6.78599C6.99544 6.78599 5.37793 7.71206 4.35074 9.28966C2.90842 11.5143 3.15324 15.7043 5.48925 19.2737C6.32484 20.5515 7.44073 21.9845 8.90434 22H8.93095C10.203 22 10.5808 21.1671 12.3314 21.1573H12.358C14.0824 21.1573 14.4284 21.9951 15.6951 21.9951H15.7217C17.1853 21.9796 18.361 20.3918 19.1966 19.1189C19.798 18.2035 20.0216 17.744 20.4828 16.7084C17.1037 15.4257 16.5608 10.6353 19.9027 8.79868C18.8826 7.52135 17.4492 6.78156 16.0978 6.78156L16.1022 6.77979Z" fill="currentColor"/>
  </svg>
);

const appleButtonStyles = {
  base: 'inline-flex items-center justify-center font-normal transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  
  variant: {
    // Border варианты с неоморфизмом
    blueBorder: 'border border-[#5666ED] bg-[#FAFAFA] text-[#161616] shadow-[0px_4px_8px_0px_rgba(86,102,237,0.1),0px_2px_4px_0px_rgba(255,255,255,0.5)_inset]',
    purpleBorder: 'border border-[#3F3D56] bg-[#FAFAFA] text-[#161616] shadow-[0px_4px_8px_0px_rgba(63,61,86,0.1),0px_2px_4px_0px_rgba(255,255,255,0.5)_inset]',
    darkBorder: 'border border-[#2F2E41] bg-[#FAFAFA] text-[#161616] shadow-[0px_4px_8px_0px_rgba(47,46,65,0.1),0px_2px_4px_0px_rgba(255,255,255,0.5)_inset]',
    grayBorder: 'border border-[#CACACA] bg-[#FAFAFA] text-[#161616] shadow-[0px_4px_8px_0px_rgba(202,202,202,0.1),0px_2px_4px_0px_rgba(255,255,255,0.5)_inset]',

    // Background варианты с неоморфизмом  
    blueBg: 'border-0 bg-[#5666ED] text-white shadow-[0px_4px_8px_0px_rgba(86,102,237,0.3),0px_2px_4px_0px_rgba(255,255,255,0.25)_inset]',
    purpleBg: 'border-0 bg-[#3F3D56] text-white shadow-[0px_4px_8px_0px_rgba(63,61,86,0.3),0px_2px_4px_0px_rgba(255,255,255,0.15)_inset]',
    darkBg: 'border-0 bg-[#2F2E41] text-white shadow-[0px_4px_8px_0px_rgba(47,46,65,0.3),0px_2px_4px_0px_rgba(255,255,255,0.1)_inset]',
    grayBg: 'border-0 bg-[#CACACA] text-[#161616] shadow-[0px_4px_8px_0px_rgba(202,202,202,0.3),0px_2px_4px_0px_rgba(255,255,255,0.5)_inset]',
  },
  
  size: {
    lg: 'apple-btn-lg',
    md: 'apple-btn-md',
  }
};

export interface AppleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blueBorder' | 'purpleBorder' | 'darkBorder' | 'grayBorder' | 'blueBg' | 'purpleBg' | 'darkBg' | 'grayBg';
  size?: 'lg' | 'md';
}

const AppleButton = React.forwardRef<HTMLButtonElement, AppleButtonProps>(
  ({ className, variant = 'blueBorder', size = 'lg', children, ...props }, ref) => {
    const buttonClasses = cn(
      appleButtonStyles.base,
      appleButtonStyles.variant[variant],
      appleButtonStyles.size[size],
      className
    );

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        <AppleIcon />
        <span>{children}</span>
      </button>
    );
  }
);

AppleButton.displayName = 'AppleButton';

export { AppleButton };