import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favoritos from "./Pages/Favoritos";
import Contacto from "./Pages/Contacto";
import Acerca from "./Pages/Acerca";
import Detalles from "./Pages/Detalles";
import Error404 from "./Pages/Error404";
import "./App.css";
import './js/i18n' // Importa la configuración de i18n

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/items/:id" element={<Detalles />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
