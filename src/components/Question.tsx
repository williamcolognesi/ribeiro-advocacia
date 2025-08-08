"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface QuestionProps {
  pergunta: string
  resposta: string
  open?: boolean
}

export function Question({ pergunta, resposta, open = false }: QuestionProps) {
  const [opened, setOpened] = useState(open)

  return (
    <div className="flex flex-col space-y-2 text-gray-600">
      <h3
        className="font-bold text-xl cursor-pointer flex justify-between"
        onClick={() => setOpened(!opened)}
      >
        {pergunta}
        {opened ? <ChevronUp /> : <ChevronDown />}
      </h3>
      {opened && <p>{resposta}</p>}
      <div className="border border-[#C7C7C7]"></div>
    </div>
  )
}
