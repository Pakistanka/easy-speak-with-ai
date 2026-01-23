'use client';

import React, { useState, useRef, useEffect } from 'react';
import { helvetica } from '@/shared/fonts';

interface SelectFieldProps {
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
  placeholder: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  value,
  options,
  onChange,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={`
          border border-[#bbc2fa]
          rounded-[8px]
          pl-4
          pr-4
          py-2
          bg-[#fafafa]
          h-[40px]
          font-normal
          text-base
          leading-[150%]
          text-[#161616]
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          cursor-pointer
          ${helvetica.className}
          whitespace-nowrap
        `}
      >
        <div className="flex items-center gap-2">
          <span>{placeholder}</span>
          <img
            src="/icons/Vector.svg"
            alt="dropdown arrow"
            className={`w-3 h-2 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#bbc2fa] rounded-[8px] shadow-lg z-10 py-1">
          {options.map(option => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleOptionClick(option.value)}
              className={`
                w-full px-4 py-2 text-left hover:bg-gray-100
                ${helvetica.className}
                ${value === option.value ? 'bg-blue-50 text-blue-600' : 'text-[#161616]'}
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectField;
