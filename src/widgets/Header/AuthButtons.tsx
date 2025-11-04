import { Button } from "@/shared"


interface AuthButtonsProps {
  isLoggedIn: boolean
  className?: string
}

export const AuthButtons = ({ 
  isLoggedIn,
  className = '' 
}: AuthButtonsProps) => {
  if (isLoggedIn) {
    return (
      <Button variant="outline" size="figma_md" className="border-[var(--button-outline)] bg-transparent text-4">
        Log out
      </Button>
    )
  }

  return (
    <div className={`flex gap-4 lg:gap-2 ${className}`}>
      <Button variant="primary" size="figma_md">
        Sign up
      </Button>
      <Button variant="outline" size="figma_md" className="border-[var(--button-outline)] bg-transparent text-4">
        Log in
      </Button>
    </div>
  )
}