import { ComponentProps } from "react"
import { ReactNode } from "react"

interface ButtonProps extends ComponentProps<"button"> {
  link: string
  icon: ReactNode
}

export function IconButton({ link, icon }: ButtonProps) {
  return (
    <a href={link} target="_blank">
      <div className="flex justify-center items-center w-12 h-12 bg-red text-white font-semibold rounded-full cursor-pointer transition-colors duration-300 hover:bg-danger-900">
        {icon}
      </div>
    </a>
  )
}
