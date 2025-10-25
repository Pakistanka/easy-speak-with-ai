import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const myLoader = ({ src }: any) => {
  return src;
};

// display numbers with comma (form string)
export const displayNumbers = (num: number): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
