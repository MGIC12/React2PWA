import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import BarraBusqueda from "./BarraBusqueda";

// 1. Mockeamos el hook useTranslation para evitar errores de contexto
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key, // Simplemente devuelve la misma clave de traducción como texto
  }),
}));

// 2. Mockeamos FilterButton para aislar nuestra BarraBusqueda (Test Unitario puro)
vi.mock("../FilterButton/FilterButton", () => ({
  default: ({ onFilterChange }) => (
    <button
      data-testid="mock-filter-btn"
      onClick={() => onFilterChange("test-filter")}
    >
      Filtro
    </button>
  ),
}));

describe("Componente BarraBusqueda", () => {
  it("renderiza correctamente el input con su placeholder", () => {
    render(<BarraBusqueda />);
    // Buscamos el input por su placeholder (que ahora es la clave mockeada)
    const input = screen.getByPlaceholderText("barraBusqueda.placeholder");
    expect(input).toBeInTheDocument();
  });

  it("llama a la función onSearch al escribir en el input", async () => {
    // Creamos una función espía
    const mockOnSearch = vi.fn();
    render(<BarraBusqueda onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("barraBusqueda.placeholder");

    // El usuario tipea "hola"
    await userEvent.type(input, "hola");

    // Verificamos que la función se haya llamado porque tiene un onChange que dispara onSearch
    expect(mockOnSearch).toHaveBeenCalled();
  });

  it("llama a la función onSearch con el valor correcto al hacer submit (Enter)", async () => {
    const mockOnSearch = vi.fn();
    render(<BarraBusqueda onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("barraBusqueda.placeholder");

    // El usuario tipea "react" y presiona la tecla Enter
    await userEvent.type(input, "react{enter}");

    // Verificamos que en el submit se haya enviado la palabra "react"
    expect(mockOnSearch).toHaveBeenCalledWith("react");
  });

  it("llama a la función onFilterChange al interactuar con el botón de filtro", async () => {
    const mockOnFilterChange = vi.fn();
    render(<BarraBusqueda onFilterChange={mockOnFilterChange} />);

    // Buscamos el botón de filtro que mockeamos al principio del archivo
    const filterBtn = screen.getByTestId("mock-filter-btn");

    await userEvent.click(filterBtn);

    // Verificamos que al hacer clic en el hijo, el padre reciba la llamada
    expect(mockOnFilterChange).toHaveBeenCalledWith("test-filter");
  });

  it("no rompe la aplicación si no se le pasan las funciones onSearch u onFilterChange", async () => {
    // Renderizamos sin pasarle ninguna prop
    render(<BarraBusqueda />);

    const input = screen.getByPlaceholderText("barraBusqueda.placeholder");

    // Interactuamos para forzar que intente llamar a onSearch
    await userEvent.type(input, "prueba{enter}");

    // Si llegamos hasta acá sin que tire error, el test pasa (gracias a tus if en el componente)
    expect(input).toBeInTheDocument();
  });
});
