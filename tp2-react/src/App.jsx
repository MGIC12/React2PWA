import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Favoritos from "./Pages/Favoritos/Favoritos";
import Contacto from "./Pages/Contacto/Contacto";
import Acerca from "./Pages/Acerca/Acerca";
import Detalles from "./Pages/Detalles/Detalles";
import Error404 from "./Pages/Error404/Error404";
import Registrarse from "./Pages/Registrarse/Registrarse";
import IniciarSesion from "./Pages/IniciarSesion/IniciarSesion";
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
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
