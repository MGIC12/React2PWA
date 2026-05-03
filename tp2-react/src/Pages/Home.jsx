import React, { useEffect, useState, useRef, useCallback } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BarraBusqueda from "../Components/BarraBusqueda/BarraBusqueda";
import TarjetaComponente from "../Components/tarjetaComponente/TarjetaComponente";
import { getAllItems } from "../services/getAllItems";
import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const observer = useRef();

  const handleSearch = (valorDesdeHijo) => {
    setPage(1);
    setSearch(valorDesdeHijo);
    setItems([]);
    setHasMore(true);
  };

  const lastItemRef = useCallback(node => {
    if (loadingMore) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loadingMore, hasMore]);

  useEffect(() => {
    const fetchItems = async (page, search, append = false) => {
      if (append) {
        setLoadingMore(true);
      } else {
        setCargando(true);
      }
      try {
        const data = await getAllItems(page, search);
        if (append) {
          setItems(prevItems => [...prevItems, ...data]);
          if (data.length < 12) {
            setHasMore(false);
          }
        } else {
          setItems(data);
          setHasMore(data.length === 12);
        }
      } catch (error) {
        console.error("Error al cargar los items:", error);
      } finally {
        setCargando(false);
        setLoadingMore(false);
      }
    };
    fetchItems(page, search, page > 1);
  }, [page, search]);

  useEffect(() => {
    document.title = t('nav.home');
  }, [t, i18n.language]);
  

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
          {t('home.slogan1')}{" "}
          <span className="text-[#00e5ff] hidden md:inline mx-2">•</span>
          <br className="md:hidden" /> {t('home.slogan2')}
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
              {t('home.loading')}
            </p>
          </div>
        ) : (
          <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {items.map((item, index) => (
              <Link
                to={`/items/${item.id}`}
                key={`${item.id}-${i18n.language}`}
                className="block h-full"
                ref={index === items.length - 1 ? lastItemRef : null}
              >
                <TarjetaComponente item={item} />
              </Link>
            ))}
            {loadingMore && (
              <div className="col-span-full flex flex-col items-center justify-center py-8">
                <div className="w-8 h-8 border-4 border-[#00e5ff]/20 border-t-[#00e5ff] rounded-full animate-spin"></div>
                <p className="text-[#00e5ff] mt-4 tracking-[0.3em] uppercase text-sm font-bold animate-pulse">
                  {t('home.loading')}
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
