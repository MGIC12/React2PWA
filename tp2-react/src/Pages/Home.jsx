import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BarraBusqueda from "../Components/BarraBusqueda/BarraBusqueda";
import TarjetaComponente from "../Components/tarjetaComponente/TarjetaComponente";
import { getAllItems } from "../services/getAllItems";
import { Link } from "react-router-dom";

export default function Home() {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = (valorDesdeHijo) => {
    setPage(1); 
    setSearch(valorDesdeHijo);
  };

  useEffect(() => {
    const fetchItems = async (page, search) => {
      setCargando(true);
      try {
        const data = await getAllItems(page, search);
        setItems(data);
      } catch (error) {
        console.error("Error al cargar los items:", error);
      } finally {
        setCargando(false);
      }
    };
    fetchItems(page, search);
  }, [page, search]);

  useEffect(() => {
    document.title = "Home";
  }, []);
  

  return (
    <div
      className="min-h-screen flex flex-col bg-[#050508]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Header />
      <div className="w-full py-16 md:py-24 flex flex-col items-center justify-center border-b border-white/5 bg-[#0a0a12]/50">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-[0.15em] text-white no-underline mb-4 drop-shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          NEX<span className="text-[#00e5ff]">US</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 uppercase tracking-widest font-bold text-center px-4">
          Jugá sin límites{" "}
          <span className="text-[#00e5ff] hidden md:inline mx-2">•</span>
          <br className="md:hidden" /> Sentí cada frame
        </p>
      </div>
      <main className="grow container mx-auto px-6 md:px-10 py-12 flex flex-col items-center">
        <div className="w-full max-w-3xl mb-12">
          <BarraBusqueda 
          onSearch={handleSearch} />

        </div>
        {cargando ? (
          <div className="flex flex-col items-center justify-center mt-20">
            <div className="w-12 h-12 border-4 border-[#00e5ff]/20 border-t-[#00e5ff] rounded-full animate-spin"></div>
            <p className="text-[#00e5ff] mt-6 tracking-[0.3em] uppercase text-sm font-bold animate-pulse">
              Sincronizando Archivo...
            </p>
          </div>
        ) : (
          <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {items.map((item) => (
              <Link
                to={`/items/${item.id}`}
                key={item.id}
                className="block h-full"
              >
                <TarjetaComponente item={item} />
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
