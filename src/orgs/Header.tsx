import Image from "next/image"
import { Button } from "@/components/Button"
import logo from "../../public/logo.png"
import { IconButton } from "@/components/IconButton"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Header() {
  return (
    <header className=" h-[80px] flex items-center w-full fixed top-0 z-50 bg-white/10 backdrop-blur-md">
      <nav className=" py-2 px-2 md:px-16 w-full flex justify-between items-center">
        <div>
          <a>
            <Image src={logo} alt="Logo" className="w-32" />
          </a>
        </div>
        <div className="flex space-x-4">
          <div className="flex space-x-2">
            <IconButton
              link="https://www.instagram.com/advocaciaribeiro_"
              icon={<Instagram />}
            />
            <Button outlined={false} color="#25D366">
              Converse agora
            </Button>
          </div>
          
        </div>
      </nav>
    </header>
  )
}
