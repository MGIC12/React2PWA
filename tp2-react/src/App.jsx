import Favoritos from "./Pages/Favoritos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalles/:id" element={<Detalles />} />*/}
        <Route path="*" element={<Error404 />} />
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
    </BrowserRouter>
 );
}

export default App;
