import { motion } from 'framer-motion';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  withAnimation?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, withAnimation = false, ...props }, ref) => {
    const inputElement = (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
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
