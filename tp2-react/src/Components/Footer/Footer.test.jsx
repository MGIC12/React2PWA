import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Importante para testear <Link>
import { describe, it, expect, vi } from "vitest";
import Footer from "./Footer";

// Mockeamos las traducciones igual que hicimos antes
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key, // Devuelve la clave tal cual
  }),
}));

describe("Componente Footer", () => {
  // Función auxiliar para renderizar con el Router
  const renderConRouter = (componente) => {
    return render(<MemoryRouter>{componente}</MemoryRouter>);
  };

  it("renderiza el logo principal (NEXUS)", () => {
    renderConRouter(<Footer />);
    // Verifica que el texto "NEX" (y "US") estén en el documento
    const logoPart1 = screen.getByText("NEX");
    const logoPart2 = screen.getByText("US");
    expect(logoPart1).toBeInTheDocument();
    expect(logoPart2).toBeInTheDocument();
  });

  it("renderiza correctamente los enlaces de navegación usando las claves de traducción", () => {
    renderConRouter(<Footer />);

    // Verificamos que los links existan buscando las claves mockeadas
    expect(screen.getByText("footer.home")).toBeInTheDocument();
    expect(screen.getByText("footer.favorites")).toBeInTheDocument();
    expect(screen.getByText("footer.contact")).toBeInTheDocument();
    expect(screen.getByText("footer.about")).toBeInTheDocument();
  });

  it("renderiza los íconos de redes sociales", () => {
    renderConRouter(<Footer />);

    // Buscamos los enlaces de redes sociales por su aria-label (buenas prácticas de accesibilidad)
    expect(screen.getByRole("link", { name: "Twitter/X" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Instagram" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Discord" })).toBeInTheDocument();
  });

  it("renderiza la información de contacto y copyright", () => {
    renderConRouter(<Footer />);

    // Verificamos el correo y el copyright quemado en el código
    expect(screen.getByText(/support@nexus\.com/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2026 NEXUS HARDWARE/i)).toBeInTheDocument();
    expect(screen.getByText("BACINSTU V1.0")).toBeInTheDocument();
  });
});
