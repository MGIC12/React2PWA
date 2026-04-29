import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ComponentCard({ item }) {
  return (
    
    <navlink to={`/items/${item.id}`}
    >
        <div
        className="w-[280px] bg-[#0c0c14] border border-[#1e1e30] rounded-sm overflow-hidden cursor-pointer transition-all duration-250 hover:border-[#00e5ff] hover:-translate-y-1"
        style={{ fontFamily: "'Syne', sans-serif" }}
        >
        <div className="relative w-full h-[150px] bg-[#0a0a12] border-b border-[#1e1e30] flex items-center justify-center">
            <img
            src={item.image}
            alt={item.name}
            className="max-w-[80%] max-h-[110px] object-contain"
            style={{ filter: "drop-shadow(0 0 12px rgba(0,229,255,0.15))" }}
            />
            <span
            className="absolute top-2.5 left-2.5 text-[#00e5ff] border border-[#00e5ff]/25 bg-[#00e5ff]/8 px-2 py-0.5 rounded-sm uppercase tracking-[0.12em] text-[0.62rem]"
            style={{ fontFamily: "'Space Mono', monospace", background: "rgba(0,229,255,0.08)" }}
            >
            {item.category}
            </span>
        </div>
    
        {/* BODY */}
        <div className="px-5 pt-4 pb-4">
    
            {/* CATEGORY LABEL */}
            <p
            className="text-[#5a5a78] uppercase tracking-[0.18em] text-[0.62rem] mb-1.5"
            style={{ fontFamily: "'Space Mono', monospace" }}
            >
            {item.category}
            </p>
    
            {/* NAME */}
            <h3 className="text-[#e8e8f0] font-bold text-[0.95rem] leading-snug tracking-tight mb-2">
            {item.name}
            </h3>
    
            {/* DESCRIPTION */}
            <p className="text-[#5a5a78] text-[0.78rem] leading-relaxed mb-4">
            {item.shortDescription}
            </p>
    
            {/* FOOTER */}
            <div className="flex items-center justify-between border-t border-[#1e1e30] pt-3.5">
    
            {/* PRICE */}
            <span
                className="text-[#00e5ff] font-bold text-[1.1rem] tracking-tight"
                style={{ fontFamily: "'Space Mono', monospace" }}
            >
                ${item.price}
            </span>
    
            {/* BUTTON */}
            <button
                className="bg-transparent border border-[#1e1e30] text-[#5a5a78] text-[0.72rem] uppercase tracking-[0.08em] px-3 py-1.5 rounded-sm transition-all duration-200 hover:border-[#00e5ff] hover:text-[#00e5ff] cursor-pointer"
                style={{ fontFamily: "'Syne', sans-serif" }}
            >
                Ver specs
            </button>
    
            </div>
        </div>
        </div>
    </navlink>
  );
}
