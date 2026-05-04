import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const CATEGORIES = [
  { id: "gpu",         labelKey: "GPU" },
  { id: "cpu",         labelKey: "CPU" },
  { id: "motherboard", labelKey: "Motherboard" },
  { id: "ram",         labelKey: "RAM" },
  { id: "storage",     labelKey: "Storage" },
  { id: "psu",         labelKey: "PSU" },
  { id: "cooling",     labelKey: "Cooling" },
  { id: "case",        labelKey: "Case" },
  { id: "monitor",     labelKey: "Monitor" },
  { id: "peripheral",  labelKey: "Peripheral" },
];

export default function FilterButton({ onFilterChange }) {
  const { t } = useTranslation();
  const [open, setOpen]         = useState(false);
  const [selected, setSelected] = useState(new Set());
  const [applied, setApplied]   = useState(new Set());

  const toggle = (id) => {
    setSelected((prev) => {
      const next = new Set();
      if (!prev.has(id)) {
        next.add(id);
      }
      return next;
    });
  };

  const apply = () => {
    const next = new Set(selected);
    setApplied(next);
    if (onFilterChange) onFilterChange([...next]);
    setOpen(false);
  };

  const clear = () => {
    setSelected(new Set());
    setApplied(new Set());
    if (onFilterChange) onFilterChange([]);
  };

  const removeChip = (id) => {
    const next = new Set(applied);
    next.delete(id);
    setApplied(next);
    setSelected(new Set(next));
    if (onFilterChange) onFilterChange([...next]);
  };

  return (
    // ← flex-col para que dropdown y chips empujen el contenido hacia abajo
    <div className="flex flex-col gap-2 w-auto items-start  z-10">

      {/* Fila: barra + botón — esto lo arma BarraBusqueda, acá solo el botón */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`h-14 px-4 bg-[#0c0c14] border rounded-lg flex-shrink-0 focus:outline-none
          transition-all shadow-[0_0_15px_rgba(0,0,0,0.3)] flex items-center gap-2
          hover:border-[#00e5ff]/50 hover:text-white/90
          ${open || applied.size > 0 ? "border-[#00e5ff]/60 text-white" : "border-[#1e1e30] text-white/60"}`}
      >
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-colors ${applied.size > 0 ? "text-[#00e5ff]" : "text-white/50"}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>

        {applied.size > 0 && (
          <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full min-w-[20px] text-center"
            style={{ background: "#00e5ff22", color: "#00e5ff", border: "1px solid #00e5ff44" }}>
            {applied.size}
          </span>
        )}

        <svg
          className={`w-4 h-4 text-white/30 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown en flujo normal — desplaza el contenido de abajo */}
      {open && (
        <div
          className="absolute left-0 right-0 top-full mt-2 rounded-lg overflow-hidden z-50"
          style={{
            background: "#0c0c14",
            border: "1px solid #1e1e30",
            boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
            animation: "slideDown 0.18s ease forwards",
          }}
        >
          <style>{`@keyframes slideDown { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }`}</style>

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid #1e1e30" }}>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00e5ff" }}>
              {t('filter.title')}
            </span>
            <button onClick={clear} className="text-xs text-white/30 hover:text-white/70 transition-colors">
              {t('filter.clear')}
            </button>
          </div>

          {/* Grid de opciones */}
          <div className="px-3 py-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {CATEGORIES.map((cat) => {
              const isSelected = selected.has(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => toggle(cat.id)}
                  className="flex items-center justify-between gap-2 px-3 py-2 rounded-md text-sm text-left transition-all hover:brightness-125"
                  style={isSelected
                    ? { background: "#00e5ff15", color: "#00e5ff", border: "1px solid #00e5ff33" }
                    : { background: "transparent", color: "rgba(255,255,255,0.6)", border: "1px solid transparent" }
                  }
                >
                  <span>{t(cat.labelKey)}</span>
                  {isSelected && (
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#00e5ff">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-4 py-3" style={{ borderTop: "1px solid #1e1e30" }}>
            <button
              onClick={apply}
              className="w-full h-8 rounded-md text-sm font-semibold hover:brightness-125 transition-all"
              style={{ background: "#00e5ff15", color: "#00e5ff", border: "1px solid #00e5ff44" }}
            >
              {t('filter.apply')}
            </button>
          </div>
        </div>
      )}

      {/* Chips aplicados */}
      {applied.size > 0 && (
        <div className="flex flex-wrap gap-2">
          {[...applied].map((id) => {
            const cat = CATEGORIES.find((c) => c.id === id);
            return (
              <span key={id} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium"
                style={{ background: "#00e5ff15", color: "#00e5ff", border: "1px solid #00e5ff33" }}>
                {t(cat.labelKey)}
                <button onClick={() => removeChip(id)} className="ml-1 opacity-60 hover:opacity-100 transition-opacity">✕</button>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}