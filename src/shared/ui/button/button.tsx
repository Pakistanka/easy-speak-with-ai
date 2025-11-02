import { cn } from '@/shared/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: [
          'bg-gradient-to-b from-[#5666ED] to-[#3A4ADC]', 
          'text-white',
          'shadow-[0px_4px_8px_0px_rgba(86,102,237,0.3),0px_2px_4px_0px_rgba(255,255,255,0.25)_inset]',
          'hover:shadow-[0px_6px_12px_0px_rgba(86,102,237,0.4),0px_2px_4px_0px_rgba(255,255,255,0.3)_inset]',
          'active:shadow-[0px_2px_4px_0px_rgba(86,102,237,0.5),0px_1px_2px_0px_rgba(255,255,255,0.4)_inset]',
          'border border-[#6A7AEF]'
        ].join(' '),
        secondary: [
          'bg-gradient-to-b from-[#3F3D56] to-[#2A2940]',
          'text-white', 
          'shadow-[0px_4px_8px_0px_rgba(63,61,86,0.3),0px_2px_4px_0px_rgba(255,255,255,0.15)_inset]',
          'hover:shadow-[0px_6px_12px_0px_rgba(63,61,86,0.4),0px_2px_4px_0px_rgba(255,255,255,0.2)_inset]',
          'active:shadow-[0px_2px_4px_0px_rgba(63,61,86,0.5),0px_1px_2px_0px_rgba(255,255,255,0.25)_inset]',
          'border border-[#4F4D6A]'
        ].join(' '),
        dark: [
          'bg-gradient-to-b from-[#2F2E41] to-[#1E1D2E]',
          'text-white',
          'shadow-[0px_4px_8px_0px_rgba(47,46,65,0.3),0px_2px_4px_0px_rgba(255,255,255,0.1)_inset]',
          'hover:shadow-[0px_6px_12px_0px_rgba(47,46,65,0.4),0px_2px_4px_0px_rgba(255,255,255,0.15)_inset]',
          'active:shadow-[0px_2px_4px_0px_rgba(47,46,65,0.5),0px_1px_2px_0px_rgba(255,255,255,0.2)_inset]',
          'border border-[#3A3950]'
        ].join(' '),
        light: [
          'bg-gradient-to-b from-[#F0F0F0] to-[#E0E0E0]',
          'text-gray-800',
          'shadow-[0px_4px_8px_0px_rgba(202,202,202,0.3),0px_2px_4px_0px_rgba(255,255,255,0.5)_inset]',
          'hover:shadow-[0px_6px_12px_0px_rgba(202,202,202,0.4),0px_2px_4px_0px_rgba(255,255,255,0.6)_inset]',
          'active:shadow-[0px_2px_4px_0px_rgba(202,202,202,0.5),0px_1px_2px_0px_rgba(255,255,255,0.7)_inset]',
          'border border-[#D0D0D0]'
        ].join(' '),
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        figma_lg: 'h-14 px-14 py-3 text-base rounded-3xl', // 56px height, 56px padding
        figma_md: 'h-10 px-6 py-2 text-sm rounded-3xl',    // 40px height, 24px padding
        default: 'h-10 px-4 py-2 rounded-md',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'figma_lg',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withAnimation?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      withAnimation = false,
      ...props
    },
    ref
  ) => {
    const Comp = 'button';

    if (withAnimation) {
      return (
        <motion.div
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.1 }}
        >
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          />
        </motion.div>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };