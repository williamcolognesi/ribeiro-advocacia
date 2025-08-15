"use client"

import { ArrowBigUp } from "lucide-react";

export function ButtonToTop() {

    const click = ()=>{
        window.scrollTo({top: 0, behavior: "smooth"});
    }

  return (
      <button onClick={click} className="fixed bottom-1 left-1 flex justify-center items-center w-12 h-12 bg-red text-white font-semibold rounded-full cursor-pointer transition-colors duration-300 hover:bg-danger-900">
        {<ArrowBigUp/>}
      </button>
  )
}
