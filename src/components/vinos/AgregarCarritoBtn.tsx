"use client";
import { useCarrito } from "@/store/carritoStore";
import type { Vino } from "@/types";
import { ShoppingCart } from "lucide-react";

export default function AgregarCarritoBtn({ vino }: { vino: Vino }) {
  const agregar = useCarrito((s) => s.agregar);

  return (
    <button
      onClick={() => agregar(vino)}
      disabled={vino.stock === 0}
      className="flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-700 disabled:bg-stone-300 text-white py-3 px-6 rounded-xl font-medium transition-colors"
    >
      <ShoppingCart size={18} />
      {vino.stock === 0 ? "Sin stock" : "Agregar al carrito"}
    </button>
  );
}
