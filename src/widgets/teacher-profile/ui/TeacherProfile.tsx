'use client';

import React, { useEffect } from 'react';
import accentBg from '@/public/images/backgrounds/teacher-profile-accent.png';
import { useTeacherProfile } from '../stores/teacherProfileStore';
import { helvetica } from '@/shared/fonts';
import { Button } from '@/shared';

const TeacherProfile = () => {
  const teacherId = '1';

  const { profile, isLoading, error, refetch, formattedPrice } =
    useTeacherProfile(teacherId);

  useEffect(() => {
    if (teacherId) {
      refetch();
    }
  }, [teacherId]);

  if (isLoading) {
    return (
      <div className="relative min-h-screen bg-[#2f2e41] mb-8">
        <div className="relative z-10 max-w-[800px] mx-auto text-white pl-10 pb-10">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-screen bg-[#2f2e41] mb-8">
        <div className="relative z-10 max-w-[800px] mx-auto text-white pl-10 pb-10">
          <div>Error: {error}</div>
          <button
            onClick={() => refetch()}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="relative min-h-screen bg-[#2f2e41] mb-8">
        <div className="relative z-10 max-w-[800px] mx-auto text-white pl-10 pb-10">
          <div>Profile not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#2f2e41] mb-8">
      {/* Фоновое пятно */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1216px] h-[1144px] z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${accentBg.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      {/* Основной контент */}
      <div className="relative z-10 max-w-[800px] mx-auto text-white space-y-8 pl-10 pb-10">
        {/* Аватарка, имя, профессия и языки */}
        <div className="flex gap-[34px] items-start">
          {/* Аватарка */}
          <div className="flex-shrink-0 mt-[6px]">
            <div className="w-32 h-32 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="text-4xl font-semibold text-gray-300">
                {profile.name
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </span>
            </div>
          </div>

          {/* Текст */}
          <div className="space-y-2 mt-[6px]">
            <div>
              <h2
                className={`${helvetica.className} font-bold text-[21px] leading-[150%] text-[#fafafa]`}
              >
                {profile.name}
              </h2>
              <p
                className={`${helvetica.className} text-base leading-[150%] text-[#e9e9e9]`}
              >
                {profile.profession}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span
                  className={`${helvetica.className} text-[21px] leading-[150%] text-[#fafafa]`}
                >
                  Speaks:
                </span>{' '}
                {profile.speaks.join(', ')}
              </p>
              <p className="text-gray-300">
                <span
                  className={`${helvetica.className} text-[21px] leading-[150%] text-[#fafafa]`}
                >
                  Teaches:
                </span>{' '}
                {profile.teaches.join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* About me */}
        <div>
          <h3
            className={`${helvetica.className} font-bold text-[21px] leading-[150%] text-[#fafafa] mb-4`}
          >
            About me
          </h3>
          <p
            className={`${helvetica.className} font-normal text-[21px] leading-[150%] text-[#fafafa]`}
          >
            {profile.about}
          </p>
        </div>

        {/* Interesting topics */}
        <div>
          <h3
            className={`${helvetica.className} font-bold text-[21px] leading-[150%] text-[#fafafa] mb-4`}
          >
            Interesting topics
          </h3>
          <div className="flex gap-3">
            {profile.topics.map((topic, index) => (
              <span
                key={index}
                className={`${helvetica.className} font-normal text-base leading-[150%] text-center text-[#fafafa] border border-[#bbc2fa] rounded-[16px] py-2 px-4 inline-block whitespace-nowrap`}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Timezone */}
        <div>
          <h3
            className={`${helvetica.className} font-bold text-[21px] leading-[150%] text-[#fafafa] mb-4`}
          >
            Timezone
          </h3>
          <p
            className={`${helvetica.className} font-normal text-[21px] leading-[150%] text-[#fafafa]`}
          >
            {profile.timezone}
          </p>
        </div>

        {/* Рейтинг и статистика - АДАПТИВНЫЙ */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-4 rounded-lg mb-16 sm:mb-[251px]"
          style={{ backgroundColor: 'rgba(86, 102, 237, 0.2)' }}
        >
          <div className="flex items-center gap-2">
            <div className="text-yellow-400 text-2xl sm:text-[27px]">★</div>
            <span
              className={`${helvetica.className} font-normal text-2xl sm:text-[27px] leading-[150%] text-[#fafafa]`}
            >
              {profile.rating.toFixed(1)}
            </span>
          </div>
          <div
            className={`${helvetica.className} font-normal text-2xl sm:text-[27px] leading-[150%] text-[#fafafa]`}
          >
            {profile.lessonsCount.toLocaleString()} lessons
          </div>
          <div
            className={`${helvetica.className} font-normal text-2xl sm:text-[27px] leading-[150%] text-[#fafafa]`}
          >
            {profile.studentsCount.toLocaleString()} students
          </div>
        </div>

        {/* Цена и кнопка - АДАПТИВНЫЙ */}
        <div className="bg-white rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex justify-center items-center gap-2">
            <p
              className={`${helvetica.className} font-bold text-2xl sm:text-[27px] leading-[150%] text-[#161616]`}
            >
              {formattedPrice}
            </p>
            <p
              className={`${helvetica.className} font-normal text-lg sm:text-[21px] leading-[150%] text-[#797979]`}
            >
              /per lesson
            </p>
          </div>
          <Button className="w-full sm:w-auto">
            <p
              className={`${helvetica.className} font-normal text-lg sm:text-[21px] leading-[150%] text-white`}
            >
              Book a lesson
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
