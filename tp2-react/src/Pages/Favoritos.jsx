import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function Favoritos() {
  useEffect(() => {
    document.title = "Favoritos";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <h1 className="text-3xl font-bold text-emerald-50">Favoritos</h1>
      <Footer />
    </div>
  );
}
