import Image from "next/image"
import logo from "../../public/logo.png"
import Link from "next/link"

export function ContentMaps() {
  return (
    <section className="px-4 py-8 md:px-16 md:py-20 grid grid-cols-12 space-y-8 md:space-x-8">
      <div className="col-span-12 md:col-span-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1839.8596983765733!2d-47.368620683318724!3d-22.73866875159217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89d41f0b05e2f%3A0xff03af964d01bc93!2sRibeiro%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1754434720727!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          className="rounded-2xl"
        ></iframe>
      </div>
      <div className="col-span-12 md:col-span-7 flex flex-col items-end space-y-4">
        <div className="border-2 border-red p-4 w-full rounded-2xl space-y-2 md:space-y-4">
          <div className="grid grid-cols-12 text-gray-600 space-y-2 md:space-y-4">
            <div className="col-span-12 lg:col-span-4">
              <h3 className="font-bold">Local</h3>
              <p>
                Rua Limeira, 1244, Cândido Bertine, Santa Bárbara d’Oeste/SP
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <h3 className="font-bold">Funcionamento</h3>
              <p>Segunda a sexta, das 9h as 17h</p>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <h3 className="font-bold">Telefone</h3>
              <Link href="https://wa.me/5519992753375">(19) 99275-337</Link>
            </div>
          </div>
          <div className="grid grid-cols-12 space-y-2 md:space-y-4">
            <div className="col-span-12 lg:col-span-4">
              <h3 className="font-bold">E-mail</h3>
              <Link href="mailto:radv.contato@gmail.com">
                radv.contato@gmail.com
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <h3 className="font-bold">Instagram</h3>
              <Link href="https://instagram/@advocaciaribeiro_">
                @advocaciaribeiro_
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <h3 className="font-bold">Facebook</h3>
              <Link href="https://facebook.com/advribeiro">
                facebook.com/advribeiro
              </Link>
            </div>
          </div>
        </div>
        <a>
          <Image src={logo} alt="Logo" className="w-32" />
        </a>
      </div>
      <div className="col-span-12 border border-gray-900/30"></div>
      <div className="col-span-12 text-center text-gray-600">
        <span className="font-bold">©2025</span> Todos os Direitos Reservados
        por Ribeiro Advocacia . Desenvolvido por{" "}
        <a className="underline" href="https://www.williamcolognesi.com/">
          Wcolognesi
        </a>
      </div>
    </section>
  )
}
