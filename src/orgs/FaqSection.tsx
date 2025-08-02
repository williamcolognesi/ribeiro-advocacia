import { Question } from "@/components/Question"

export function FaqSection() {
  return (
    <section className="px-8 md:px-64 md:py-20 space-y-8 md:space-x-8 bg-[#fafafa]">
      <div className="space-y-6">
        <div className="">
          <h2 className="font-bold text-5xl leading-14">
            Perguntas frequentes
          </h2>
        </div>
        <div className="flex flex-col space-y-6">
          <Question
            pergunta="Lorem ipsum not amet"
            resposta="Nisl netus et metus vulputate urna proin urna aliquam sapien interdum adipiscing eget eget cursus sagittis faucibus lectus diam in quam facilisis ac diam"
          />
        </div>
      </div>
    </section>
  )
}
