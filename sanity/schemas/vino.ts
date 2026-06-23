import { defineField, defineType } from "sanity";

export const vinoSchema = defineType({
  name: "vino",
  title: "Vino",
  type: "document",
  fields: [
    defineField({ name: "nombre", title: "Nombre", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "nombre" }, validation: (r) => r.required() }),
    defineField({ name: "descripcion", title: "Descripción", type: "text" }),
    defineField({ name: "precio", title: "Precio (ARS)", type: "number", validation: (r) => r.required().positive() }),
    defineField({
      name: "tipo",
      title: "Tipo",
      type: "string",
      options: { list: ["tinto", "blanco", "rosado", "espumante"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "bodega", title: "Bodega", type: "string" }),
    defineField({ name: "varietal", title: "Varietal", type: "string" }),
    defineField({ name: "anada", title: "Añada", type: "number" }),
    defineField({ name: "stock", title: "Stock", type: "number", initialValue: 0 }),
    defineField({ name: "imagen", title: "Imagen", type: "image", options: { hotspot: true } }),
  ],
});
