import Image from "next/image";
import Link from "next/link";
import AddToCartHome from "@/components/vinos/AddToCartHome";

const VINOS = [
  {
    id: "nuna-red-blend",
    nombre: "Nuna Dèmeter",
    subtitulo: "Red Blend 2022",
    tipo: "Vino Tinto",
    descripcion: "Blend de uvas orgánicas de altura. Fermentación natural, sin correcciones. Expresión pura del terroir andino.",
    precioOriginal: 18500,
    imagen: "/vinos/nuna-redblend-cf8ea43bedbd3b4c8d17007601814600-1024-1024.webp",
    slug: "nuna-demeter-red-blend-2022",
    url: "https://chakanawines.com.ar/productos/nuna-demeter-web-red-blend-2022-6-x-750cc-tapon/",
  },
  {
    id: "estate-selection",
    nombre: "Estate Selection",
    subtitulo: "Blend 2020",
    tipo: "Vino Tinto",
    descripcion: "Selección de parcelas propias. Elaborado con mínima intervención, taponado con corcho natural.",
    precioOriginal: 22000,
    imagen: "/vinos/estate-selection-red-blend-a3198872993c56fbfe17007527185627-1024-1024.webp",
    slug: "estate-selection-blend-2020",
    url: "https://chakanawines.com.ar/productos/estate-selection-web-blend-2020-6-x-750cc-tapon/",
  },
  {
    id: "nuna-white-blend",
    nombre: "Nuna Dèmeter",
    subtitulo: "White Blend 2022",
    tipo: "Vino Blanco",
    descripcion: "Blend blanco de agricultura biodinámica. Fresco, mineral y de larga persistencia en boca.",
    precioOriginal: 18500,
    imagen: "/vinos/nuna-white-blend-e80517ab515b4d5efe17007601597015-1024-1024.webp",
    slug: "nuna-demeter-white-blend-2022",
    url: "https://chakanawines.com.ar/productos/nuna-demeter-web-white-blend-2022-6-x-750cc-tapon/",
  },
];

function precioConDescuento(precio: number) {
  return Math.round(precio * 0.6);
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">

      {/* Hero editorial */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-300 pb-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-500 mb-3">Vinos naturales · Argentina</p>
            <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight tracking-tight">
              Vinos elaborados<br />
              <em className="font-serif italic">con mínima intervención</em>
            </h1>
          </div>
          <p className="text-sm text-stone-500 max-w-xs leading-relaxed">
            Selección de vinos biodinámicos y naturales. Agricultura orgánica, fermentación espontánea.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="max-w-7xl mx-auto px-6 py-4 flex gap-6 text-xs tracking-widest uppercase text-stone-500 border-b border-stone-200">
        <button className="text-stone-900 border-b border-stone-900 pb-0.5">Todos</button>
        <button className="hover:text-stone-900 transition-colors">Tintos</button>
        <button className="hover:text-stone-900 transition-colors">Blancos</button>
        <span className="ml-auto text-stone-400">40% off · Precio especial online</span>
      </section>

      {/* Catálogo */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-x divide-stone-300 border border-stone-300">
          {VINOS.map((vino, i) => (
            <article key={vino.id} className="group flex flex-col">
              {/* Imagen */}
              <div className="relative bg-[#ede8df] overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={vino.imagen}
                  alt={`${vino.nombre} ${vino.subtitulo}`}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  priority={i === 0}
                />
                <span className="absolute top-4 left-4 text-xs tracking-widest uppercase text-stone-500 bg-[#f5f0e8]/80 px-2 py-1">
                  {vino.tipo}
                </span>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1 border-t border-stone-300">
                <div className="flex-1">
                  <h2 className="text-lg font-light tracking-wide text-stone-900">{vino.nombre}</h2>
                  <p className="text-sm text-stone-500 mb-3">{vino.subtitulo}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{vino.descripcion}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-xl font-light text-stone-900">
                      ${precioConDescuento(vino.precioOriginal).toLocaleString("es-AR")}
                    </span>
                    <span className="text-xs text-stone-400 line-through">
                      ${vino.precioOriginal.toLocaleString("es-AR")}
                    </span>
                    <span className="text-xs text-stone-500 ml-1">−40%</span>
                  </div>
                  <AddToCartHome vino={{ ...vino, precio: precioConDescuento(vino.precioOriginal) }} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sección texto editorial */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-stone-300">
        <div>
          <p className="text-xs tracking-widest uppercase text-stone-400 mb-4">Nuestra propuesta</p>
          <p className="text-stone-600 text-sm leading-loose max-w-md">
            La propuesta de vinos que ofrecemos es sin duda la del vino "natural". Consideramos que es un término demasiado amplio, pero situamos en ese universo a los vinos elaborados con la mínima intervención posible.
            <br /><br />
            Son vinos destinados a los que se les permite ser, como quieren ser. Los viticultores no buscan corregir aspectos, salvo que se requiera para no perder la cosecha.
          </p>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-xs tracking-widest uppercase text-stone-400 mb-4">Envío a todo el país</p>
          <p className="text-stone-600 text-sm leading-loose max-w-md">
            Despachamos en caja especial para vinos con embalaje protegido. Entrega en 24-48hs en CABA y GBA, 3-5 días al interior del país.
          </p>
          <Link
            href="/vinos"
            className="mt-8 inline-block border border-stone-900 text-stone-900 text-xs tracking-widest uppercase px-6 py-3 hover:bg-stone-900 hover:text-[#f5f0e8] transition-colors w-fit"
          >
            Ver catálogo completo
          </Link>
        </div>
      </section>

    </div>
  );
}
