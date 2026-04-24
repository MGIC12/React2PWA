import React, { useEffect } from "react";
import Header from "../Components/Header/Header";

export default function Contacto() {
  useEffect(() => {
    document.title = "Contacto";
  }, []);
  return (
    <div>
      <Header />
      <div>Contacto</div>
    </div>
  );
}
