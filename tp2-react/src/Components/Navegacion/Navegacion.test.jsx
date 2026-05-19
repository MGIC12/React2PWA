import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navegacion from './Navegacion';

describe('Componente Navegacion', () => {
  it('renderiza correctamente el texto del enlace', () => {
    render(
      <MemoryRouter>
        <Navegacion direccion="/dashboard" label="Panel" />
      </MemoryRouter>
    );

    // Verificamos el comportamiento observable: el texto del link está en pantalla
    const enlace = screen.getByRole('link', { name: /panel/i });
    expect(enlace).toBeInTheDocument();
    
    // Verificamos que apunte a la dirección correcta (href)
    expect(enlace).toHaveAttribute('href', '/dashboard');
  });

  it('aplica las clases de estado inactivo por defecto', () => {
    render(
      // Seteamos initialEntries en la raíz para que "/dashboard" no sea la ruta activa
      <MemoryRouter initialEntries={['/']}>
        <Navegacion direccion="/dashboard" label="Panel" />
      </MemoryRouter>
    );

    const enlace = screen.getByRole('link', { name: /panel/i });
    
    // Validamos que tenga partes de los estilos inactivos (ej. text-white/80 y no-underline)
    expect(enlace).toHaveClass('text-white/80');
    expect(enlace).toHaveClass('no-underline');
    // Aseguramos que NO tenga los estilos de la ruta activa (w-full en el pseudo-elemento o el texto plano)
    expect(enlace).not.toHaveClass('after:w-full');
  });

  it('aplica las clases de estado activo cuando la ruta actual coincide con la dirección', () => {
    render(
      // Forzamos al MemoryRouter a simular que el navegador está parado exactamente en '/dashboard'
      <MemoryRouter initialEntries={['/dashboard']}>
        <Navegacion direccion="/dashboard" label="Panel" />
      </MemoryRouter>
    );

    const enlace = screen.getByRole('link', { name: /panel/i });

    // Validamos que NavLink haya reaccionado aplicando las clases del estado activo
    expect(enlace).toHaveClass('text-white');
    expect(enlace).toHaveClass('after:w-full');
    
    // Comprobamos que no arrastre las clases exclusivas del modo inactivo
    expect(enlace).not.toHaveClass('text-white/80');
    expect(enlace).not.toHaveClass('after:w-0');
  });
});