import { Button } from "@/shared"
import { useTranslations } from "next-intl";


interface AuthButtonsProps {
  isLoggedIn: boolean
  className?: string
}

export const AuthButtons = ({ 
  isLoggedIn,
  className = '' 
}: AuthButtonsProps) => {
  const t = useTranslations('header');

  if (isLoggedIn) {
    return (
      <Button variant="outline" size="figma_md" className={`border-[var(--button-outline)] bg-transparent text-4 text-[var(--text-color)]${className}`}>
        {t('buttons.logOut')}
      </Button>
    )
  }

  return (
    <div className={`flex gap-4 lg:gap-2 ${className}`}>
      <Button variant="primary" size="figma_md">
        {t('buttons.signUp')}
      </Button>
      <Button variant="outline" size="figma_md" className="border-[var(--button-outline)] bg-transparent text-4 text-[var(--text-color)]">
        {t('buttons.logIn')}
      </Button>
    </div>
  )
}
