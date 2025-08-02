interface QuestionProps {
  pergunta: string
  resposta: string
}

export function Question({ pergunta, resposta }: QuestionProps) {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="font-bold text-xl">{pergunta}</h3>
      <p>{resposta}</p>
      <div className="border border-[#C7C7C7]"></div>
    </div>
  )
}
