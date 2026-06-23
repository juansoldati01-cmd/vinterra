import { NextRequest, NextResponse } from "next/server";
import type { ItemCarrito } from "@/types";

export async function POST(req: NextRequest) {
  const { items, cliente } = await req.json() as {
    items: ItemCarrito[];
    total: number;
    cliente: { nombre: string; email: string; telefono: string; direccion: string };
  };

  const accessToken = process.env.MP_ACCESS_TOKEN;
  if (!accessToken) {
    return NextResponse.json({ error: "MercadoPago no configurado" }, { status: 500 });
  }

  const preference = {
    items: items.map(({ vino, cantidad }) => ({
      id: vino._id,
      title: vino.nombre,
      quantity: cantidad,
      unit_price: vino.precio,
      currency_id: "ARS",
    })),
    payer: {
      name: cliente.nombre,
      email: cliente.email,
      phone: { number: cliente.telefono },
    },
    back_urls: {
      success: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/exito`,
      failure: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/error`,
      pending: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/pendiente`,
    },
    auto_return: "approved",
  };

  const res = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(preference),
  });

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json({ error: err }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json({ init_point: data.init_point });
}
