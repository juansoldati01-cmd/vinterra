import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ede8de]">

      {/* Hero con imagen */}
      <section className="relative w-full h-[70vh] overflow-hidden border-b border-stone-400">
        <Image
          src="/Gemini_Generated_Image_isza3zisza3zisza.png"
          alt="Vinos naturales en viñedo"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
          <p className="text-xs tracking-widest uppercase text-white/70 mb-3">Vinos naturales · Argentina</p>
          <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight tracking-tight max-w-lg">
            Elaborados con<br />
            <em className="italic">mínima intervención</em>
          </h1>
          <Link
            href="/vinos"
            className="mt-8 inline-block border border-white text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-stone-900 transition-colors w-fit"
          >
            Ver vinos →
          </Link>
        </div>
      </section>

      {/* Ticker marquee */}
      <div className="border-b border-stone-400 py-3 overflow-hidden bg-[#ede8de]">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="text-[11px] tracking-[0.25em] uppercase text-stone-500 inline-block">
              &nbsp;· Vinos naturales · Agricultura biodinámica · Mínima intervención · Envío a todo el país · 40% de descuento · Chakana Wines · Argentina ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Sección editorial con imagen */}
      <div className="max-w-7xl mx-auto border-b border-stone-400">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[500px] md:h-auto border-b md:border-b-0 md:border-r border-stone-400">
            <Image
              src="/Gemini_Generated_Image_yl66l8yl66l8yl66.jpg"
              alt="Botella Nuna Chakana"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="px-10 py-16 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-6">Nuestra filosofía</p>
              <p className="font-serif text-stone-700 text-sm leading-loose">
                La propuesta de vinos que ofrecemos es sin duda la del vino "natural". Consideramos que es un término demasiado amplio, pero situamos en ese universo a los vinos elaborados con la mínima intervención posible de sulfuros y con un trabajo respetuoso en el viñedo.
              </p>
              <p className="font-serif text-stone-700 text-sm leading-loose mt-4">
                Sus vitivinicultores acompañan la fermentación facilitando su máxima expresión. Son proyectos donde el viticultor cierra el círculo natural al completo, de principio a fin.
              </p>
            </div>
            <div className="mt-12">
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-3">Envío y entrega</p>
              <p className="font-serif text-stone-600 text-sm leading-loose">
                Despachamos en caja especial para vinos. 24-48hs en CABA y GBA, 3-5 días al interior del país.
              </p>
              <div className="mt-6 text-xs tracking-widest uppercase text-stone-400">
                <p>Medios de pago · Todas las tarjetas · MercadoPago · Cuotas sin interés</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
