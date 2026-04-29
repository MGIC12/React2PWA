import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t border-white/10 bg-[#050508] py-12"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Columna Izquierda: Logo NEXUS y Bio */}
          <div className="flex flex-col">
            <Link
              to="/"
              className="mb-4 text-2xl font-extrabold tracking-[0.15em] text-white no-underline w-fit"
            >
              NEX<span className="text-[#00e5ff]">US</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              El catálogo definitivo de hardware de alto rendimiento. Construye
              tu setup, guarda tus favoritos y domina el juego.
            </p>
          </div>

          {/* Columna Central: Navegación Rápida */}
          <div className="flex flex-col md:items-center">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6 border-b border-[#00e5ff]/30 pb-2 inline-block">
              Navegación
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-white/60 hover:text-[#00e5ff] transition-colors duration-300 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/favoritos"
                className="text-white/60 hover:text-[#00e5ff] transition-colors duration-300 text-sm font-medium"
              >
                Favoritos
              </Link>
              <Link
                to="/contacto"
                className="text-white/60 hover:text-[#00e5ff] transition-colors duration-300 text-sm font-medium"
              >
                Contacto
              </Link>
              <Link
                to="/acerca"
                className="text-white/60 hover:text-[#00e5ff] transition-colors duration-300 text-sm font-medium"
              >
                Acerca de
              </Link>
            </nav>
          </div>

          {/* Columna Derecha: Redes y Contacto */}
          <div className="flex flex-col md:items-end text-left md:text-right">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6 border-b border-[#00e5ff]/30 pb-2 inline-block">
              Sistemas Online
            </h3>

            {/* CONTENEDOR DE ÍCONOS */}
            <div className="flex gap-5 mb-6">
              <Link
                to="#"
                className="text-white/60 hover:text-[#00e5ff] transition-colors duration-300"
                aria-label="Twitter/X"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                to="#"
                className="text-white/60 hover:text-[#00e5ff] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="#"
                className="text-white/60 hover:text-[#00e5ff] transition-colors duration-300"
                aria-label="Discord"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 127.14 96.36"
                  aria-hidden="true"
                >
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.1,46,96,53,91.08,65.69,84.69,65.69Z" />
                </svg>
              </Link>
            </div>

            <p className="text-white/40 text-xs">
              Soporte Técnico: support@nexus.com
            </p>
          </div>
        </div>

        {/* Línea Divisoria Inferior y Copyright */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs tracking-wider">
            © 2026 NEXUS HARDWARE.
          </p>
          <p className="text-[#00e5ff]/50 text-xs tracking-[0.2em] font-bold">
            BACINSTU V1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
