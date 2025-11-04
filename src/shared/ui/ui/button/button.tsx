'use client';

import { cn } from '@/shared/lib/utils';
import { motion } from 'framer-motion';
import * as React from 'react';

const buttonStyles = {
  base: 'inline-flex items-center justify-center font-normal transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  
  variant: {
    primary: 'bg-gradient-to-b from-[#5666ED] to-[#3A4ADC] text-white shadow-[0px_4px_8px_0px_rgba(86,102,237,0.3),0px_2px_4px_0px_rgba(255,255,255,0.25)_inset] hover:shadow-[0px_6px_12px_0px_rgba(86,102,237,0.4),0px_2px_4px_0px_rgba(255,255,255,0.3)_inset] active:shadow-[0px_2px_4px_0px_rgba(86,102,237,0.5),0px_1px_2px_0px_rgba(255,255,255,0.4)_inset] border border-[#6A7AEF]',
    secondary: 'bg-gradient-to-b from-[#3F3D56] to-[#2A2940] text-white shadow-[0px_4px_8px_0px_rgba(63,61,86,0.3),0px_2px_4px_0px_rgba(255,255,255,0.15)_inset] hover:shadow-[0px_6px_12px_0px_rgba(63,61,86,0.4),0px_2px_4px_0px_rgba(255,255,255,0.2)_inset] active:shadow-[0px_2px_4px_0px_rgba(63,61,86,0.5),0px_1px_2px_0px_rgba(255,255,255,0.25)_inset] border border-[#4F4D6A]',
    dark: 'bg-gradient-to-b from-[#2F2E41] to-[#1E1D2E] text-white shadow-[0px_4px_8px_0px_rgba(47,46,65,0.3),0px_2px_4px_0px_rgba(255,255,255,0.1)_inset] hover:shadow-[0px_6px_12px_0px_rgba(47,46,65,0.4),0px_2px_4px_0px_rgba(255,255,255,0.15)_inset] active:shadow-[0px_2px_4px_0px_rgba(47,46,65,0.5),0px_1px_2px_0px_rgba(255,255,255,0.2)_inset] border border-[#3A3950]',
    light: 'bg-gradient-to-b from-[#F0F0F0] to-[#E0E0E0] text-gray-800 shadow-[0px_4px_8px_0px_rgba(202,202,202,0.3),0px_2px_4px_0px_rgba(255,255,255,0.5)_inset] hover:shadow-[0px_6px_12px_0px_rgba(202,202,202,0.4),0px_2px_4px_0px_rgba(255,255,255,0.6)_inset] active:shadow-[0px_2px_4px_0px_rgba(202,202,202,0.5),0px_1px_2px_0px_rgba(255,255,255,0.7)_inset] border border-[#D0D0D0]'
  },
size: {
  figma_lg: 'btn-figma-lg',
  figma_md: 'btn-figma-md',
}
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'light';
  size?: 'figma_lg' | 'figma_md';
  withAnimation?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'figma_lg',
    withAnimation = false,
    ...props
  },
  ref
  ) => {
    const Comp = 'button';
    
    const buttonClasses = cn(
      buttonStyles.base,
      buttonStyles.variant[variant],
      buttonStyles.size[size],
      className
    );

    if (withAnimation) {
      return (
        <motion.div
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.1 }}
        >
          <Comp
            className={buttonClasses}
            ref={ref}
            {...props}
          />
        </motion.div>
      );
    }

    return (
      <Comp
        className={buttonClasses}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };