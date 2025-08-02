import Image from "next/image"
import image from "../../public/image.png"

export function Content() {
  return (
    <section className="px-8 md:px-64 md:py-20 grid grid-cols-12 space-y-8 md:space-x-8">
      <div className="col-span-12 md:col-span-3">
        <Image
          src={image}
          alt="Advogado sentado em escritorio de advocacia"
          className="w-full h-auto"
        />
      </div>
      <div className="col-span-12 md:col-span-9 flex justify-center items-center text-center md:text-left text-2xl">
        Ac dictum tellus blandit ultrices phasellus etiam id sed sit lectus sed
        condimentum nulla tincidu placerat nibh.Ac dictum tellus blandit
        ultrices phasellus etiam id sed sit lectus sed condimentum nulla tincidu
        placerat nibh. Ac dictum tellus blandit ultrices phasellus etiam id sed
        sit lectus sed condimentum nulla tincidu placerat nibh. Ac dictum tellus
        blandit ultrices phasellus etiam id sed sit lectus sed condimentum nulla
        tincidu placerat nibh. Ac dictum tellus blandit ultrices phasellus etiam
        id sed sit lectus sed condimentum nulla tincidu placerat nibh. Ac dictum
        tellus blandit ultrices phasellus etiam id sed sit lectus sed
        condimentum nulla tincidu placerat nibh.
      </div>
    </section>
  )
}
