import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import Header from "./Header";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe("Componente Header", () => {
  it("renderiza la barra de navegación", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const navBar = screen.getByRole("navigation");
    expect(navBar).toBeInTheDocument();
  });

  it("renderiza el logo principal (NEXUS)", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const logoPart1 = screen.getByText("NEX");
    const logoPart2 = screen.getByText("US");
    expect(logoPart1).toBeInTheDocument();
    expect(logoPart2).toBeInTheDocument();
  });
});
