import React, { useState, useRef, useContext } from "react";
import Navegacion from "../Navegacion/Navegacion";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const authContext = useContext(AuthContext);
  const user = authContext?.user ?? null;
  const logout = authContext?.logout ?? (() => {});
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const loginMenuTimeout = useRef(null);

  const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
    };

  const openLoginMenu = () => {
    if (loginMenuTimeout.current) {
      clearTimeout(loginMenuTimeout.current);
      loginMenuTimeout.current = null;
    }
    setIsLoginMenuOpen(true);
  };

  const closeLoginMenu = () => {
    if (loginMenuTimeout.current) {
      clearTimeout(loginMenuTimeout.current);
    }
    loginMenuTimeout.current = setTimeout(() => {
      setIsLoginMenuOpen(false);
      loginMenuTimeout.current = null;
    }, 200);
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
          {/* login */}
          {user ? (
            <div
              className="relative"
              onMouseEnter={openLoginMenu}
              onMouseLeave={closeLoginMenu}
            >
              <button
                type="button"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                aria-label={`Perfil de ${user.name}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
                </svg>
                <span>Hola, {user.name}</span>
              </button>
              <div
                className={`absolute right-0 mt-2 ${isLoginMenuOpen ? "flex" : "hidden"} min-w-[180px] flex-col gap-1 rounded-xl border border-white/10 bg-[#0b0c10]/95 p-3 text-left text-sm shadow-lg shadow-black/30 pointer-events-auto`}
              >
                <button
                  type="button"
                  onClick={logout}
                  className="rounded-lg px-3 py-2 text-left text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Cerrar sesión"
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          ) : (
          <div
            className="relative"
            onMouseEnter={openLoginMenu}
            onMouseLeave={closeLoginMenu}
          >
            <div className="w-0.5 h-6 bg-white/20 absolute left-0 top-1/2 -translate-y-1/2" />
            <div className="relative ml-4">
              <Link
                to="/iniciar-sesion"
                className="text-white/80 hover:text-white transition-colors duration-200 inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
                  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                </svg>
              </Link>
              <div className={`absolute right-0 mt-2 ${isLoginMenuOpen ? 'flex' : 'hidden'} min-w-[180px] flex-col gap-1 rounded-xl border border-white/10 bg-[#0b0c10]/95 p-3 text-left text-sm shadow-lg shadow-black/30 pointer-events-auto`}>
                <Link
                  to="/iniciar-sesion"
                  className="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  Iniciar sesión
                </Link>
                <Link
                  to="/registrarse"
                  className="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </div>)}
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
          {user ? (
            <Navegacion direccion="/favoritos" label={t('nav.favorites')} />
          ) : null}
          <Navegacion direccion="/contacto" label={t('nav.contact')} />
          <Navegacion direccion="/acerca" label={t('nav.about')} />
          <Navegacion direccion="/iniciar-sesion" label={t('nav.signin')} />
        </div>
        <div className="flex items-center gap-4 mt-8 border-t border-white/10 pt-8 w-1/2 justify-center">
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
