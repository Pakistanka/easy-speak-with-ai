import { helvetica } from '@/shared/fonts';

interface StatsCardProps {
  rating: number;
  lessonsCount: number;
  studentsCount: number;
}

export const StatsCard = ({
  rating,
  lessonsCount,
  studentsCount,
}: StatsCardProps) => {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-4 rounded-lg mb-16 sm:mb-[251px]"
      style={{ backgroundColor: 'rgba(86, 102, 237, 0.2)' }}
    >
      <div className="flex items-center gap-2">
        <div className="text-yellow-400 text-2xl sm:text-[27px]">★</div>
        <span
          className={`${helvetica.className} font-normal text-2xl sm:text-[27px] leading-[150%] text-[#fafafa]`}
        >
          {rating.toFixed(1)}
        </span>
      </div>
      <div
        className={`${helvetica.className} font-normal text-2xl sm:text-[27px] leading-[150%] text-[#fafafa]`}
      >
        {lessonsCount.toLocaleString()} lessons
      </div>
      <div
        className={`${helvetica.className} font-normal text-2xl sm:text-[27px] leading-[150%] text-[#fafafa]`}
      >
        {studentsCount.toLocaleString()} students
      </div>
    </div>
  );
};
