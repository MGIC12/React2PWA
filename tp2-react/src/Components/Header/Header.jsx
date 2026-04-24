import React from "react";
import Navegacion from "../Navegacion/Navegacion";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#050508]/90 backdrop-blur-md"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <nav className="mx-auto flex justify-between px-10 py-5">
        {/* LOGO */}
        <a
          href="/"
          className="text-xl font-extrabold tracking-[0.15em] text-white no-underline"
        >
          NEX<span className="text-[#00e5ff]">US</span>
        </a>
        {/* NAV LINKS */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-6">
            <Navegacion direccion="/" label="Home" />
            <Navegacion direccion="/favoritos" label="Favoritos" />
            <Navegacion direccion="/contacto" label="Contacto" />
            <Navegacion direccion="/acerca" label="Acerca de" />
          </div>

          <div className="flex items-center gap-2">
            <button className="text-xl font-bold text-white/80 hover:text-white">
              ES
            </button>
            <p className="text-xl font-bold text-white/80 hover:text-white">
              /
            </p>
            <button className="text-xl font-bold text-white/80 hover:text-white">
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
