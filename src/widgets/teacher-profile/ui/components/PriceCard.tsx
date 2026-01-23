import { helvetica } from '@/shared/fonts';
import { Button } from '@/shared';

interface PriceCardProps {
  price: string;
  onBookLesson: () => void;
}

export const PriceCard = ({ price, onBookLesson }: PriceCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex justify-center items-center gap-2">
        <p
          className={`${helvetica.className} font-bold text-2xl sm:text-[27px] leading-[150%] text-[#161616]`}
        >
          {price}
        </p>
        <p
          className={`${helvetica.className} font-normal text-lg sm:text-[21px] leading-[150%] text-[#797979]`}
        >
          /per lesson
        </p>
      </div>
      <Button onClick={onBookLesson} className="w-full sm:w-auto">
        <p
          className={`${helvetica.className} font-normal text-lg sm:text-[21px] leading-[150%] text-white`}
        >
          Book a lesson
        </p>
      </Button>
    </div>
  );
};
