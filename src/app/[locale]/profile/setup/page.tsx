'use client';
import { useState } from 'react';
import choice from './choice';
import { Button } from '@/shared';

export default function LanguageQuestions() {
  const [first] = useState(choice);

  return (
    <div className="flex flex-col lg:flex-row justify-start lg:justify-center items-center lg:items-start w-full h-full min-h-screen p-4 lg:p-8">
      <div className="hidden lg:block lg:w-1/3 xl:w-1/4 2xl:w-1/5">
        <div className="sticky top-8">
          <p>ТУТ МЕСТО ДЛЯ ЛЕВОЙ ЧАСТИ</p>
          {/* ТУТ МЕСТО ДЛЯ ЛЕВОЙ ЧАСТИ */}
        </div>
      </div>

      {/* Основной контент */}
      <div className="w-full max-w-[632px] lg:ml-[104px] border-4 border-yellow-400 flex flex-col p-4 lg:p-6 min-h-[685px] transition-all duration-300">
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-2">
            What is your name/nickname?
          </h2>
          <p className="text-gray-600 lg:text-lg">
            Please, write your name or nickname
          </p>
        </div>

        <br />

        <p className="text-lg font-medium mb-2">Name/nickname</p>

        <select
          className=" 
            block 
            text-gray-500 
            bg-white 
            border 
            border-gray-300 
            rounded-lg
            w-full 
            max-w-full
            h-[44px]
            lg:w-[632px]
            transition-all 
            duration-300
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:border-transparent
            hover:border-gray-400
          "
        >
          {first.map(el => (
            <option key={el.value} className="text-gray-900" value={el.value}>
              {el.label}
            </option>
          ))}
        </select>
        <div
          className="
          button_nav 
          flex 
          flex-col 
          sm:flex-row 
          sm:justify-between 
          mt-auto 
          pt-6 
          lg:pt-8
          gap-3 
          sm:gap-0
          transition-all 
          duration-300
        "
        >
          <Button
            className="
              bg-white 
              text-black 
              w-full 
              sm:w-[176px]
              h-[56px]
              transition-all 
              duration-300
              hover:scale-[1.02]
              active:scale-[0.98]
            "
            variant="secondary"
          >
            Return
          </Button>
          <Button
            className="
              w-full 
              sm:w-[176px]
              h-[56px]
              transition-all 
              duration-300
              hover:scale-[1.02]
              active:scale-[0.98]
            "
            variant="primary"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
