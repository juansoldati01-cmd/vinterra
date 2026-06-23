"use client";
import { useCarrito } from "@/store/carritoStore";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, total, vaciar } = useCarrito();
  const router = useRouter();
  const [cargando, setCargando] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", direccion: "" });

  if (items.length === 0) {
    router.replace("/carrito");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, total: total(), cliente: form }),
      });
      const data = await res.json();
      if (data.init_point) {
        vaciar();
        window.location.href = data.init_point;
      }
    } catch {
      alert("Error al procesar el pago. Intentá nuevamente.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-stone-800 mb-8">Checkout</h1>
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="font-bold text-stone-800 mb-4">Resumen del pedido</h2>
        {items.map(({ vino, cantidad }) => (
          <div key={vino._id} className="flex justify-between text-stone-600 text-sm py-1">
            <span>{vino.nombre} x{cantidad}</span>
            <span>${(vino.precio * cantidad).toLocaleString("es-AR")}</span>
          </div>
        ))}
        <div className="border-t border-stone-100 mt-4 pt-4 flex justify-between font-bold text-stone-900">
          <span>Total</span>
          <span>${total().toLocaleString("es-AR")}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="font-bold text-stone-800 mb-2">Datos de entrega</h2>
        {[
          { name: "nombre", label: "Nombre completo", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "telefono", label: "Teléfono", type: "tel" },
          { name: "direccion", label: "Dirección de entrega", type: "text" },
        ].map(({ name, label, type }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-stone-700 mb-1">{label}</label>
            <input
              type={type}
              required
              value={form[name as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [name]: e.target.value })}
              className="w-full border border-stone-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        ))}
        <button
          type="submit"
          disabled={cargando}
          className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-stone-900 font-bold py-3 rounded-xl transition-colors mt-2"
        >
          {cargando ? "Procesando..." : "Pagar con MercadoPago"}
        </button>
      </form>
    </div>
  );
}
