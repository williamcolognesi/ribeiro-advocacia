import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
  return (
    <a href="https://wa.me/" target="_blank">
      <button
        className="flex justify-between items-center px-5 h-12 bg-emerald-500 text-white font-semibold rounded-xl cursor-pointer transition-colors duration-300 hover:bg-danger-900"
        {...props}
      />
    </a>
  )
}
