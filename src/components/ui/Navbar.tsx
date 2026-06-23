"use client";
import Link from "next/link";
import { useCarrito } from "@/store/carritoStore";
import { ShoppingCart, Wine } from "lucide-react";

export default function Navbar() {
  const cantidadTotal = useCarrito((s) => s.cantidadTotal);

  return (
    <nav className="sticky top-0 z-50 bg-stone-900 text-stone-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-wide text-amber-400">
          <Wine size={24} />
          Vinterra
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/vinos" className="hover:text-amber-400 transition-colors">Vinos</Link>
          <Link href="/carrito" className="relative hover:text-amber-400 transition-colors">
            <ShoppingCart size={22} />
            {cantidadTotal() > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-stone-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cantidadTotal()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
