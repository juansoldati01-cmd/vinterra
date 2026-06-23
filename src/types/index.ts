export interface Vino {
  _id: string;
  nombre: string;
  slug: { current: string };
  descripcion: string;
  precio: number;
  imagen: { asset: { _ref: string } };
  tipo: "tinto" | "blanco" | "rosado" | "espumante";
  bodega: string;
  varietal: string;
  anada: number;
  stock: number;
}

export interface ItemCarrito {
  vino: Vino;
  cantidad: number;
}
