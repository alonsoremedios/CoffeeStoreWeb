# ☕ Brunch — Coffee Roasters Landing Page

Landing page moderna, minimalista y estética para una cafetería de especialidad ficticia ("Brunch"). Diseñada siguiendo una metodología **Mobile-First**, con estética retro e ilustraciones de personajes inspirados en la cultura del café.

---

### 🌐 Demo en Vivo

Podés ver y probar el proyecto funcionando en tiempo real acá:

👉 **[Ver Brunch en Vivo](https://alonsoremedios.github.io/CoffeeStoreWeb/)**

## Identidad Visual y Paleta

- **Forest Green:** `#12462B` (Fondo principal y contrastes destacados)
- **Soft Pink:** `#F9CEE1` (Header, footer y detalles)
- **Cream / White:** `#FFFFFF` (Tarjetas y contenedor de contenido)
- **Tipografías:**
  - `Caprasimo`: Identidad retro y títulos principales.
  - `Outfit`: Encabezados destacados (`h3` del Hero).
  - `DM Sans`: Párrafos, enlaces de navegación e información descriptiva.

---

## Características y Funcionalidades

- **Enfoque Mobile-First:** Maquetado inicial pensado para smartphones y adaptado de forma progresiva a pantallas de escritorio mediante Media Queries (`min-width: 768px`).
- **Navegación Interactiva:**
  - Menú hamburguesa dinámico con iconos de Material Symbols (`menu` / `close`).
  - Lógica en JavaScript nativo para abrir/cerrar y cerrar al hacer clic fuera del menú.
  - Efecto de desenfoque de fondo en el contenido con `:has(.nav-menu.active)` y CSS transitions.
- **Carrusel Horizontal Nativo:** Contenedor de mini cards con `overflow-x: auto` y `scroll-snap-type: x mandatory` para navegación táctil fluida sin librerías externas.
- **Estructura Semántica:** Uso de `<header>`, `<nav>`, `<section>`, `<article>` y `<footer>` respetando las pautas modernas de accesibilidad web.

---

## Tecnologías Utilizadas

- **HTML5:** Marcado semántico y estructurado.
- **CSS3:** Flexbox, Media Queries, CSS Transitions, `:has()` pseudo-class, Box Model.
- **JavaScript (Vanilla):** Manipulación del DOM y gestión de eventos de usuario (`click`).

---

## Estructura del Proyecto

```text
├── index.html          # Estructura principal semántica
├── styles.css          # Estilos globales y reglas responsive
├── script.js           # Lógica interactiva del menú
├── assets/             # Ilustraciones y recursos visuales
└── README.md           # Documentación del proyecto
