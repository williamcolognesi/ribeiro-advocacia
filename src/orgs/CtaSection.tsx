import { TextButton } from "@/components/TextButton"
import Image from "next/image"
import image from "../../public/image.png"

export function CtaSection() {
  return (
    <section className="pt-8 md:pl-64 md:pt-20 space-y-8 md:space-x-8 bg-[#410B00]">
      <div className="grid grid-cols-12 space-x-8">
        <div className="col-span-5 text-white space-y-4">
          <h2 className="font-bold text-5xl">
            Nisl netus et metus vulputate urna proin urna aliquam
          </h2>
          <TextButton />
        </div>
        <div className="col-span-7">
          <Image src={image} alt="teste" className="w-full" />
        </div>
      </div>
    </section>
  )
}
