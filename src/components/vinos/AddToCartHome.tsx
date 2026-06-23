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
  const [agregado, setAgregado] = useState(false);

  const handleAgregar = () => {
    agregar({
      _id: vino.id,
      nombre: `${vino.nombre} ${vino.subtitulo}`,
      slug: { current: vino.slug },
      descripcion: "",
      precio: vino.precio,
      imagen: { asset: { _ref: vino.imagen } },
      tipo: "tinto",
      bodega: "Chakana",
      varietal: "",
      anada: 2022,
      stock: 99,
    });
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1800);
  };

  return (
    <button
      onClick={handleAgregar}
      className="w-full border border-stone-900 text-stone-900 text-xs tracking-widest uppercase py-3 hover:bg-stone-900 hover:text-[#f5f0e8] transition-colors"
    >
      {agregado ? "✓ Agregado" : "Agregar al carrito"}
    </button>
  );
}
