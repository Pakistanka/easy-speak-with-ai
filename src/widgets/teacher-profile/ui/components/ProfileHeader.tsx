import { helvetica } from '@/shared/fonts';

interface ProfileHeaderProps {
  name: string;
  profession: string;
  speaks: string[];
  teaches: string[];
  avatarInitials: string;
}

export const ProfileHeader = ({
  name,
  profession,
  speaks,
  teaches,
  avatarInitials,
}: ProfileHeaderProps) => {
  return (
    <div className="flex gap-[34px] items-start">
      <div className="flex-shrink-0 mt-[6px]">
        <div className="w-32 h-32 rounded-full bg-gray-600 flex items-center justify-center">
          <span className="text-4xl font-semibold text-gray-300">
            {avatarInitials}
          </span>
        </div>
      </div>

      <div className="space-y-2 mt-[6px]">
        <div>
          <h2
            className={`${helvetica.className} font-bold text-[21px] leading-[150%] text-[#fafafa]`}
          >
            {name}
          </h2>
          <p
            className={`${helvetica.className} text-base leading-[150%] text-[#e9e9e9]`}
          >
            {profession}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-300">
            <span
              className={`${helvetica.className} text-[21px] leading-[150%] text-[#fafafa]`}
            >
              Speaks:
            </span>{' '}
            {speaks.join(', ')}
          </p>
          <p className="text-gray-300">
            <span
              className={`${helvetica.className} text-[21px] leading-[150%] text-[#fafafa]`}
            >
              Teaches:
            </span>{' '}
            {teaches.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};
