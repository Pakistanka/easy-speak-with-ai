import { WalletIcon } from './WalletIcon'

export const WalletButton = () => (
  <button className={`flex gap-4 items-center lg:hover:bg-[var(--header-hover)] lg:hover:outline-8 lg:hover:outline-offset-0 lg:hover:outline-[var(--header-hover)] rounded-[1px]`}>
    <span className={`hidden lg:inline-block`}> Crypto wallet</span>
    <WalletIcon className={`w-8 h-8 lg:w-10 lg:h-10 text-[var(--text-color)]`}/>
  </button>
)