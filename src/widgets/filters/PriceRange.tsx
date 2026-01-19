'use client';

import React, { useState, useRef, useEffect } from 'react';
import { helvetica } from '@/shared/fonts';

interface PriceRangeProps {
  priceRange: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

const PriceRange: React.FC<PriceRangeProps> = ({
  priceRange,
  min,
  max,
  step,
  onChange,
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
          <span>Lesson price</span>
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
        <div className="absolute top-full left-0 mt-1 border border-[#bbc2fa] rounded-[8px] p-4 bg-white w-[222px] h-[72px] z-10 shadow-lg">
          <div className="flex items-center gap-3 w-full">
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={priceRange}
              onChange={e => onChange(Number(e.target.value))}
              className="slider flex-1 w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <style jsx>{`
              .slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                height: 18px;
                width: 18px;
                border-radius: 50%;
                background: #3b82f6;
                cursor: pointer;
                border: 2px solid white;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
              }

              .slider::-moz-range-thumb {
                height: 18px;
                width: 18px;
                border-radius: 50%;
                background: #3b82f6;
                cursor: pointer;
                border: 2px solid white;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                box-sizing: border-box;
              }
            `}</style>
            <span
              className={`text-base font-normal text-[#161616] min-w-12 whitespace-nowrap ${helvetica.className}`}
            >
              ${priceRange}
            </span>
          </div>
          <div
            className={`flex justify-between text-xs text-gray-500 mt-2 px-1 ${helvetica.className}`}
          >
            <span>${min}</span>
            <span>${max}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceRange;
