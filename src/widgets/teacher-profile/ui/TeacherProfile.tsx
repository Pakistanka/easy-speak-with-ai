'use client';

import React, { useEffect } from 'react';
import accentBg from '@/public/images/backgrounds/teacher-profile-accent.png';
import { useTeacherProfile } from '../stores/teacherProfileStore';
import { helvetica } from '@/shared/fonts';
import { Button } from '@/shared';

const TeacherProfile = () => {
  const teacherId = '1'; // или получи из URL/параметров

  const { profile, isLoading, error, refetch, formattedPrice, ratingStars } =
    useTeacherProfile(teacherId);

  useEffect(() => {
    if (teacherId) {
      refetch();
    }
  }, [teacherId]);

  // Показываем заглушку во время загрузки
  if (isLoading) {
    return (
      <div className="relative min-h-screen bg-[#2f2e41] mb-8">
        <div className="relative z-10 max-w-[800px] text-white">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  // Показываем ошибку
  if (error) {
    return (
      <div className="relative min-h-screen bg-[#2f2e41] mb-8">
        <div className="relative z-10 max-w-[800px] text-white">
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

  // Если нет профиля
  if (!profile) {
    return (
      <div className="relative min-h-screen bg-[#2f2e41] mb-8">
        <div className="relative z-10 max-w-[800px] text-white">
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

      {/* Весь контент в одном столбце, сдвинутый вправо */}
      <div className="relative z-10 max-w-[800px] mx-auto text-white space-y-[32px] pl-10 pb-10">
        {' '}
        {/* mx-auto (центрирование) и отступы pl-10 pb-10 меняем или убираем при использовании*/}
        {/* Аватарка, имя, профессия и языки */}
        <div className="flex gap-[34px] items-start">
          {/* Аватарка */}
          <div className="flex-shrink-0 mt-[6px]">
            {' '}
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
            {' '}
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
        <div className="mb-8">
          <h3
            className={`${helvetica.className} font-bold text-[21px] leading-[150%] mb-4 text-[#fafafa]`}
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
            className={`${helvetica.className} font-bold text-[21px] leading-[150%] mb-4 text-[#fafafa]`}
          >
            Interesting topics
          </h3>
          <div className="flex gap-4">
            {profile.topics.map((topic, index) => (
              <span
                key={index}
                className="font-helvetica font-normal text-base leading-[150%] text-center text-[#fafafa] border border-[#bbc2fa] rounded-[16px] py-2 px-4 inline-block whitespace-nowrap"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
        {/* Timezone */}
        <div>
          <h3
            className={`${helvetica.className} font-bold text-[21px] leading-[150%] mb-4 text-[#fafafa]`}
          >
            Timezone
          </h3>
          <p
            className={`${helvetica.className} font-normal text-[21px] leading-[150%] text-[#fafafa]`}
          >
            {profile.timezone}
          </p>
        </div>
        {/* Рейтинг и статистика с фоном */}
        <div
          className="flex items-center justify-center gap-8 p-4 rounded-lg mb-[251px]"
          style={{ backgroundColor: 'rgba(86, 102, 237, 0.2)' }}
        >
          <div className="flex items-center gap-2">
            <div className="text-yellow-400 text-[27px]">★</div>
            <span
              className={`${helvetica.className} font-normal text-[27px] leading-[150%] text-[#fafafa]`}
            >
              {profile.rating.toFixed(1)}
            </span>
          </div>
          <div
            className={`${helvetica.className} font-normal text-[27px] leading-[150%] text-[#fafafa]`}
          >
            {profile.lessonsCount.toLocaleString()} lessons
          </div>
          <div
            className={`${helvetica.className} font-normal text-[27px] leading-[150%] text-[#fafafa]`}
          >
            {profile.studentsCount.toLocaleString()} students
          </div>
        </div>
        {/* Цена и кнопка на БЕЛОМ фоне */}
        <div className="bg-white rounded-lg p-6 flex items-center justify-between">
          <div className="flex justify-center items-center gap-2">
            <p
              className={`${helvetica.className} font-bold text-[27px] leading-[150%] text-[#161616]`}
            >
              {formattedPrice}
            </p>
            <p
              className={`${helvetica.className} font-normal text-[21px] leading-[150%] text-[#797979]`}
            >
              /per lesson
            </p>
          </div>
          <Button className="">
            <p
              className={`${helvetica.className} font-normal text-[21px] leading-[150%] text-[#fafafa]`}
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
