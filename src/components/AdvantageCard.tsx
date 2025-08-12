import { ReactNode } from "react"

interface AdvantageCardProps {
  icon: ReactNode
  titulo: string
  descricao: string
}

export function AdvantageCard({ icon, titulo, descricao }: AdvantageCardProps) {
  return (
    <div className="p-6 rounded-3xl space-y-2 bg-red ">
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center rounded-lg bg-white w-12 h-12 text-red">
          {icon}
        </div>
        <h3 className="font-bold text-lg text-white">{titulo}</h3>
      </div>
      <p className="text-white text-body text-justify">{descricao}</p>
    </div>
  )
}
