"use client";
import Image from "next/image";
import Link from "next/link";
import { useCarrito } from "@/store/carritoStore";
import { urlForImage } from "@/../sanity/lib/image";
import type { Vino } from "@/types";
import { ShoppingCart } from "lucide-react";

const TIPO_LABEL: Record<string, string> = {
  tinto: "🍷 Tinto",
  blanco: "🥂 Blanco",
  rosado: "🌸 Rosado",
  espumante: "✨ Espumante",
};

export default function VinoCard({ vino }: { vino: Vino }) {
  const agregar = useCarrito((s) => s.agregar);

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow overflow-hidden group">
      <Link href={`/vinos/${vino.slug.current}`}>
        <div className="relative h-56 bg-stone-100 overflow-hidden">
          {vino.imagen ? (
            <Image
              src={urlForImage(vino.imagen).width(400).height(300).url()}
              alt={vino.nombre}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-5xl">🍷</div>
          )}
        </div>
        <div className="p-4">
          <span className="text-xs text-stone-500 font-medium">{TIPO_LABEL[vino.tipo] ?? vino.tipo}</span>
          <h3 className="font-bold text-stone-800 mt-1 line-clamp-2">{vino.nombre}</h3>
          <p className="text-stone-500 text-sm mt-1">{vino.bodega} · {vino.anada}</p>
          <p className="text-amber-700 font-bold text-lg mt-2">
            ${vino.precio.toLocaleString("es-AR")}
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button
          onClick={() => agregar(vino)}
          disabled={vino.stock === 0}
          className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-700 disabled:bg-stone-300 text-white py-2 rounded-xl text-sm font-medium transition-colors"
        >
          <ShoppingCart size={16} />
          {vino.stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
}
