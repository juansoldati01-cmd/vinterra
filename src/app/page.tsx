import Image from "next/image";
import AddToCartHome from "@/components/vinos/AddToCartHome";

const VINOS = [
  {
    id: "nuna-red-blend",
    nombre: "Nuna Dèmeter",
    subtitulo: "Red Blend 2022",
    categoria: "Vino Natural",
    formato: "Botella 750cc",
    precioOriginal: 18500,
    imagen: "/vinos/nuna-redblend-cf8ea43bedbd3b4c8d17007601814600-1024-1024.webp",
    slug: "nuna-demeter-red-blend-2022",
  },
  {
    id: "estate-selection",
    nombre: "Estate Selection",
    subtitulo: "Blend 2020",
    categoria: "Vino Natural",
    formato: "Botella 750cc",
    precioOriginal: 22000,
    imagen: "/vinos/estate-selection-red-blend-a3198872993c56fbfe17007527185627-1024-1024.webp",
    slug: "estate-selection-blend-2020",
  },
  {
    id: "nuna-white-blend",
    nombre: "Nuna Dèmeter",
    subtitulo: "White Blend 2022",
    categoria: "Vino Natural",
    formato: "Botella 750cc",
    precioOriginal: 18500,
    imagen: "/vinos/nuna-white-blend-e80517ab515b4d5efe17007601597015-1024-1024.webp",
    slug: "nuna-demeter-white-blend-2022",
  },
];

function descuento(precio: number) {
  return Math.round(precio * 0.6);
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ede8de]">

      {/* Header sección */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6 flex items-end justify-between border-b border-stone-400">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight">Nuestros Vinos</h2>
        <p className="text-xs tracking-widest uppercase text-stone-500 pb-1">40% descuento · Precio online</p>
      </div>

      {/* Grid de vinos */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-400 border-b border-stone-400">
          {VINOS.map((vino) => {
            const precio = descuento(vino.precioOriginal);
            return (
              <div key={vino.id} className="group relative flex">
                {/* Texto vertical rotado */}
                <div className="hidden md:flex items-center justify-center w-8 shrink-0 border-r border-stone-400">
                  <span
                    className="text-[9px] tracking-[0.2em] uppercase text-stone-400 whitespace-nowrap"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {vino.categoria} · Chakana Wines
                  </span>
                </div>

                {/* Contenido */}
                <div className="flex flex-col flex-1">
                  {/* Botella */}
                  <div className="relative bg-[#e8e2d6] flex items-end justify-center px-8 pt-10" style={{ height: "380px" }}>
                    <button className="absolute top-4 right-4 text-stone-300 hover:text-stone-600 transition-colors text-lg">♡</button>
                    <Image
                      src={vino.imagen}
                      alt={`${vino.nombre} ${vino.subtitulo}`}
                      width={160}
                      height={340}
                      className="object-contain h-[320px] w-auto group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="px-5 pt-5 pb-0 border-t border-stone-400">
                    <p className="font-serif text-stone-900 text-base leading-tight">{vino.nombre}</p>
                    <p className="font-serif italic text-stone-700 text-base leading-tight">{vino.subtitulo}</p>
                  </div>

                  {/* Formato */}
                  <div className="px-5 py-3 border-t border-stone-300 mt-4">
                    <span className="text-[10px] tracking-widest uppercase text-stone-500">{vino.formato}</span>
                  </div>

                  {/* Precio + CTA */}
                  <div className="flex items-stretch border-t border-stone-400">
                    <div className="px-5 py-4 flex items-center gap-2">
                      <span className="text-stone-900 font-medium text-sm">${precio.toLocaleString("es-AR")}</span>
                      <span className="text-stone-400 line-through text-xs">${vino.precioOriginal.toLocaleString("es-AR")}</span>
                    </div>
                    <div className="ml-auto border-l border-stone-400">
                      <AddToCartHome vino={{ ...vino, precio }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ticker marquee */}
      <div className="border-t border-b border-stone-400 py-3 overflow-hidden bg-[#ede8de]">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="text-[11px] tracking-[0.25em] uppercase text-stone-500 inline-block">
              &nbsp;· Vinos naturales · Agricultura biodinámica · Mínima intervención · Envío a todo el país · 40% de descuento · Chakana Wines · Argentina ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Sección editorial inferior */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-stone-400">
        <div>
          <p className="text-xs tracking-widest uppercase text-stone-400 mb-6">Nuestra filosofía</p>
          <p className="font-serif text-stone-700 text-sm leading-loose">
            La propuesta de bebidas que acompaña a nuestra selección es sin duda la del vino "natural". Consideramos que es un término demasiado amplio, pero situamos en ese universo a los vinos elaborados con la mínima intervención posible de sulfuros y con un trabajo respetuoso en el viñedo.
          </p>
          <p className="font-serif text-stone-700 text-sm leading-loose mt-4">
            Sus vitivinicultores acompañan la fermentación facilitando su máxima expresión, y también cabe decir, que en la mayoría de los casos son proyectos donde el viticultor cierra el círculo natural al completo.
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-6">Envío y entrega</p>
            <p className="font-serif text-stone-700 text-sm leading-loose">
              Despachamos en caja especial para vinos con embalaje protegido. Entrega en 24-48hs en CABA y GBA, 3-5 días al interior del país.
            </p>
          </div>
          <div className="mt-8 text-xs tracking-widest uppercase text-stone-400">
            <p>Medios de pago</p>
            <p className="mt-1 text-stone-500">Todas las tarjetas · MercadoPago · Cuotas sin interés</p>
          </div>
        </div>
      </div>

    </div>
  );
}
