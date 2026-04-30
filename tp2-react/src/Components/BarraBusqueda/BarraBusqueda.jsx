import React, { useState } from "react";

export default function BarraBusqueda({ onSearch }) {
  const [query, setQuery] = useState("");

  const manejoSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query.trim());
    }
  };

  return (
    <form
      onSubmit={manejoSubmit}
      className="relative w-full mx-auto group"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg
          className="w-5 h-5 text-white/40 group-focus-within:text-[#00e5ff] transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Buscar por ID, nombre o categoría..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full h-14 pl-12 pr-28 bg-[#0c0c14] border border-[#1e1e30] text-white rounded-lg focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all placeholder:text-white/30 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
      />
      <button
        type="submit"
        className="absolute inset-y-2 right-2 px-4 bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 rounded-md text-xs font-bold tracking-widest uppercase hover:bg-[#00e5ff] hover:text-black transition-colors flex items-center"
      >
        Buscar
      </button>
    </form>
  );
}
