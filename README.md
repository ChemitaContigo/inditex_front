## Instalación y Ejecución

### Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: LTS)
- [Cypress](https://www.cypress.io/) (instalado globalmente o como dependencia de desarrollo en el proyecto)

### Pasos para Instalar Cypress

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. **Accede al directorio del proyecto**
    ```bash
   cd tu-proyecto
   ```
3. **Instala las dependencias**
    ```bash
    npm install
    ```
4. **Selecciona el archivo inditex.cy.js**

En la interfaz de Cypress, selecciona el archivo inditex.js ubicado en cypress/integration.

5. **Observa la ejecución del test**
   Verás cómo Cypress ejecuta las acciones especificadas en el test en tiempo real en un navegador.

## Explicación del Test

El test `inditex.cy.js` utiliza Cypress para realizar una serie de acciones automatizadas en las páginas de Google y
Wikipedia. Aquí está la explicación detallada:

### Inicio del Test

- **Inicio desde Google:**
    - Inicia desde la página de Google.
    - Declina los consentimientos.
    - Realiza una búsqueda escribiendo "automatización" en el campo de búsqueda de Google.
    - Encuentra y hace clic en el enlace hacia Wikipedia en los resultados de búsqueda.

### Cambio de Origen

- **Utiliza la función `changeOrigin()`:**
    - Utiliza la función `changeOrigin()` para cambiar a la URL de Wikipedia.

### Interacción en Wikipedia

- **Acciones en Wikipedia:**
    - Hace clic en el enlace de referencia relacionado con el control por ordenador.
    - Verifica que el párrafo en la página contenga el texto "285-222".
    - Toma una captura de pantalla llamada "Automation".

## Mejoras Potenciales

### Uso de Selectores Más Robustos

En el archivo `wikipediaScreen.js`, los selectores pueden ser más específicos para evitar romper el test si la
estructura del sitio cambia.


