import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-baskerville" });

export const metadata: Metadata = {
  title: "Vinterra — Vinos Naturales",
  description: "Selección de vinos naturales y biodinámicos. Elaborados con mínima intervención. Envío a todo el país.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${baskerville.variable}`}>
      <body className="font-[var(--font-inter)] bg-[#f5f0e8] text-stone-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-stone-300 py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase text-stone-400">
            <span>Vinterra · Vinos Naturales</span>
            <span>© 2024 · Todos los derechos reservados</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
