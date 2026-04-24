import React, { useEffect } from "react";
import Header from "../Components/Header/Header";

export default function Acerca() {
  useEffect(() => {
    document.title = "Acerca de";
  }, []);
  return (
    <div>
      <Header />
      <div>Acerca</div>
    </div>
  );
}
