"use client";
import Image from "next/image";
import { useState } from "react";
import AddToCartHome from "@/components/vinos/AddToCartHome";

const VINOS = [
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
  { label: "Nuna Dèmeter Red Blend", value: "nuna-red-blend" },
  { label: "Estate Selection", value: "estate-selection" },
  { label: "Nuna Dèmeter White Blend", value: "nuna-white-blend" },
];

function descuento(precio: number) {
  return Math.round(precio * 0.6);
}

export default function VinosPage() {
  const [filtro, setFiltro] = useState("todos");

  const vinosFiltrados = filtro === "todos"
    ? VINOS
    : VINOS.filter((v) => v.id === filtro);

  return (
    <div className="min-h-screen bg-[#ede8de]">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6 border-b border-stone-400">
        <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Chakana Wines · Argentina</p>
        <h1 className="text-3xl md:text-4xl font-serif text-stone-900">Catálogo de Vinos</h1>
      </div>

      {/* Viñetas / filtros */}
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

      {/* Grid de vinos */}
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 divide-y border-b border-stone-400 ${vinosFiltrados.length > 1 ? "md:grid-cols-3 md:divide-y-0 md:divide-x divide-stone-400" : "md:grid-cols-1"}`}>
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

                <div className={`flex flex-col flex-1 ${vinosFiltrados.length === 1 ? "md:flex-row" : ""}`}>
                  {/* Botella */}
                  <div className={`relative bg-[#e8e2d6] flex items-end justify-center px-8 pt-10 ${vinosFiltrados.length === 1 ? "md:w-1/2 md:h-[500px]" : ""}`} style={vinosFiltrados.length > 1 ? { height: "380px" } : { height: "420px" }}>
                    <button className="absolute top-4 right-4 text-stone-300 hover:text-stone-600 transition-colors text-lg">♡</button>
                    <Image
                      src={vino.imagen}
                      alt={`${vino.nombre} ${vino.subtitulo}`}
                      width={160}
                      height={340}
                      className={`object-contain w-auto group-hover:scale-105 transition-transform duration-500 ${vinosFiltrados.length === 1 ? "h-[420px]" : "h-[300px]"}`}
                      priority={i === 0}
                    />
                  </div>

                  {/* Info */}
                  <div className={`flex flex-col flex-1 ${vinosFiltrados.length === 1 ? "md:w-1/2 md:justify-center md:px-16 md:py-12" : ""}`}>
                    <div className="px-5 pt-5 pb-0 border-t border-stone-400">
                      <p className="font-serif text-stone-900 text-base leading-tight">{vino.nombre}</p>
                      <p className="font-serif italic text-stone-600 text-base leading-tight">{vino.subtitulo}</p>
                    </div>

                    {vinosFiltrados.length === 1 && (
                      <div className="px-5 pt-4">
                        <p className="text-sm text-stone-500 leading-relaxed">{vino.descripcion}</p>
                      </div>
                    )}

                    <div className="px-5 py-3 border-t border-stone-300 mt-4">
                      <span className="text-[10px] tracking-widest uppercase text-stone-400">{vino.formato}</span>
                    </div>

                    <div className="flex items-stretch border-t border-stone-400">
                      <div className="px-5 py-4 flex items-center gap-2">
                        <span className="text-stone-900 font-medium text-sm">${precio.toLocaleString("es-AR")}</span>
                        <span className="text-stone-400 line-through text-xs">${vino.precioOriginal.toLocaleString("es-AR")}</span>
                      </div>
                      <div className="ml-auto border-l border-stone-400">
                        <AddToCartHome vino={{ ...vino, precio }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
