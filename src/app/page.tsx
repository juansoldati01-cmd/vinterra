import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-28 px-4 text-center">
        <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Bienvenido a</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Vinterra</h1>
        <p className="text-stone-300 text-lg max-w-xl mx-auto mb-10">
          Los mejores vinos argentinos, seleccionados para vos. Envío a todo el país.
        </p>
        <Link
          href="/vinos"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-3 rounded-full text-sm transition-colors"
        >
          Ver catálogo
        </Link>
      </section>

      {/* Por qué Vinterra */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-stone-800 mb-2">¿Por qué Vinterra?</h2>
        <p className="text-stone-500 mb-10">Elegimos cada botella con criterio y pasión.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { emoji: "🍷", titulo: "Selección curada", desc: "Cada vino es elegido por sommeliers certificados." },
            { emoji: "🚚", titulo: "Envío en 24-48hs", desc: "A todo el país con packaging especial para vinos." },
            { emoji: "🔒", titulo: "Pago seguro", desc: "MercadoPago con todas las tarjetas y cuotas sin interés." },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
              <span className="text-4xl">{item.emoji}</span>
              <h3 className="font-bold text-stone-800 mt-4 mb-2">{item.titulo}</h3>
              <p className="text-stone-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-50 border-t border-amber-100 py-16 text-center px-4">
        <h2 className="text-2xl font-bold text-stone-800 mb-4">Explorá nuestro catálogo completo</h2>
        <Link
          href="/vinos"
          className="inline-block bg-stone-900 hover:bg-stone-700 text-white font-bold px-8 py-3 rounded-full text-sm transition-colors"
        >
          Ver todos los vinos →
        </Link>
      </section>
    </>
  );
}
