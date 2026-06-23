"use client";
import { useCarrito } from "@/store/carritoStore";
import { urlForImage } from "@/../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CarritoPage() {
  const { items, quitar, cambiarCantidad, total, vaciar } = useCarrito();

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <p className="text-5xl mb-6">🛒</p>
        <h1 className="text-2xl font-bold text-stone-800 mb-2">Tu carrito está vacío</h1>
        <p className="text-stone-500 mb-8">Agregá algunos vinos para comenzar.</p>
        <Link href="/vinos" className="inline-block bg-stone-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-stone-700 transition-colors">
          Ver catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-stone-800 mb-8">Tu carrito</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ vino, cantidad }) => (
            <div key={vino._id} className="bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                {vino.imagen ? (
                  <Image src={urlForImage(vino.imagen).width(160).height(160).url()} alt={vino.nombre} fill className="object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full text-2xl">🍷</div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-stone-800 truncate">{vino.nombre}</h3>
                <p className="text-stone-500 text-sm">{vino.bodega}</p>
                <p className="text-amber-700 font-bold">${vino.precio.toLocaleString("es-AR")}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => cambiarCantidad(vino._id, cantidad - 1)} className="p-1 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors">
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center font-medium">{cantidad}</span>
                <button onClick={() => cambiarCantidad(vino._id, cantidad + 1)} className="p-1 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors">
                  <Plus size={14} />
                </button>
              </div>
              <button onClick={() => quitar(vino._id)} className="p-2 text-stone-400 hover:text-red-500 transition-colors">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm h-fit sticky top-24">
          <h2 className="font-bold text-stone-800 text-lg mb-4">Resumen</h2>
          <div className="flex justify-between text-stone-600 mb-2">
            <span>Subtotal</span>
            <span>${total().toLocaleString("es-AR")}</span>
          </div>
          <div className="flex justify-between text-stone-600 mb-4">
            <span>Envío</span>
            <span className="text-green-600 font-medium">Gratis</span>
          </div>
          <div className="border-t border-stone-100 pt-4 flex justify-between font-bold text-stone-900 text-lg mb-6">
            <span>Total</span>
            <span>${total().toLocaleString("es-AR")}</span>
          </div>
          <Link
            href="/checkout"
            className="block w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-3 rounded-xl text-center transition-colors"
          >
            Ir a pagar
          </Link>
          <button onClick={vaciar} className="mt-3 w-full text-sm text-stone-400 hover:text-stone-600 transition-colors">
            Vaciar carrito
          </button>
        </div>
      </div>
    </div>
  );
}
