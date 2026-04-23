import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ links = [], social = [] }) {
  // Datos por defecto si no se pasan como props
  const defaultLinks = links.length > 0 ? links : [
    { path: "/", label: "Inicio" },
    { path: "/favoritos", label: "Favoritos" },
  ];

  const defaultSocial = social.length > 0 ? social : [
    { url: "https://facebook.com", label: "Facebook", icon: "f" },
    { url: "https://twitter.com", label: "Twitter", icon: "𝕏" },
    { url: "https://instagram.com", label: "Instagram", icon: "📷" },
  ];

  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-white p-4 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Sección Izquierda - Info de la Empresa */}
          <div className="footer-left">
            <h3 className="text-xl font-bold mb-4">Todo Hardware</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Una aplicación web moderna que te permite explorar los mejores productos de hardware y guardar tus favoritos.
            </p>
            <p className="text-gray-500 text-xs mt-4">© 2026 TodoHardware. Todos los derechos reservados.</p>
          </div>

          {/* Sección Centro - Links de Navegación */}
          <div className="footer-center flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <nav className="space-y-2">
              {defaultLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  → {link.label} <br></br>
                </Link>
              ))}
            </nav>
          </div>

          {/* Sección Derecha - Redes Sociales y Contacto */}
          <div className="footer-right">
            <h4 className="text-lg font-semibold mb-4">Contactanos</h4>
            <div className="space-y-2 mb-6">
              {defaultSocial.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>

            {/* Información de Contacto */}
            <div className="border-t border-gray-700 pt-4 mt-4">
              <p className="text-gray-400 text-sm">
                <span className="block">📧 info@todohardware.com</span>
                <span className="block mt-1">📱 +54 11 5544-8880</span>
                <span className="block mt-1">📍 Martin Garcia 426 Ciudad de Buenos Aires, Argentina</span>
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="border-gray-700 my-8" />

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 text-xs">
          <p>Desarrollado como proyecto de Programación Web Avanzada</p>
          <p>BACINSTU</p>
        </div>
      </div>
    </footer>
  );
}