import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favoritos from "./Pages/Favoritos";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
      <Footer 
        links={[
          { path: "/", label: "Inicio" },
          { path: "/favoritos", label: "Favoritos" },
        ]}
        social={[
          { url: "https://facebook.com", label: "Facebook", icon: "f" },
        ]} 
      />
    </>
  );
}

export default App;
