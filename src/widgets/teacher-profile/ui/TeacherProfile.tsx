'use client';

import React, { useEffect, useState } from 'react';
import accentBg from '@/public/images/backgrounds/teacher-profile-accent.webp';
import { helvetica } from '@/shared/fonts';
import { mockTeacherProfile } from '@/widgets/teacher-profile/moks/teacherProfile';
import { ProfileHeader } from './components/ProfileHeader';
import { ProfileSection } from './components/ProfileSection';
import { StatsCard } from './components/StatsCard';
import { TopicsList } from './components/TopicsList';
import { PriceCard } from './components/PriceCard';

interface TeacherProfileProps {
  teacherId?: string;
}

const TeacherProfile = ({ teacherId = '1' }: TeacherProfileProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Временно используем моки напрямую!!!
  const profile = mockTeacherProfile;
  const formattedPrice = `$${profile.price.toFixed(2)}`;

  const avatarInitials = profile.name
    .split(' ')
    .map(n => n[0] || '')
    .join('');

  const handleBookLesson = () => {
    console.log('Book lesson for teacher:', teacherId);
  };

  if (isLoading) {
    return (
      <div className="relative min-h-screen bg-[#2f2e41] mb-8">
        <div className="relative z-10 max-w-[800px] mx-auto text-white pl-10 pb-10">
          <div className="animate-pulse">Loading profile...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#2f2e41] mb-8">
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1216px] h-[1144px] z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${accentBg.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-[800px] mx-auto text-white space-y-8 pl-10 pb-10">
        <ProfileHeader
          name={profile.name}
          profession={profile.profession}
          speaks={profile.speaks}
          teaches={profile.teaches}
          avatarInitials={avatarInitials}
        />

        <ProfileSection title="About me">
          <p
            className={`${helvetica.className} font-normal text-[21px] leading-[150%] text-[#fafafa]`}
          >
            {profile.about}
          </p>
        </ProfileSection>

        <ProfileSection title="Interesting topics">
          <TopicsList topics={profile.topics} />
        </ProfileSection>

        <ProfileSection title="Timezone">
          <p
            className={`${helvetica.className} font-normal text-[21px] leading-[150%] text-[#fafafa]`}
          >
            {profile.timezone}
          </p>
        </ProfileSection>

        <StatsCard
          rating={profile.rating}
          lessonsCount={profile.lessonsCount}
          studentsCount={profile.studentsCount}
        />

        <PriceCard price={formattedPrice} onBookLesson={handleBookLesson} />
      </div>
    </div>
  );
};

export default TeacherProfile;
