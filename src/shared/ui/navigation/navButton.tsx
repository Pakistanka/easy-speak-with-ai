import type { ReactNode } from 'react';

interface NavButtonProps {
  label: string;
  icon?: ReactNode;
  labelClassName?: string;
  iconClassName?: string;
}

export const NavButton = ({
  label,
  icon,
  labelClassName,
  iconClassName,
}: NavButtonProps) => {
  return (
    <>
      {icon && <span className={iconClassName}>{icon}</span>}

      <span className={labelClassName}>{label}</span>
    </>
  );
};
