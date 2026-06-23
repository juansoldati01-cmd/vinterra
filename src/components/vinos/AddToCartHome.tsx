"use client";
import { useCarrito } from "@/store/carritoStore";
import { useState } from "react";

interface VinoSimple {
  id: string;
  nombre: string;
  subtitulo: string;
  precio: number;
  imagen: string;
  slug: string;
}

export default function AddToCartHome({ vino }: { vino: VinoSimple }) {
  const agregar = useCarrito((s) => s.agregar);
  const cambiarCantidad = useCarrito((s) => s.cambiarCantidad);
  const items = useCarrito((s) => s.items);
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const enCarrito = items.find((i) => i.vino._id === vino.id);

  const handleAgregar = () => {
    const vinoData = {
      _id: vino.id,
      nombre: `${vino.nombre} ${vino.subtitulo}`,
      slug: { current: vino.slug },
      descripcion: "",
      precio: vino.precio,
      imagen: { asset: { _ref: vino.imagen } },
      tipo: "tinto" as const,
      bodega: "Chakana",
      varietal: "",
      anada: 2022,
      stock: 99,
    };
    agregar(vinoData);
    if (enCarrito) {
      cambiarCantidad(vino.id, cantidad);
    } else {
      for (let i = 1; i < cantidad; i++) agregar(vinoData);
    }
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1800);
  };

  return (
    <div className="flex items-stretch w-full border-t border-stone-400">
      {/* Selector cantidad */}
      <div className="flex items-center border-r border-stone-400">
        <button
          onClick={() => setCantidad((c) => Math.max(1, c - 1))}
          className="px-3 py-3 text-stone-500 hover:text-stone-900 transition-colors text-sm"
        >−</button>
        <span className="w-6 text-center text-sm font-medium text-stone-800">{cantidad}</span>
        <button
          onClick={() => setCantidad((c) => Math.min(10, c + 1))}
          className="px-3 py-3 text-stone-500 hover:text-stone-900 transition-colors text-sm"
        >+</button>
      </div>
      {/* Botón agregar */}
      <button
        onClick={handleAgregar}
        className="flex-1 py-3 px-4 text-[10px] tracking-widest uppercase text-stone-600 hover:bg-stone-900 hover:text-[#ede8de] transition-colors"
      >
        {agregado ? "✓ Agregado" : "Agregar al carrito"}
      </button>
    </div>
  );
}
