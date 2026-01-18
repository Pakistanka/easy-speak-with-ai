import { useTranslations } from 'next-intl';

import { WalletIcon } from './WalletIcon';

interface WalletButtonProps {
  onClick?: () => void;
  className?: string;
}

// TO DO: добавить обработчик, либо заменить на Link

export const WalletButton = ({
  onClick,
  className = '',
}: WalletButtonProps) => {
  const t = useTranslations('header');

  return (
    <button
      onClick={onClick}
      className={`flex gap-4 items-center lg:hover:bg-[var(--header-hover)] lg:hover:outline-8 lg:hover:outline-offset-0 lg:hover:outline-[var(--header-hover)] rounded-[1px] ${className}`}
    >
      <span className="hidden lg:inline-block"> {t('wallet')} </span>
      <WalletIcon className="w-8 h-8 lg:w-[clamp(2rem,0.9508rem+1.6393vw,2.5rem)] lg:h-[clamp(2rem,0.9508rem+1.6393vw,2.5rem)] text-[var(--text-color)]" />
    </button>
  );
};
