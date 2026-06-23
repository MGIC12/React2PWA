import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import FilterButton from './FilterButton';

// 1. Mock de react-i18next para evitar errores con el hook useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      // Un mapeo simple para que los textos descriptivos coincidan
      const translations = {
        'filter.title': 'FILTRAR POR',
        'filter.clear': 'Limpiar',
        'filter.apply': 'Aplicar Filtros',
        'GPU': 'Tarjeta Gráfica',
        'CPU': 'Procesador'
      };
      return translations[key] || key;
    }
  })
}));

describe('FilterButton Component', () => {
  it('debe mantener el dropdown cerrado por defecto', () => {
    const mockOnFilterChange = vi.fn();
    render(<FilterButton onFilterChange={mockOnFilterChange} />);

    // El título del dropdown no debería estar visible en la pantalla
    expect(screen.queryByText('FILTRAR POR')).not.toBeInTheDocument();
  });

  it('debe abrir el dropdown al hacer click en el botón de filtro', async () => {
    render(<FilterButton onFilterChange={vi.fn()} />);

    // Buscamos el botón principal (es el único botón inicial que renderiza el componente)
    const filterMenuButton = screen.getByRole('button');
    await userEvent.click(filterMenuButton);

    // Ahora el título del dropdown debería estar en el DOM
    expect(screen.getByText('FILTRAR POR')).toBeInTheDocument();
  });

  it('debe permitir seleccionar una categoría, aplicarla y emitir los cambios', async () => {
    const mockOnFilterChange = vi.fn();
    render(<FilterButton onFilterChange={mockOnFilterChange} />);

    // 1. Abrir dropdown
    const filterMenuButton = screen.getByRole('button');
    await userEvent.click(filterMenuButton);

    // 2. Seleccionar la categoría GPU (en base a nuestra traducción mockeada)
    const gpuOption = screen.getByRole('button', { name: /tarjeta gráfica/i });
    await userEvent.click(gpuOption);

    // 3. Hacer click en el botón "Aplicar Filtros" del footer
    const applyButton = screen.getByRole('button', { name: /aplicar filtros/i });
    await userEvent.click(applyButton);

    // 4. Verificaciones observables para el usuario:
    // - El dropdown se cierra automáticamente tras aplicar
    expect(screen.queryByText('FILTRAR POR')).not.toBeInTheDocument();
    
    // - Se renderiza el Chip de la categoría aplicada (el texto de la categoría + el botón ✕)
    expect(screen.getByText(/tarjeta gráfica/i)).toBeInTheDocument();

    // - Se llamó a la función callback con el ID correspondiente ('gpu')
    expect(mockOnFilterChange).toHaveBeenCalledWith(['gpu']);
  });

  it('debe limpiar los filtros al presionar el botón "Limpiar"', async () => {
    const mockOnFilterChange = vi.fn();
    render(<FilterButton onFilterChange={mockOnFilterChange} />);

    // Abrimos, seleccionamos y aplicamos un filtro para setear el estado inicial del test
    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByRole('button', { name: /tarjeta gráfica/i }));
    await userEvent.click(screen.getByRole('button', { name: /aplicar filtros/i }));

    // Volvemos a abrir para dar click en Limpiar
    await userEvent.click(screen.getByRole('button', { name: '1' })); 
    
    const clearButton = screen.getByRole('button', { name: /limpiar/i });
    await userEvent.click(clearButton);

    // Verificaciones corregidas:
    // Al limpiar, el botón de la cruz "✕" del chip debe desaparecer por completo
    expect(screen.queryByRole('button', { name: '✕' })).not.toBeInTheDocument();
    
    // Validamos que se haya notificado el array vacío correctamente al componente padre
    expect(mockOnFilterChange).toHaveBeenCalledWith([]);
  });

  it('debe remover el filtro individual al hacer click en la "✕" del Chip', async () => {
    const mockOnFilterChange = vi.fn();
    render(<FilterButton onFilterChange={mockOnFilterChange} />);

    // Abrimos y aplicamos el filtro GPU
    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByRole('button', { name: /tarjeta gráfica/i }));
    await userEvent.click(screen.getByRole('button', { name: /aplicar filtros/i }));

    // Buscamos el botón de cerrar ("✕") que está adentro del chip
    const removeChipButton = screen.getByRole('button', { name: '✕' });
    await userEvent.click(removeChipButton);

    // Verificaciones:
    expect(screen.queryByText(/tarjeta gráfica/i)).not.toBeInTheDocument();
    expect(mockOnFilterChange).toHaveBeenCalledWith([]);
  });
});