import React, { useState } from "react";

export default function Tarjeta({ item }) {
  const [errorImagen, setErrorImagen] = useState(false);

  return (
    <div
      className="w-full h-full flex flex-col bg-[#0c0c14] border border-[#1e1e30] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:-translate-y-1 group"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="relative w-full h-48 sm:h-52 bg-[#0a0a12] border-b border-[#1e1e30] flex items-center justify-center p-4">
        {errorImagen ? (
          <div className="flex flex-col items-center justify-center text-[#5a5a78]">
            <svg
              className="w-10 h-10 opacity-50 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
              <line
                x1="3"
                y1="3"
                x2="21"
                y2="21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[0.65rem] font-bold tracking-widest uppercase">
              Sin Señal Visual
            </span>
          </div>
        ) : (
          <img
            src={item.image}
            alt={`Ficha técnica de ${item.name}`}
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
            style={{ filter: "drop-shadow(0 0 12px rgba(0,229,255,0.15))" }}
            onError={() => setErrorImagen(true)}
          />
        )}
        <span
          className="absolute top-3 left-3 text-[#00e5ff] border border-[#00e5ff]/25 px-2 py-1 rounded-sm uppercase tracking-[0.12em] text-[0.65rem] font-bold backdrop-blur-md"
          style={{
            fontFamily: "'Space Mono', monospace",
            background: "rgba(0,229,255,0.08)",
          }}
        >
          {item.category}
        </span>
      </div>
      <div className="flex flex-col grow px-5 pt-5 pb-5">
        <h3 className="text-white font-bold text-lg leading-snug tracking-tight mb-2 line-clamp-2 group-hover:text-[#00e5ff] transition-colors">
          {item.name}
        </h3>
        <p className="text-[#5a5a78] text-sm leading-relaxed mb-6 grow line-clamp-3">
          {item.shortDescription}
        </p>
        <div className="border-t border-[#1e1e30] pt-4 mt-auto">
          <button className="w-full bg-transparent border border-[#1e1e30] text-white/70 text-xs uppercase tracking-widest px-4 py-3 rounded-md transition-all duration-200 group-hover:border-[#00e5ff] group-hover:text-[#00e5ff] group-hover:bg-[#00e5ff]/10">
            Ver Ficha Técnica
          </button>
        </div>
      </div>
    </div>
  );
}
