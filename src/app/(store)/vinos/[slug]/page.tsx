import Image from "next/image";
import { notFound } from "next/navigation";
import { VINOS } from "../page";
import AddToCartHome from "@/components/vinos/AddToCartHome";

function descuento(precio: number) {
  return Math.round(precio * 0.6);
}

export default async function VinoDetallePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vino = VINOS.find((v) => v.slug === slug);
  if (!vino) notFound();

  const precio = descuento(vino.precioOriginal);

  return (
    <div className="min-h-screen bg-[#ede8de]">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <p className="text-xs tracking-widest uppercase text-stone-400 mb-10">
          <a href="/vinos" className="hover:text-stone-700 transition-colors">Vinos</a>
          {" · "}
          <span>{vino.nombre}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone-400">
          {/* Botella */}
          <div className="relative bg-[#ede8de] flex items-center justify-center p-16 border-b md:border-b-0 md:border-r border-stone-400" style={{ minHeight: "520px" }}>
            <Image
              src={vino.imagen}
              alt={`${vino.nombre} ${vino.subtitulo}`}
              width={220}
              height={480}
              className="object-contain h-[420px] w-auto"
              priority
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between p-10">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-4">{vino.categoria} · Chakana Wines</p>
              <h1 className="text-4xl font-serif text-stone-900 leading-tight">{vino.nombre}</h1>
              <p className="text-2xl font-serif italic text-stone-600 mt-1 mb-6">{vino.subtitulo}</p>
              <p className="text-stone-600 text-sm leading-loose border-t border-stone-300 pt-6">{vino.descripcion}</p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-xs tracking-widest uppercase">
                <div>
                  <p className="text-stone-400 mb-1">Formato</p>
                  <p className="text-stone-700">{vino.formato}</p>
                </div>
                <div>
                  <p className="text-stone-400 mb-1">Categoría</p>
                  <p className="text-stone-700">{vino.categoria}</p>
                </div>
                <div>
                  <p className="text-stone-400 mb-1">Bodega</p>
                  <p className="text-stone-700">Chakana Wines</p>
                </div>
                <div>
                  <p className="text-stone-400 mb-1">País</p>
                  <p className="text-stone-700">Argentina</p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-stone-400 pt-6">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-light text-stone-900">${precio.toLocaleString("es-AR")}</span>
                <span className="text-stone-400 line-through text-sm">${vino.precioOriginal.toLocaleString("es-AR")}</span>
                <span className="text-stone-500 text-xs tracking-widest uppercase">−40% online</span>
              </div>
              <AddToCartHome vino={{ ...vino, precio }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
