import React, { useState } from "react";
import Navegacion from "../Navegacion/Navegacion";
import { useTranslation } from 'react-i18next';

export default function Header() {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
    };

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#050508]/90 backdrop-blur-md"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <nav className="mx-auto flex justify-between items-center px-6 md:px-10 py-5">
        <a
          href="/"
          className="text-xl font-extrabold tracking-[0.15em] text-white no-underline relative z-50"
        >
          NEX<span className="text-[#00e5ff]">US</span>
        </a>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="md:hidden text-white hover:text-[#00e5ff] focus:outline-none relative z-50 transition-colors"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {isMenuOpen ? (
            // Icono de "X"
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-6">
            <Navegacion direccion="/" label={t('nav.home')} />
            <Navegacion direccion="/favoritos" label={t('nav.favorites')} />
            <Navegacion direccion="/contacto" label={t('nav.contact')} />
            <Navegacion direccion="/acerca" label={t('nav.about')} />
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => cambiarIdioma('es')}
              className="text-xl font-bold text-white/80 hover:text-white transition-colors"
            > 
              ES
            </button> 
            <p className="text-xl font-bold text-white/80">/</p>
            <button 
              onClick={() => cambiarIdioma('en')}
              className="text-xl font-bold text-white/80 hover:text-white transition-colors"
            >
              EN
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-[#050508]/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="flex flex-col items-center gap-8 text-2xl"
          onClick={toggleMenu}
        >
          <Navegacion direccion="/" label={t('nav.home')} />
          <Navegacion direccion="/favoritos" label={t('nav.favorites')} />
          <Navegacion direccion="/contacto" label={t('nav.contact')} />
          <Navegacion direccion="/acerca" label={t('nav.about')} />
        </div>
        <div className="flex items-center gap-4 mt-8 border-t border-white/10 pt-8 w-1/2 justify-center">
          <button 
          onClick={() => cambiarIdioma('es')}
          className="text-2xl font-bold text-white/80 hover:text-[#00e5ff] transition-colors">
            ES
          </button>
          <p className="text-2xl font-bold text-white/80">/</p>
          <button 
          onClick={() => cambiarIdioma('en')}
          className="text-2xl font-bold text-white/80 hover:text-[#00e5ff] transition-colors">
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
