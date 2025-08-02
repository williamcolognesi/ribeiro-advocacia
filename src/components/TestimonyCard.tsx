import { Star } from "lucide-react"
import { ReactNode } from "react"

interface TestimonyCardProps {
  foto: ReactNode
  nome: string
  nota: number
  periodo: string
  depoimento: string
}

export function TestimonyCard({
  foto,
  nome,
  nota,
  periodo,
  depoimento,
}: TestimonyCardProps) {
  return (
    <div className="bg-[#FAFAFA] flex flex-col p-3">
      <div className="flex space-x-1 space-y-2">
        {foto}
        <div>
          <p className="font-bold">{nome}</p>
          <div className="flex space-x-1">
            <div className="flex">
              {Array.from({ length: nota }).map((_, index) => (
                <Star
                  key={index}
                  className="w-4 h-4 fill-yellow-500 stroke-yellow-500"
                />
              ))}
            </div>

            <span className="text-[12px] text-[#626262]">{periodo}</span>
          </div>
        </div>
      </div>
      <div className="text-sm text-[#363535] font-medium leading-6">
        "{depoimento}"
      </div>
    </div>
  )
}
