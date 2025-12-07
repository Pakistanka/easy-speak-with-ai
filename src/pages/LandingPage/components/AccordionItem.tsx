import { FC, ReactNode, useState } from 'react';

interface AccordionItemProps {
  children: ReactNode
  title: string
  defaultOpen?: boolean
}

export const AccordionItem: FC<AccordionItemProps> = (
  { 
    children, 
    title, 
    defaultOpen = false 
  }
) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="py-3 group mb-10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-[var(--text-color)] text-base md:text-lg font-semibold cursor-pointer"
        aria-expanded={open}
      >
        {title}
        <span className={`ml-2 transition-transform duration-500 ease-in-out ${open ? 'rotate-360' : 'rotate-180'} stroke-current`}>
          <svg width="25" height="14" viewBox="0 0 25 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23.5 12.25L12.25 1L1 12.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out mt-2 text-[var(--text-color)] text-sm md:text-base ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {children}
      </div>
    </div>
  );
};