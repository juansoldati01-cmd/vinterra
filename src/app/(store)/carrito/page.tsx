"use client";
import { useCarrito } from "@/store/carritoStore";
import Image from "next/image";
import Link from "next/link";

export default function CarritoPage() {
  const { items, quitar, cambiarCantidad, total, vaciar } = useCarrito();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#ede8de] flex flex-col items-center justify-center text-center px-6">
        <p className="text-xs tracking-widest uppercase text-stone-400 mb-6">Carrito vacío</p>
        <h1 className="text-3xl font-serif text-stone-800 mb-4">No agregaste vinos todavía</h1>
        <Link
          href="/vinos"
          className="mt-4 border border-stone-900 text-stone-900 text-xs tracking-widest uppercase px-6 py-3 hover:bg-stone-900 hover:text-[#ede8de] transition-colors"
        >
          Ver catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ede8de]">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="border-b border-stone-400 pb-6 mb-0 flex items-end justify-between">
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Vinterra</p>
            <h1 className="text-3xl font-serif text-stone-900">Tu carrito</h1>
          </div>
          <button
            onClick={vaciar}
            className="text-xs tracking-widest uppercase text-stone-400 hover:text-stone-700 transition-colors"
          >
            Vaciar todo
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-stone-400 border-b border-stone-400">

          {/* Items */}
          <div className="lg:col-span-2 divide-y divide-stone-300">
            {items.map(({ vino, cantidad }) => {
              const esImagenLocal = vino.imagen?.asset?._ref?.startsWith("/");
              const imgSrc = esImagenLocal
                ? vino.imagen.asset._ref
                : null;

              return (
                <div key={vino._id} className="flex gap-4 py-6 px-0 items-center">
                  {/* Imagen */}
                  <div className="relative w-20 h-24 bg-[#ede8de] shrink-0 flex items-center justify-center">
                    {imgSrc ? (
                      <Image src={imgSrc} alt={vino.nombre} width={80} height={96} className="object-contain h-full w-auto" />
                    ) : (
                      <span className="text-3xl">🍷</span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-stone-900 leading-tight">{vino.nombre}</p>
                    <p className="text-xs tracking-widest uppercase text-stone-400 mt-1">{vino.bodega}</p>
                    <p className="text-stone-700 text-sm mt-2 font-medium">${vino.precio.toLocaleString("es-AR")} c/u</p>
                  </div>

                  {/* Cantidad */}
                  <div className="flex items-center gap-0 border border-stone-400">
                    <button
                      onClick={() => cambiarCantidad(vino._id, cantidad - 1)}
                      className="px-3 py-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors text-sm"
                    >−</button>
                    <span className="w-8 text-center text-sm font-medium text-stone-800">{cantidad}</span>
                    <button
                      onClick={() => cambiarCantidad(vino._id, Math.min(10, cantidad + 1))}
                      className="px-3 py-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors text-sm"
                    >+</button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right min-w-[90px]">
                    <p className="font-medium text-stone-900 text-sm">${(vino.precio * cantidad).toLocaleString("es-AR")}</p>
                    <button
                      onClick={() => quitar(vino._id)}
                      className="text-[10px] tracking-widest uppercase text-stone-400 hover:text-red-500 transition-colors mt-1"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Resumen */}
          <div className="lg:pl-8 py-8 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-6">Resumen</p>

              {items.map(({ vino, cantidad }) => (
                <div key={vino._id} className="flex justify-between text-sm text-stone-600 mb-2">
                  <span className="truncate mr-2">{vino.nombre} ×{cantidad}</span>
                  <span className="shrink-0">${(vino.precio * cantidad).toLocaleString("es-AR")}</span>
                </div>
              ))}

              <div className="border-t border-stone-400 mt-4 pt-4 flex justify-between text-stone-500 text-sm">
                <span className="tracking-widest uppercase text-xs">Envío</span>
                <span className="text-stone-600">Gratis</span>
              </div>

              <div className="border-t border-stone-400 mt-4 pt-4 flex justify-between items-baseline">
                <span className="text-xs tracking-widest uppercase text-stone-500">Total</span>
                <span className="text-2xl font-serif text-stone-900">${total().toLocaleString("es-AR")}</span>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <Link
                href="/checkout"
                className="block w-full bg-stone-900 text-[#ede8de] text-xs tracking-widest uppercase py-4 text-center hover:bg-stone-700 transition-colors"
              >
                Ir a pagar
              </Link>
              <Link
                href="/vinos"
                className="block w-full border border-stone-400 text-stone-500 text-xs tracking-widest uppercase py-3 text-center hover:border-stone-700 hover:text-stone-800 transition-colors"
              >
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
