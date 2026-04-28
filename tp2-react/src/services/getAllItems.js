import { API_BASE_URL } from "./apiConfig";

export const getAllItems = async (page = 1) => {
  try {
    const url = new URL(API_BASE_URL);

    // Agregamos el parámetro de paginación
    url.searchParams.append("page", page);

    // Agregamos el parámetro de límite para limitar la cantidad de items
    url.searchParams.append("limit", 12);

    // Agregamos el parámetro de búsqueda en caso de que se haya ingresado algo en el input
    // if (search) {
    //   url.searchParams.append("name", search);
    // }

    const response = await fetch(url.toString());

    // Verificamos si la respuesta HTTP es exitosa (código 200-299)
    if (!response.ok) {
      throw new Error(
        `Error HTTP: ${response.status} - No se pudieron obtener los items`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getAllItems:", error);
    return [];
  }
};
