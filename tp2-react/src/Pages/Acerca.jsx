import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function Acerca() {
  useEffect(() => {
    document.title = "Acerca de";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <h1 className="text-3xl font-bold text-emerald-50">Acerca de</h1>
      <Footer />
    </div>
  );
}
