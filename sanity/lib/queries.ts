export const VINOS_QUERY = `*[_type == "vino"] | order(_createdAt desc) {
  _id, nombre, slug, precio, tipo, bodega, varietal, anada, stock,
  imagen { asset { _ref } }
}`;

export const VINO_BY_SLUG_QUERY = `*[_type == "vino" && slug.current == $slug][0] {
  _id, nombre, slug, descripcion, precio, tipo, bodega, varietal, anada, stock,
  imagen { asset { _ref } }
}`;
