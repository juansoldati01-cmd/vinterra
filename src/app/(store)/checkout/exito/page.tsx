import Link from "next/link";

export default function ExitoPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <p className="text-6xl mb-6">🎉</p>
      <h1 className="text-2xl font-bold text-stone-800 mb-2">¡Pago exitoso!</h1>
      <p className="text-stone-500 mb-8">Gracias por tu compra. Te enviaremos un email con los detalles del pedido.</p>
      <Link href="/vinos" className="inline-block bg-stone-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-stone-700 transition-colors">
        Seguir comprando
      </Link>
    </div>
  );
}
