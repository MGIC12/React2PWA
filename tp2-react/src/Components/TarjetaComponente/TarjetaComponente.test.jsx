import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TarjetaComponente from "./TarjetaComponente";

// 1. Mockeamos las traducciones igual que en los componentes anteriores
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe("Componente TarjetaComponente", () => {
  // Creamos un "item" falso (mock) para pasarle por props al componente
  const mockItem = {
    name: "Procesador Quantum X9",
    category: "CPU",
    shortDescription: "El mejor procesador para gaming.",
    image: "https://ejemplo.com/cpu.jpg",
  };

  it("renderiza correctamente los textos del item (nombre, categoría y descripción)", () => {
    render(<TarjetaComponente item={mockItem} />);

    // Verificamos que los datos del mockItem estén en la pantalla
    expect(screen.getByText("Procesador Quantum X9")).toBeInTheDocument();
    expect(screen.getByText("CPU")).toBeInTheDocument();
    expect(
      screen.getByText("El mejor procesador para gaming."),
    ).toBeInTheDocument();
  });

  it("renderiza la imagen correctamente con su src y atributo alt", () => {
    render(<TarjetaComponente item={mockItem} />);

    // Buscamos la imagen por el texto alternativo (alt) que generaste en el componente
    const imagen = screen.getByAltText(`Ficha técnica de ${mockItem.name}`);

    expect(imagen).toBeInTheDocument();
    expect(imagen).toHaveAttribute("src", mockItem.image);
  });

  it('muestra el botón de "ver detalles" con la clave de traducción correcta', () => {
    render(<TarjetaComponente item={mockItem} />);

    // Como mockeamos i18next, buscamos la clave literal
    const boton = screen.getByRole("button", { name: "card.viewDetails" });
    expect(boton).toBeInTheDocument();
  });

  it("cambia el estado y muestra el mensaje de error si la imagen falla al cargar", () => {
    render(<TarjetaComponente item={mockItem} />);

    // Primero, obtenemos la imagen que se renderizó inicialmente
    const imagen = screen.getByAltText(`Ficha técnica de ${mockItem.name}`);

    // fireEvent nos permite disparar eventos nativos del navegador, en este caso "onError"
    fireEvent.error(imagen);

    // Después del error, la etiqueta <img> debería desaparecer
    expect(imagen).not.toBeInTheDocument();

    // Y debería aparecer el texto de error de traducción que pusiste en tu componente
    expect(screen.getByText("card.imageError")).toBeInTheDocument();
  });
});
