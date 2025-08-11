"use client"

import { useEffect, useState } from "react"
import { TestimonyCard } from "@/components/TestimonyCard"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../app/testimony-slider.css"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useWindowSize } from "@/lib/utils"

export function TestimonySection() {
  const [mounted, setMounted] = useState(false)
  const size = useWindowSize()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  var settings = {
    dots: true,
    slidesToShow: size.width > 1200 ? 3 : 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <section className="px-4 py-8 md:px-16 md:py-20 space-y-8 md:space-x-8">
      <div className="space-y-4">
        <div className="text-center space-y-2 text-gray-600">
          <h2>Nota máxima em avaliação</h2>
          <p>
            Nosso escritório conta com nota maxima em avaliação com mais de 31
            depoimentos de clientes satisfeitos, veja alguns dos nossos cases de
            sucesso.
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <Slider
                key={
                  typeof window !== "undefined" ? window.innerWidth : "default"
                }
                {...settings}
              >
                <TestimonyCard
                  foto={
                    <Image
                      src="/andressa.png"
                      alt="Foto"
                      width={48}
                      height={48}
                    />
                  }
                  nome="Andressa Beltrao"
                  nota={5}
                  periodo="2 semanas atrás"
                  depoimento="Ótimos profissionais, atendimento maravilhoso,Dr Eduardo  é um profissional excelente no que faz ; gentil, atencioso e com um carisma que o diferencia de muitos outros continue sempre assim vc ainda vai muito longe, obrigada por toda atenção a nós prestada."
                />
                <TestimonyCard
                  foto={
                    <Image
                      src="/rafael.png"
                      alt="Foto"
                      width={48}
                      height={48}
                    />
                  }
                  nome="Rafael Moreira"
                  nota={5}
                  periodo="2 meses atrás"
                  depoimento="Oque falar do Dr Eduardo, do atendimento dele, da atenção que ele entrega, da paciência entre outros incríveis elogios que posso deixar aqui!! Eduardo desde o primeiro contato, até o fim do processo, que claro, ele venceu o processo!! Será sempre meu Advogado de agora em diante!! Sucesso e para finalizar: EU SUPER RECOMENDO"
                />
                <TestimonyCard
                  foto={
                    <Image
                      src="/matheus.png"
                      alt="Foto"
                      width={48}
                      height={48}
                    />
                  }
                  nome="Matheus Henrique de Almeida"
                  nota={5}
                  periodo="4 meses atrás"
                  depoimento="Excelente profissional, atencioso, educado e prestativo, super recomendo!!"
                />
                <TestimonyCard
                  foto={
                    <Image src="/lucas.png" alt="Foto" width={48} height={48} />
                  }
                  nome="Lucas Casagrande Gaspar"
                  nota={5}
                  periodo="6 meses atrás "
                  depoimento="Eduardo sem muito atencioso e verdadeiro pra lidar com cada questão que levamos. Um excelente profissional, indico com segurança!"
                />
                <TestimonyCard
                  foto={
                    <Image src="/leo.png" alt="Foto" width={48} height={48} />
                  }
                  nome="Leo Brito"
                  nota={5}
                  periodo="6 meses atrás"
                  depoimento="Fui extremamente bem atendido, muita atenção ao me explicar detalhes e me tranquilizou em todo o atendimento com muita segurança. Recomendo!"
                />
                <TestimonyCard
                  foto={
                    <Image
                      src="/felipe.png"
                      alt="Foto"
                      width={48}
                      height={48}
                    />
                  }
                  nome="Felipe R. Celestino"
                  nota={5}
                  periodo="6 meses atrás"
                  depoimento="Profissional muito bem qualificado e dedicado em atender as diversas necessidades de seus clientes. Recomendo muito!"
                />
                <TestimonyCard
                  foto={
                    <Image
                      src="/brenda.png"
                      alt="Foto"
                      width={48}
                      height={48}
                    />
                  }
                  nome="Brenda Cristina"
                  nota={5}
                  periodo="6 meses atrás"
                  depoimento="Excelente escritório, organização e competência em todas as áreas.
Profissionais focados e com muita qualidade nos serviços prestados.
Recomendo !!!!"
                />
                <TestimonyCard
                  foto={
                    <Image
                      src="/amanda.png"
                      alt="Foto"
                      width={48}
                      height={48}
                    />
                  }
                  nome="Amanda Ardito"
                  nota={5}
                  periodo="4 meses atrás"
                  depoimento="Profissionalismo e trabalho impecáveis"
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="bg-red text-white rounded-2xl">
    <ArrowLeft />
  </div>
)

const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="bg-red text-white rounded-2xl">
    <ArrowRight />
  </div>
)
