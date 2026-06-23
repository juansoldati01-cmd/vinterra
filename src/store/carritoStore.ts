import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ItemCarrito, Vino } from "@/types";

interface CarritoStore {
  items: ItemCarrito[];
  agregar: (vino: Vino) => void;
  quitar: (vinoId: string) => void;
  cambiarCantidad: (vinoId: string, cantidad: number) => void;
  vaciar: () => void;
  total: () => number;
  cantidadTotal: () => number;
}

export const useCarrito = create<CarritoStore>()(
  persist(
    (set, get) => ({
      items: [],
      agregar: (vino) => {
        const items = get().items;
        const existente = items.find((i) => i.vino._id === vino._id);
        if (existente) {
          set({ items: items.map((i) => i.vino._id === vino._id ? { ...i, cantidad: i.cantidad + 1 } : i) });
        } else {
          set({ items: [...items, { vino, cantidad: 1 }] });
        }
      },
      quitar: (vinoId) => set({ items: get().items.filter((i) => i.vino._id !== vinoId) }),
      cambiarCantidad: (vinoId, cantidad) => {
        if (cantidad < 1) return get().quitar(vinoId);
        set({ items: get().items.map((i) => i.vino._id === vinoId ? { ...i, cantidad } : i) });
      },
      vaciar: () => set({ items: [] }),
      total: () => get().items.reduce((acc, i) => acc + i.vino.precio * i.cantidad, 0),
      cantidadTotal: () => get().items.reduce((acc, i) => acc + i.cantidad, 0),
    }),
    { name: "vinterra-carrito" }
  )
);
