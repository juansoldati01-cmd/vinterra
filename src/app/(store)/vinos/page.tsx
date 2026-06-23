import { client } from "@/../sanity/lib/client";
import { VINOS_QUERY } from "@/../sanity/lib/queries";
import FiltroVinos from "@/components/vinos/FiltroVinos";
import type { Vino } from "@/types";

export const dynamic = "force-dynamic";

export default async function VinesPage() {
  const vinos: Vino[] = await client.fetch(VINOS_QUERY);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Catálogo de Vinos</h1>
      <p className="text-stone-500 mb-8">{vinos.length} vinos disponibles</p>
      <FiltroVinos vinos={vinos} />
    </div>
  );
}
