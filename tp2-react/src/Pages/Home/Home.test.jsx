import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";
import { getAllItems } from "../../services/getAllItems";

vi.mock("../../Components/Header/Header", () => ({
  default: () => <div data-testid="header">Header Mock</div>,
}));
vi.mock("../../Components/Footer/Footer", () => ({
  default: () => <div data-testid="footer">Footer Mock</div>,
}));

vi.mock("../../Components/BarraBusqueda/BarraBusqueda", () => ({
  default: ({ onSearch, onFilterChange }) => (
    <div data-testid="barra-busqueda">
      <button data-testid="btn-buscar-mock" onClick={() => onSearch("marte")}>
        Simular Buscar
      </button>
      <button
        data-testid="btn-filtrar-mock"
        onClick={() => onFilterChange(["planetas"])}
      >
        Simular Filtro
      </button>
    </div>
  ),
}));

vi.mock("../../Components/TarjetaComponente/TarjetaComponente", () => ({
  default: ({ item }) => (
    <div data-testid="tarjeta">{item.name || "Item Mock"}</div>
  ),
}));

vi.mock("../../services/getAllItems", () => ({
  getAllItems: vi.fn(),
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: "es" },
  }),
}));

window.IntersectionObserver = class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Home Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("debe renderizar la pantalla de carga inicialmente", () => {
    getAllItems.mockImplementation(() => new Promise(() => {}));
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByText("home.loading")).toBeInTheDocument();
  });

  it("debe renderizar las tarjetas cuando la API responde con datos", async () => {
    const mockData = [
      { id: 1, name: "Item 1", category: "categoria1" },
      { id: 2, name: "Item 2", category: "categoria2" },
    ];
    getAllItems.mockResolvedValue(mockData);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getAllByTestId("tarjeta")).toHaveLength(2);
    });
  });

  it("debe actualizar el título del documento (pestaña del navegador)", async () => {
    getAllItems.mockResolvedValue([]);
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(document.title).toBe("nav.home");
  });

  it("debe reiniciar la página y llamar a la API cuando se realiza una búsqueda", async () => {
    getAllItems.mockResolvedValue([]);
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const btnBuscar = screen.getByTestId("btn-buscar-mock");
    fireEvent.click(btnBuscar);

    await waitFor(() => {
      // Esto representa los parámetros con los que fue llamada la función: (page, search, filters)
      expect(getAllItems).toHaveBeenCalledWith(1, "marte", []);
    });
  });

  it('debe mostrar el botón de "volver arriba" cuando el usuario scrollea hacia abajo', async () => {
    getAllItems.mockResolvedValue([]);
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const botonScroll = screen.getByLabelText("Volver arriba");
    expect(botonScroll.className).toContain("opacity-0");

    fireEvent.scroll(window, { target: { scrollY: 400 } });
    expect(botonScroll.className).toContain("opacity-100");
  });
});
