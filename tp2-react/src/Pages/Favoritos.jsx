import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFav= JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFav);
  }, []);

  if (favorites.length === 0) {
    return(
      <div className="min-h-screen bg-gray-900">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          <h2 className="text-2xl font-bold text-white">
            No hay favoritos todavía
          </h2>
          <p className="text-gray-400 mt-2">
            Agrega elementos desde la página principal.
          </p>
        </div>
        <Footer />
      </div>
    )
  }
  return (
    <div className="bg-gray-900 min-h-screen pb-32">
      <Header />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((item) => (
          <div
          key={item.id}
          className="bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition border border-gray-700 hover:border-cyan-400"
          >
            <img
              src={item.coverImage}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md" 
            />
            <h3 className="text-lg font-semibold mt-2 text-white">{item.name}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
