import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { vi } from 'vitest';
import Detalles from './Detalles';
import { getItemById } from '../../services/getItemById';

vi.mock('../../services/getItemById', () => ({
  getItemById: vi.fn(),
}));

vi.mock('../../Components/Header/Header', () => ({
  default: () => <header data-testid="mock-header">Header</header>,
}));

vi.mock('../../Components/Footer/Footer', () => ({
  default: () => <footer data-testid="mock-footer">Footer</footer>,
}));

vi.mock('../Error404/Error404', () => ({
  default: () => <div data-testid="mock-404">Error 404 Component</div>,
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      const core = {
        'details.loading': 'CARGANDO ESPECIFICACIONES',
        'details.id': 'ID',
        'details.addToFavorites': 'Agregar a favoritos',
        'details.removeFromFavorites': 'Quitar de favoritos',
      };
      return core[key] || key;
    },
  }),
}));

const mockProducto = {
  id: 'gpu-rtx4070',
  name: 'NVIDIA RTX 4070 Ti',
  category: 'GPU',
  image: 'https://nexus-hardware.com/rtx4070.png',
  fullDescription: 'Placa de video de alta gama con arquitectura Ada Lovelace.',
  technicalSpecs: '12GB GDDR6X, 192-bit, PCIe 4.0',
};

describe('Page: Detalles Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear(); 
  });

  const renderConRouter = (idParam = 'gpu-rtx4070') => {
    return render(
      <MemoryRouter initialEntries={[`/detalles/${idParam}`]}>
        <Routes>
          <Route path="/detalles/:id" element={<Detalles />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it('debe mostrar la animación de carga inicialmente mientras consulta el servicio', () => {

    getItemById.mockReturnValue(new Promise(() => {}));
    renderConRouter();

    expect(screen.getByText('CARGANDO ESPECIFICACIONES')).toBeInTheDocument();
  });

  it('debe renderizar correctamente toda la información del producto recuperado', async () => {
    getItemById.mockResolvedValue(mockProducto);
    renderConRouter();

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'NVIDIA RTX 4070 Ti' })).toBeInTheDocument();
    });

    expect(screen.getByText('GPU')).toBeInTheDocument();
    expect(screen.getByText('Placa de video de alta gama con arquitectura Ada Lovelace.')).toBeInTheDocument();
    expect(screen.getByText('12GB GDDR6X')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'NVIDIA RTX 4070 Ti' })).toHaveAttribute('src', mockProducto.image);
  });

  it('debe redirigir al componente Error404 si el servicio no encuentra el ítem', async () => {
    getItemById.mockResolvedValue(null); // Simula producto inexistente
    renderConRouter('id-invalido');

    await waitFor(() => {
      expect(screen.getByTestId('mock-404')).toBeInTheDocument();
    });
  });

  it('debe gestionar la persistencia en localStorage al interactuar con el botón de favoritos', async () => {
    getItemById.mockResolvedValue(mockProducto);
    renderConRouter();

    const botonFav = await screen.findByRole('button', { name: 'Agregar a favoritos' });
    expect(botonFav).toBeInTheDocument();

    await userEvent.click(botonFav);

    expect(screen.getByRole('button', { name: 'Quitar de favoritos' })).toBeInTheDocument();
    
    const favoritosEnStorage = JSON.parse(localStorage.getItem('nexus_favoritos'));
    expect(favoritosEnStorage).toHaveLength(1);
    expect(favoritosEnStorage[0].id).toBe('gpu-rtx4070');

    await userEvent.click(screen.getByRole('button', { name: 'Quitar de favoritos' }));
    
    expect(screen.getByRole('button', { name: 'Agregar a favoritos' })).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('nexus_favoritos'))).toHaveLength(0);
  });
});