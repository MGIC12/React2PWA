import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getItemById } from "../services/getItemById";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Error404 from "./Error404";

export default function Detalles() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error404, setError404] = useState(false);
  const [errorImagen, setErrorImagen] = useState(false);

  useEffect(() => {
    const obtenerDatos = async () => {
      setCargando(true);
      setErrorImagen(false);
      const data = await getItemById(id);

      if (!data) {
        setError404(true);
      } else {
        setProducto(data);
      }
      setCargando(false);
    };

    obtenerDatos();
    document.title = "Detalles del producto";
  }, [id]);

  if (error404) return <Error404 />;

  return (
    <div
      className="min-h-screen flex flex-col bg-[#050508]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Header />

      <main className="grow container mx-auto px-6 md:px-10 py-12">
        {cargando ? (
          <div className="flex flex-col items-center justify-center mt-32">
            <div className="w-16 h-16 border-4 border-[#00e5ff]/20 border-t-[#00e5ff] rounded-full animate-spin"></div>
            <p className="text-[#00e5ff] mt-6 tracking-[0.3em] uppercase text-sm font-bold">
              Descargando Ficha Técnica...
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#00e5ff] transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Volver a Home
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="min-h-75 lg:min-h-100 bg-white/5 border border-white/10 rounded-2xl p-10 flex items-center justify-center backdrop-blur-sm shadow-2xl relative">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00e5ff]/50 rounded-tl-xl m-4"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00e5ff]/50 rounded-br-xl m-4"></div>

                {errorImagen ? (
                  <div className="flex flex-col items-center justify-center text-[#5a5a78]">
                    <svg
                      className="w-16 h-16 opacity-50 mb-4"
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
                    <span className="text-sm font-bold tracking-widest uppercase">
                      Sin Señal Visual
                    </span>
                  </div>
                ) : (
                  <img
                    src={producto.image}
                    alt={producto.name}
                    className="max-w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(0,229,255,0.15)]"
                    onError={() => setErrorImagen(true)}
                  />
                )}
              </div>

              <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  {producto.name}
                </h1>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                    {producto.category}
                  </span>
                  <span className="bg-white/5 text-white/60 border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                    ID_REGISTRO: {producto.id}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 pb-10 border-b border-white/10">
                  <button className="w-full sm:w-auto grow bg-transparent border-2 border-[#00e5ff] hover:bg-[#00e5ff] text-[#00e5ff] hover:text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group">
                    <svg
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    GUARDAR EN FAVORITOS
                  </button>

                  <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-3">
                    <svg
                      className="w-5 h-5 text-white/60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <Link
                      to={`https://listado.mercadolibre.com.ar/${encodeURIComponent(producto.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="hidden md:inline text-sm">
                        BUSCAR EN TIENDAS
                      </span>
                    </Link>
                  </button>
                </div>
                <div className="space-y-8">
                  <section>
                    <h3 className="text-[#00e5ff] uppercase tracking-widest text-xs font-bold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#00e5ff] rounded-full"></div>
                      Análisis de Rendimiento
                    </h3>
                    <p className="text-white/80 leading-relaxed text-lg">
                      {producto.fullDescription}
                    </p>
                  </section>
                  <section>
                    <h3 className="text-[#00e5ff] uppercase tracking-widest text-xs font-bold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#00e5ff] rounded-full"></div>
                      Especificaciones Base
                    </h3>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                      <ul className="flex flex-col gap-3">
                        {producto.technicalSpecs
                          .split(",")
                          .map((spec, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-white/90 font-mono"
                            >
                              <span className="text-[#00e5ff] mt-0.5">▹</span>
                              <span className="leading-relaxed">
                                {spec.trim()}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
