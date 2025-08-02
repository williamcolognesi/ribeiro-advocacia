export function Hero() {
  return (
    <section
      className="relative px-8 md:px-64 min-h-[calc(100dvh)] grid items-center "
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative grid grid-cols-12">
        <div className="col-span-12 md:col-span-7 space-y-2 text-white text-center md:text-left">
          <p className="text-xs tracking-wider uppercase">
            LOREM | IPSUM | DOMET
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Dictum egestas ante sit nibh morbi
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Nisl netus et metus vulputate urna proin urna aliquam sapien
            interdum adipiscing eget eget cursus sagittis faucibus lectus diam
            in quam facilisis ac diam.
          </p>
        </div>
      </div>
    </section>
  )
}
