"use client";
import Link from "next/link";
import { useCarrito } from "@/store/carritoStore";

export default function Navbar() {
  const cantidadTotal = useCarrito((s) => s.cantidadTotal);

  return (
    <nav className="w-full border-b border-stone-300 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-xs tracking-widest uppercase font-medium text-stone-700">
        <div className="flex items-center gap-8">
          <Link href="/" className="hover:text-stone-900 transition-colors">Inicio</Link>
          <Link href="/vinos" className="hover:text-stone-900 transition-colors">Vinos</Link>
        </div>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-sm tracking-[0.3em] uppercase font-semibold text-stone-900">
          Vinterra
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/carrito" className="relative hover:text-stone-900 transition-colors flex items-center gap-1">
            Carrito
            {cantidadTotal() > 0 && (
              <span className="bg-stone-900 text-[#f5f0e8] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cantidadTotal()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
