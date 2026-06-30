# Trabajo Práctico: REACT Parte II - Facultad de Informática - Universidad Nacional del Comahue (UNCo)

## Información del Grupo

- **Materia:** Programación Web Avanzada
- **Integrantes:**
  - Mariano Germán Infante Contreras - **[FAI-3823]** - Rol: PM / Developer
  - Matías Emiliano Bácsay - **[FAI-4078]** - Rol: Developer
- **Profesores:** Agustin Chiarotto / Lucas Margni

## Descripción del Proyecto

Esta aplicación es una Single Page Application (SPA) desarrollada con **React** y estilizada con **Tailwind CSS**.

El proyecto consiste en un catálogo interactivo de Hardware de computación que consume datos desde una base de datos deployada en Neon.

Deploy del proyecto: https://pwa-react2-bacinstu.netlify.app/

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
- **Base de datos:** Prisma ORM
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

## Testing

### Librerías Utilizadas

- **[Vitest](https://vitest.dev/):** Utilizado como el motor principal de pruebas. Se eligió Vitest por su integración nativa y transparente con Vite, lo que permite aprovechar la misma configuración del proyecto y lograr una ejecución de pruebas extremadamente rápida.
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/):** Empleada para evaluar los componentes de React. Esta librería fomenta buenas prácticas al probar los componentes desde la perspectiva del usuario (simulando clicks, buscando por textos o roles de accesibilidad) en lugar de testear detalles de implementación interna.
- **jsdom:** Entorno de pruebas configurado que simula la estructura de un navegador (DOM) directamente dentro de Node.js.

### Cómo ejecutar las pruebas

Para correr los tests, sigue estos pasos:

1.  Abre una terminal posicionado en el directorio raíz del proyecto.
2.  Asegúrate de tener todas las dependencias instaladas ejecutando:
    ```bash
    npm install
    ```
3.  Inicia la suite de testing con el siguiente comando:
    ```bash
    npm run test
    ```
