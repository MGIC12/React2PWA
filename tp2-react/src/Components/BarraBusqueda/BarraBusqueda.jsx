import React, { useState } from "react";
import FilterButton from "../FilterButton/FilterButton";
import { useTranslation } from 'react-i18next';

export default function BarraBusqueda({ onSearch, onFilterChange }) {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value);
  };

  const manejoSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query.trim());
  };

  return (
    <div className="relative flex flex-col gap-2 w-full" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Fila: input + botón filtro */}
      <div className="flex gap-4 w-full items-start">
        <form onSubmit={manejoSubmit} className="relative flex-1 group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-white/40 group-focus-within:text-[#00e5ff] transition-colors"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder={t('barraBusqueda.placeholder')}
            value={query}
            onChange={handleChange}
            className="w-full h-14 pl-12 pr-4 bg-[#0c0c14] border border-[#1e1e30] text-white rounded-lg focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all placeholder:text-white/30 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
          />
        </form>

        <FilterButton onFilterChange={onFilterChange} />
      </div>

    </div>
  );
}