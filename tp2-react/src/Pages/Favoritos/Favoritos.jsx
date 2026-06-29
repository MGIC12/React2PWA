import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TarjetaComponente from "../../Components/TarjetaComponente/TarjetaComponente";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";

export default function Favoritos() {
  const { t, i18n } = useTranslation();
  const [favoritos, setFavoritos] = useState([]);
  const authContext = useContext(AuthContext);
  const user = authContext?.user ?? null;
  const token = authContext?.token ?? null;

  useEffect(() => {
    const cargarFavoritos = async () => {
      if (!user || !token) {
        const guardados = JSON.parse(localStorage.getItem("nexus_favoritos")) || [];
        setFavoritos(guardados);
        document.title = t("favorites.h1");
        return;
      }

      try {
        const response = await fetch("https://react3-pwa.vercel.app/favorites", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("No se pudieron cargar los favoritos");
        }

        const data = await response.json();
        const favoritosApi = Array.isArray(data) ? data : data.favorites || [];
        const itemsFavoritos = favoritosApi.map((fav) => fav.item ?? fav);

        setFavoritos(itemsFavoritos);
      } catch (error) {
        console.error(error);
        const guardados = JSON.parse(localStorage.getItem("nexus_favoritos")) || [];
        setFavoritos(guardados);
      }

      document.title = t("favorites.h1");
    };

    cargarFavoritos();
  }, [user, token, t, i18n.language]);

  return (
    <div
      className="min-h-screen flex flex-col bg-[#050508]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Header />

      <main className="grow container mx-auto px-6 md:px-10 py-12 flex flex-col items-center">
        <div className="w-full text-center mb-16 border-b border-white/10 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wider flex items-center justify-center gap-4">
            <svg
              className="w-10 h-10 text-[#00e5ff] fill-current"
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
            {t("favorites.h1-1")}{" "}
            <span className="text-[#00e5ff]">{t("favorites.h1-2")}</span>
          </h1>
          <p className="text-white/60 mt-4 tracking-widest uppercase text-sm font-bold">
            {t("favorites.subtitle")}
          </p>
        </div>

        {favoritos.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-10 text-center max-w-md">
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-white/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {t("favorites.emptyFile")}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {t("favorites.emptySubtitle")}
            </p>
            <Link
              to="/"
              className="bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] hover:bg-[#00e5ff] hover:text-black font-bold py-3 px-8 rounded-lg transition-all uppercase tracking-widest text-xs"
            >
              {t("favorites.exploreButton")}
            </Link>
          </div>
        ) : (
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {favoritos.map((item) => (
                <Link
                  to={`/items/${item.id}`}
                  key={item.id}
                  className="block h-full"
                >
                  <TarjetaComponente item={item} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
