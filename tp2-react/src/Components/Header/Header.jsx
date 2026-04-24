import React from "react";
import Navegacion from "../Navegacion/Navegacion";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#050508]/90 backdrop-blur-md"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <nav className="mx-auto flex items-center justify-between px-6 sm:px-10 py-5">
        
        
          <a href="/"
          className="text-xl font-extrabold tracking-[0.15em] text-white no-underline"
        >
          NEX<span className="text-[#00e5ff]">US</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-6">
            <Navegacion direccion="/" label="Home" />
            <Navegacion direccion="/favoritos" label="Favoritos" />
            <Navegacion direccion="/contacto" label="Contacto" />
            <Navegacion direccion="/acerca" label="Acerca de" />
          </div>

          <div className="flex items-center gap-2">
            <button className="text-xl font-bold text-white/80 hover:text-white">ES</button>
            <p className="text-xl font-bold text-white/80">/</p>
            <button className="text-xl font-bold text-white/80 hover:text-white">EN</button>
          </div>
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"}`}>
        <div className="flex flex-col px-6 py-4 gap-4">
          <Navegacion direccion="/" label="Home" />
          <Navegacion direccion="/favoritos" label="Favoritos" />
          <Navegacion direccion="/contacto" label="Contacto" />
          <Navegacion direccion="/acerca" label="Acerca de" />

          <div className="flex items-center gap-2 pt-2 border-t border-white/10">
            <button className="text-base font-bold text-white/80 hover:text-white">ES</button>
            <p className="text-base font-bold text-white/80">/</p>
            <button className="text-base font-bold text-white/80 hover:text-white">EN</button>
          </div>
        </div>
      </div>
    </header>
  );
}



// export default function Header() {
//   return (
//     <header
//       className="sticky top-0 z-50 border-b border-white/10 bg-[#050508]/90 backdrop-blur-md"
//       style={{ fontFamily: "'Syne', sans-serif" }}
//     >
//       <nav className="mx-auto flex justify-between px-10 py-5">
//         {/* LOGO */}
//         <a
//           href="/"
//           className="text-xl font-extrabold tracking-[0.15em] text-white no-underline"
//         >
//           NEX<span className="text-[#00e5ff]">US</span>
//         </a>
//         {/* NAV LINKS */}
//         <div className="flex items-center gap-10">
//           <div className="flex items-center gap-6">
//             <Navegacion direccion="/" label="Home" />
//             <Navegacion direccion="/favoritos" label="Favoritos" />
//             <Navegacion direccion="/contacto" label="Contacto" />
//             <Navegacion direccion="/acerca" label="Acerca de" />
//           </div>

//           <div className="flex items-center gap-2">
//             <button className="text-xl font-bold text-white/80 hover:text-white">
//               ES
//             </button>
//             <p className="text-xl font-bold text-white/80 hover:text-white">
//               /
//             </p>
//             <button className="text-xl font-bold text-white/80 hover:text-white">
//               EN
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
