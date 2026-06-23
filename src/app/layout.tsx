import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinterra — Vinos de calidad",
  description: "Descubrí los mejores vinos argentinos. Compra online con envío a todo el país.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-stone-50 text-stone-900 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-stone-900 text-stone-400 text-center text-sm py-8 mt-16">
          © 2024 Vinterra · Todos los derechos reservados
        </footer>
      </body>
    </html>
  );
}
