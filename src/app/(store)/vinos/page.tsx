"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AddToCartHome from "@/components/vinos/AddToCartHome";

export const VINOS = [
  {
    id: "nuna-red-blend",
    nombre: "Nuna Dèmeter",
    subtitulo: "Red Blend 2022",
    categoria: "Tinto",
    formato: "Botella 750cc",
    descripcion: "Blend de uvas orgánicas de altura. Fermentación natural, sin correcciones. Expresión pura del terroir andino.",
    precioOriginal: 18500,
    imagen: "/vinos/nuna-redblend-cf8ea43bedbd3b4c8d17007601814600-1024-1024.webp",
    slug: "nuna-demeter-red-blend-2022",
  },
  {
    id: "estate-selection",
    nombre: "Estate Selection",
    subtitulo: "Blend 2020",
    categoria: "Tinto",
    formato: "Botella 750cc",
    descripcion: "Selección de parcelas propias. Elaborado con mínima intervención, taponado con corcho natural.",
    precioOriginal: 22000,
    imagen: "/vinos/estate-selection-red-blend-a3198872993c56fbfe17007527185627-1024-1024.webp",
    slug: "estate-selection-blend-2020",
  },
  {
    id: "nuna-white-blend",
    nombre: "Nuna Dèmeter",
    subtitulo: "White Blend 2022",
    categoria: "Blanco",
    formato: "Botella 750cc",
    descripcion: "Blend blanco de agricultura biodinámica. Fresco, mineral y de larga persistencia en boca.",
    precioOriginal: 18500,
    imagen: "/vinos/nuna-white-blend-e80517ab515b4d5efe17007601597015-1024-1024.webp",
    slug: "nuna-demeter-white-blend-2022",
  },
];

const FILTROS = [
  { label: "Todos los vinos", value: "todos" },
  { label: "Tintos", value: "Tinto" },
  { label: "Blancos", value: "Blanco" },
];

function descuento(precio: number) {
  return Math.round(precio * 0.6);
}

export default function VinosPage() {
  const [filtro, setFiltro] = useState("todos");

  const vinosFiltrados = filtro === "todos"
    ? VINOS
    : VINOS.filter((v) => v.categoria === filtro);

  return (
    <div className="min-h-screen bg-[#ede8de]">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6 border-b border-stone-400">
        <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Chakana Wines · Argentina</p>
        <h1 className="text-3xl md:text-4xl font-serif text-stone-900">Catálogo de Vinos</h1>
      </div>

      {/* Filtros */}
      <div className="max-w-7xl mx-auto px-6 py-5 border-b border-stone-400 flex flex-wrap gap-3">
        {FILTROS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFiltro(f.value)}
            className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
              filtro === f.value
                ? "border-stone-900 bg-stone-900 text-[#ede8de]"
                : "border-stone-400 text-stone-500 hover:border-stone-700 hover:text-stone-800"
            }`}
          >
            {f.label}
          </button>
        ))}
        <span className="ml-auto self-center text-xs text-stone-400 tracking-widest uppercase">
          40% descuento · Precio online
        </span>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 divide-y border-b border-stone-400 ${vinosFiltrados.length > 1 ? "md:grid-cols-3 md:divide-y-0 md:divide-x divide-stone-400" : ""}`}>
          {vinosFiltrados.map((vino, i) => {
            const precio = descuento(vino.precioOriginal);
            return (
              <div key={vino.id} className="group relative flex">
                {/* Texto vertical */}
                <div className="hidden md:flex items-center justify-center w-8 shrink-0 border-r border-stone-400">
                  <span
                    className="text-[9px] tracking-[0.2em] uppercase text-stone-400 whitespace-nowrap"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {vino.categoria} · Chakana Wines
                  </span>
                </div>

                <div className="flex flex-col flex-1">
                  {/* Botella — fondo igual a la página */}
                  <Link href={`/vinos/${vino.slug}`} className="relative bg-[#ede8de] flex items-end justify-center px-8 pt-10 cursor-pointer" style={{ height: "380px" }}>
                    <button className="absolute top-4 right-4 text-stone-300 hover:text-stone-600 transition-colors text-lg z-10">♡</button>
                    <Image
                      src={vino.imagen}
                      alt={`${vino.nombre} ${vino.subtitulo}`}
                      width={160}
                      height={340}
                      className="object-contain h-[300px] w-auto group-hover:scale-105 transition-transform duration-500"
                      priority={i === 0}
                    />
                  </Link>

                  {/* Info */}
                  <div className="px-5 pt-5 pb-0 border-t border-stone-400">
                    <Link href={`/vinos/${vino.slug}`} className="hover:opacity-70 transition-opacity">
                      <p className="font-serif text-stone-900 text-base leading-tight">{vino.nombre}</p>
                      <p className="font-serif italic text-stone-600 text-base leading-tight">{vino.subtitulo}</p>
                    </Link>
                  </div>

                  <div className="px-5 py-3 border-t border-stone-300 mt-4">
                    <span className="text-[10px] tracking-widest uppercase text-stone-400">{vino.formato}</span>
                  </div>

                  {/* Precio */}
                  <div className="px-5 py-3 flex items-center gap-2 border-t border-stone-400">
                    <span className="text-stone-900 font-medium text-sm">${precio.toLocaleString("es-AR")}</span>
                    <span className="text-stone-400 line-through text-xs">${vino.precioOriginal.toLocaleString("es-AR")}</span>
                    <span className="text-stone-400 text-xs">−40%</span>
                  </div>

                  {/* Selector cantidad + agregar */}
                  <AddToCartHome vino={{ ...vino, precio }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
