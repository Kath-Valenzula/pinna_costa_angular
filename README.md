# PinnaCosta
[![CI](https://github.com/Kath-Valenzula/pina_costa_angular/actions/workflows/ci.yml/badge.svg)](https://github.com/Kath-Valenzula/pina_costa_angular/actions/workflows/ci.yml)

Tienda en línea desarrollada con **Angular 16**. Permite navegar productos de moda femenina, gestionar un carrito de compras y utilizar formularios reactivos para autenticación y administración.

## Tabla de contenidos
- [Características](#características)
- [Instalación](#instalación)
- [Datos de ejemplo](#datos-de-ejemplo)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Scripts disponibles](#scripts-disponibles)
- [Pruebas](#pruebas)
- [Documentación](#documentación)
- [Despliegue](#despliegue)
- [Docker](#docker)

## Características
- Catálogo de productos con imágenes y precios.
- Carrito de compras con contador en el encabezado.
- Autenticación simulada con roles **Admin** (`admin@example.com` / `Admin#123`) y **Usuario** (`user@example.com` / `User#123`).
- Formularios reactivos con validaciones (email, contraseña, confirmación, fecha mínima, etc.).
- Pruebas unitarias con Jasmine y Karma.

## Instalación
1. Clona el repositorio y entra en la carpeta:
   ```bash
   git clone https://github.com/Kath-Valenzula/pinna-costa-angular.git
   cd pinna-costa-angular
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npx ng serve --open
   ```
4. Abre <http://localhost:4200/> en tu navegador.

## Datos de ejemplo
El servicio `JsonService` consume archivos JSON alojados en [GitHub Pages](https://kath-valenzula.github.io/my-json-repo-pina-costa/). En `my-json-repo-pina-costa/` se incluyen copias de `productos.json` y `encargos.json` por si deseas ejecutar un servidor local con `json-server`:
```bash
npx json-server --watch my-json-repo-pina-costa --port 3000
```
Cambia la URL en `src/app/services/json.service.ts` para apuntar a `http://localhost:3000` y probar las operaciones CRUD localmente.

## Estructura del proyecto
- `src/app/pages/` – componentes de cada página (Login, Registro, Perfil, Catálogo, Carrito, Admin, etc.).
- `src/app/shared/` – componentes compartidos (Header, Footer).
- `src/app/services/` – servicios (CartService, AuthService, ProductService, UserService).

## Scripts disponibles
- `ng serve` – servidor de desarrollo.
- `ng generate component MyComponent` – generar código Angular.
- `npm run docs` – generar documentación con Compodoc en `documentation/`.
- `ng test` – ejecutar pruebas unitarias.
- `ng e2e` – ejecutar pruebas end-to-end.

## Pruebas
Para ejecutar las pruebas en modo headless utiliza:
```bash
npm test -- --browsers=ChromeHeadless --watch=false
```
Si Karma no encuentra Chrome puedes definir la variable `CHROME_BIN` de acuerdo con la ruta entregada por Puppeteer.

## Documentación
La documentación del código se genera con [Compodoc](https://compodoc.app/):
```bash
npm run docs
```
El resultado se aloja en la carpeta `documentation/` y puedes abrir `index.html` para navegarla.

## Despliegue
Para publicar la aplicación en **GitHub Pages** ejecuta:
```bash
npm run deploy
```
La aplicación quedará disponible en `https://<usuario>.github.io/pinna-costa-angular/`.

### Publicar los archivos JSON
Puedes alojar `my-json-repo-pina-costa/` en tu propio repositorio y publicarlo en GitHub Pages:
```bash
cd my-json-repo-pina-costa
git init
git add .
git commit -m "Datos para la API"
git remote add origin https://github.com/<usuario>/my-json-repo-pina-costa.git
git push -u origin main
npx gh-pages -d .
```

## Docker
1. Verifica que Docker esté instalado:
   ```bash
   docker --version
   ```
2. Construye y ejecuta la imagen:
   ```bash
   docker build -t pina-costa-angular .
   docker run --rm -p 8080:80 pina-costa-angular
   ```
   La aplicación estará disponible en <http://localhost:8080/>.

### Despliegue en la nube con Docker
1. Etiqueta la imagen y súbela a un registro público:
   ```bash
   docker tag pina-costa-angular <usuario>/pinna-costa-angular:latest
   docker push <usuario>/pinna-costa-angular:latest
   ```
2. En la plataforma de contenedores de tu preferencia ejecuta:
   ```bash
   docker run -d -p 80:80 <usuario>/pinna-costa-angular:latest
   ```
   Finalmente comparte la URL pública proporcionada por el proveedor.

---
Tablero de tareas en Trello: <https://trello.com/invite/b/6841b7501513a7c851f63262/ATTI3972defad988bed90611a1ea7585c395258AECA5/pina-costa>
