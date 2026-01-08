import DropdownList from '@/shared/ui/DropdownList';
import choice from './choice.js';

export default function DropDown() {
  return (
    <>
      <DropdownList options={choice} />
    </>
  );
}
