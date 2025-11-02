'use client';

import { ReactNode } from 'react';

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

export const Accordion = ({ children, className = '' }: AccordionProps) => {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  );
};