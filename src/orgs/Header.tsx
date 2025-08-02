import Image from "next/image"
import { Button } from "@/components/Button"
import image from "../../public/image.png"

export function Header() {
  return (
    <header className=" h-[80px] flex items-center w-full fixed top-0 z-50 bg-white/10 backdrop-blur-md">
      <nav className=" py-2 px-16 md:px-64 w-full flex justify-between items-center">
        <div>
          <a>
            <Image src={image} alt="Logo" className="w-32" />
          </a>
        </div>
        <div>
          <Button>Converse no Whatsapp</Button>
        </div>
      </nav>
    </header>
  )
}
