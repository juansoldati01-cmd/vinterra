import { client } from "@/../sanity/lib/client";
import { VINO_BY_SLUG_QUERY } from "@/../sanity/lib/queries";
import { urlForImage } from "@/../sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Vino } from "@/types";
import AgregarCarritoBtn from "@/components/vinos/AgregarCarritoBtn";

export const dynamic = "force-dynamic";

export default async function VinoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vino: Vino | null = await client.fetch(VINO_BY_SLUG_QUERY, { slug });

  if (!vino) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100">
          {vino.imagen ? (
            <Image
              src={urlForImage(vino.imagen).width(600).height(600).url()}
              alt={vino.nombre}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-8xl">🍷</div>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-amber-600 text-sm font-semibold capitalize">{vino.tipo}</span>
          <h1 className="text-3xl font-bold text-stone-900 mt-2 mb-1">{vino.nombre}</h1>
          <p className="text-stone-500 mb-4">{vino.bodega} · {vino.varietal} · {vino.anada}</p>
          {vino.descripcion && (
            <p className="text-stone-600 leading-relaxed mb-6">{vino.descripcion}</p>
          )}
          <p className="text-3xl font-bold text-stone-900 mb-2">
            ${vino.precio.toLocaleString("es-AR")}
          </p>
          <p className="text-sm text-stone-400 mb-6">
            {vino.stock > 0 ? `${vino.stock} unidades disponibles` : "Sin stock"}
          </p>
          <AgregarCarritoBtn vino={vino} />
        </div>
      </div>
    </div>
  );
}
