"use client";
import { useState } from "react";
import type { Vino } from "@/types";
import VinoCard from "./VinoCard";

const TIPOS = ["todos", "tinto", "blanco", "rosado", "espumante"] as const;

export default function FiltroVinos({ vinos }: { vinos: Vino[] }) {
  const [tipo, setTipo] = useState<string>("todos");
  const [busqueda, setBusqueda] = useState("");

  const filtrados = vinos.filter((v) => {
    const matchTipo = tipo === "todos" || v.tipo === tipo;
    const matchBusqueda =
      v.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      v.bodega?.toLowerCase().includes(busqueda.toLowerCase());
    return matchTipo && matchBusqueda;
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Buscar por nombre o bodega..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="flex-1 border border-stone-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <div className="flex gap-2 flex-wrap">
          {TIPOS.map((t) => (
            <button
              key={t}
              onClick={() => setTipo(t)}
              className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-colors ${
                tipo === t
                  ? "bg-stone-900 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      {filtrados.length === 0 ? (
        <p className="text-center text-stone-500 py-16">No se encontraron vinos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtrados.map((v) => <VinoCard key={v._id} vino={v} />)}
        </div>
      )}
    </>
  );
}
