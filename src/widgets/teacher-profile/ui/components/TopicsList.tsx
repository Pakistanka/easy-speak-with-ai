import { helvetica } from '@/shared/fonts';

interface TopicsListProps {
  topics: string[];
}

export const TopicsList = ({ topics }: TopicsListProps) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {topics.map((topic, index) => (
        <span
          key={index}
          className={`${helvetica.className} font-normal text-base leading-[150%] text-center text-[#fafafa] border border-[#bbc2fa] rounded-[16px] py-2 px-4 inline-block whitespace-nowrap`}
        >
          {topic}
        </span>
      ))}
    </div>
  );
};
