import { API_BASE_URL } from "./apiConfig";

export const getItemById = async (id) => {
  try {
    // Para buscar un ID específico en MockAPI
    const response = await fetch(`${API_BASE_URL}/${id}`);

    // Si MockAPI responde con un 404 (Not Found), forzamos el error
    if (!response.ok) {
      throw new Error(`Item con ID ${id} no encontrado`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error en getItemById (ID: ${id}):`, error);
    return null;
  }
};
