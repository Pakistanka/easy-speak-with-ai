'use client';

import React, { useState } from 'react';
import SelectField from './SelectField';
import PriceRange from './PriceRange';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterState {
  learnLanguage: string;
  teacherType: string;
  speaksLanguage: string;
  priceRange: number;
}

const FilterComponent: React.FC = () => {
  const languageOptions: FilterOption[] = [
    { value: 'english', label: 'English' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'italian', label: 'Italian' },
    { value: 'polish', label: 'Polish' },
  ];

  const teacherTypeOptions: FilterOption[] = [
    { value: 'certified', label: 'Certified Teacher' },
    { value: 'native', label: 'Native Speaker' },
    { value: 'both', label: 'Both' },
  ];

  const priceOptions = {
    min: 5,
    max: 80,
    step: 5,
  };

  const [filters, setFilters] = useState<FilterState>({
    learnLanguage: '',
    teacherType: '',
    speaksLanguage: '',
    priceRange: priceOptions.max,
  });

  const handleLanguageChange = (value: string) => {
    setFilters(prev => ({ ...prev, learnLanguage: value }));
  };

  const handleTeacherTypeChange = (value: string) => {
    setFilters(prev => ({ ...prev, teacherType: value }));
  };

  const handleSpeaksChange = (value: string) => {
    setFilters(prev => ({ ...prev, speaksLanguage: value }));
  };

  const handlePriceChange = (value: number) => {
    setFilters(prev => ({ ...prev, priceRange: value }));
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-start">
        <SelectField
          value={filters.learnLanguage}
          options={languageOptions}
          onChange={handleLanguageChange}
          placeholder="I want to learn"
        />

        <SelectField
          value={filters.teacherType}
          options={teacherTypeOptions}
          onChange={handleTeacherTypeChange}
          placeholder="Teacher type"
        />

        <SelectField
          value={filters.speaksLanguage}
          options={languageOptions}
          onChange={handleSpeaksChange}
          placeholder="Speaks"
        />

        <PriceRange
          priceRange={filters.priceRange}
          min={priceOptions.min}
          max={priceOptions.max}
          step={priceOptions.step}
          onChange={handlePriceChange}
        />
      </div>
    </div>
  );
};

export default FilterComponent;
