import { helvetica } from '@/shared/fonts';
import { ReactNode } from 'react';

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ProfileSection = ({
  title,
  children,
  className = '',
}: ProfileSectionProps) => {
  return (
    <div className={className}>
      <h3
        className={`${helvetica.className} font-bold text-[21px] leading-[150%] text-[#fafafa] mb-4`}
      >
        {title}
      </h3>
      {children}
    </div>
  );
};
