import Image from "next/image"
import logo from "../assets/logo.png"

export function ContentMaps() {
  return (
    <section className="px-8 md:px-64 md:py-20 grid grid-cols-12 space-y-8 md:space-x-8">
      <div className="col-span-12 md:col-span-8">Iframe do maps</div>
      <div className="col-span-12 md:col-span-4 flex flex-col items-end">
        <a>
          {/*
         <Image src={logo} alt="Logo" className="w-32" />
         */}
        </a>
        <div className="text-end">
          <h4>Horário de funcionamento</h4>
          <p>Segunda à Sexta, das 9h às 17h.</p>
        </div>
        <div className="text-end">
          <h4>Redes socias</h4>
        </div>
      </div>
      <div className="col-span-12 border border-black/30 border-[1px]"></div>
      <div className="col-span-12 text-center">
        <span className="font-bold">©2025</span> Todos os Direitos Reservados
        por Nome do cliente . Desenvolvido por{" "}
        <a href="https://www.williamcolognesi.com/">Wcolognesi</a>
      </div>
    </section>
  )
}
