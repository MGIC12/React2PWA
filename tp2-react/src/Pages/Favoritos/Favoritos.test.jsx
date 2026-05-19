import Favoritos from "./Favoritos";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, vi, beforeEach } from "vitest";

// Mocks estructurales
vi.mock("../../Components/Header/Header", () => ({
  default: () => <header data-testid="mock-header">Header</header>,
}));

vi.mock("../../Components/Footer/Footer", () => ({
  default: () => <footer data-testid="mock-footer">Footer</footer>,
}));

vi.mock("../../Components/TarjetaComponente/TarjetaComponente", () => ({
  default: ({ item }) => (
    <div data-testid="mock-tarjeta">
      <h3>{item.name}</h3>
    </div>
  ),
}));

// MOCK OPTIMIZADO: Definimos la función de traducción AFUERA 
// para que la referencia en memoria sea fija y no genere bucles infinitos.
const mockT = (key) => {
  const core = {
    'favorites.h1': 'Mis Favoritos',
    'favorites.emptyFile': 'Archivo Vacío',
    'favorites.emptySubtitle': 'No tenés componentes guardados',
    'favorites.exploreButton': 'Explorar'
  };
  return core[key] || key;
};

const mockI18n = {
  language: "es"
};

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: mockT,       // Referencia fija
    i18n: mockI18n  // Referencia fija
  }),
}));

describe("Page: Favoritos Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("debe mostrar el mensaje de 'Archivo Vacío' cuando no hay favoritos guardados", async () => {
    // Seteamos la base de datos limpia
    localStorage.setItem("nexus_favoritos", JSON.stringify([]));

    render(
      <MemoryRouter>
        <Favoritos />
      </MemoryRouter>
    );

    // Al ser las referencias estables, findByText va a encontrar el texto al toque sin colgarse
    const mensajeVacio = await screen.findByText("Archivo Vacío");
    expect(mensajeVacio).toBeInTheDocument();
  });

  
it("debe renderizar correctamente los componentes favoritos guardados", async () => {
    // 1. Creamos un array con hardware de prueba (con la estructura que espera tu tarjeta)
    const productosFalsos = [
      { id: "gpu-rtx4070", name: "NVIDIA RTX 4070 Ti", category: "GPU" },
      { id: "cpu-i7", name: "Intel Core i7 14700K", category: "CPU" }
    ];

    // 2. Simulamos que estos productos ya estaban guardados en la memoria del navegador
    localStorage.setItem("nexus_favoritos", JSON.stringify(productosFalsos));

    // 3. Renderizamos el componente dentro del entorno de rutas
    render(
      <MemoryRouter>
        <Favoritos />
      </MemoryRouter>
    );

    // 4. Verificaciones observables para el usuario:
    // - Buscamos las tarjetas falsas usando el findByText (esperando que impacte el useEffect)
    const primerProducto = await screen.findByText("NVIDIA RTX 4070 Ti");
    const segundoProducto = await screen.findByText("Intel Core i7 14700K");

    expect(primerProducto).toBeInTheDocument();
    expect(segundoProducto).toBeInTheDocument();

    // - Verificación extra: El mensaje de "Archivo Vacío" NO debería existir en este estado
    // Usamos queryByText con "not.toBeInTheDocument" porque esperamos que devuelva null
    expect(screen.queryByText("Archivo Vacío")).not.toBeInTheDocument();
  });
   
});