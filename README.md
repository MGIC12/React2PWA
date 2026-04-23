# Trabajo Práctico: REACT Parte II - Facultad de Informática - Universidad Nacional del Comahue (UNCo)

## Información del Grupo

- **Materia:** Programación Web Avanzada
- **Integrantes:**
  - Mariano Germán Infante Contreras - **[FAI-3823]** - Rol: PM / Developer
  - Matías Emiliano Bácsay - **[FAI-4078]** - Rol: Developer
  - Paloma Stucke - **[FAI-5544]** - Rol: Developer
- **Profesores:** Agustin Chiarotto / Lucas Margni

## Descripción del Proyecto

Esta aplicación es una Single Page Application (SPA) desarrollada con **React** y estilizada con **Tailwind CSS**.

El proyecto consiste en un catálogo interactivo de Hardware de computación que consume datos desde una API REST simulada utilizando MockAPI.

### Características Principales:

- **Catálogo Paginado:** Lista principal con carga dinámica mediante scroll infinito.
- **Búsqueda Integrada:** Buscador en tiempo real para filtrar elementos desde la API.
- **Detalles Extendidos:** Vista dedicada para consultar la información completa de cada elemento mediante rutas dinámicas.
- **Sistema de Favoritos:** Persistencia de datos en `localStorage` para guardar y visualizar elementos preferidos en una vista dedicada.
- **Internacionalización (i18n):** Soporte multi-idioma (Español / Inglés) con guardado de preferencias del usuario.

## Tecnologías Utilizadas

- **Frontend:** React (Vite)
- **Enrutamiento:** React Router DOM
- **Estilos:** Tailwind CSS
- **Internacionalización:** react-i18next
- **API:** MockAPI
- **Gestión de Tareas:** GitHub Projects (Kanban)

## Guía de Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/MGIC12/React2PWA.git
   ```
2. **Navegar al directorio del proyecto:**
   ```bash
   cd tp2-react
   ```
3. **Instalar las dependencias:**
   ```bash
   npm install
   ```
4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
