import { useTranslations } from 'next-intl';

export default function DropdownList() {
  const tForms = useTranslations('forms');
  const choice = [
    { value: 'english', label: 'English' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'indonesian', label: 'Indonesian' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'korean', label: 'Korean' },
    { value: 'spanish', label: 'Spanish' },
  ];

  return (
    <>
      <label htmlFor="name-select" className="text-lg font-medium mb-2 block">
        {tForms('nameLabel')}
      </label>
      <select
        id="name-select"
        className=" 
            block 
            text-black 
            bg-white 
            border 
            border-black
            rounded-lg
            max-w-full
            h-11
            lg:w-[632px]
            transition-all 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:border-transparent
            hover:border-gray-400
          "
      >
        {choice.map(el => (
          <option key={el.value} value={el.value}>
            {el.label}
          </option>
        ))}
      </select>
    </>
  );
}
