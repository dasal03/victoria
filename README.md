# Victoria Home Health & Spa: rediseño web

Rediseño editorial de Victoria Home Health & Spa (Barranquilla). Dirección de arte V2: negro, blanco y dorado
champagne, inspirada en el lenguaje visual de [verostudio.com](https://www.verostudio.com/).

## Ejecutar

```bash
npm install
npm run dev       # desarrollo
npm run build     # tsc + build de producción en dist/
npm run preview   # sirve dist/ en http://localhost:4173
npm run lint
```

Stack: **Vite + React 19 + TypeScript + React Router**. Sin librería de animación: el motion es CSS + `IntersectionObserver`.
Dependencias añadidas y por qué:

| Dependencia | Motivo |
|---|---|
| `react-router-dom` | URLs reales por página (`/especialidades/ginecologia`, etc.) |
| `@fontsource-variable/noto-serif-display` | Fuente de títulos (estilo Victoria's Secret), servida localmente |
| `@fontsource-variable/hanken-grotesk` | Sans servida localmente, en lugar de Beausite Classic (ver Tipografía) |
| `playwright` (dev) | Capturas y pruebas de interacción en distintas resoluciones |

Es una SPA: el hosting debe redirigir todas las rutas a `index.html` (`public/_redirects` ya lo hace en Netlify; en otros servicios hay que configurar algo equivalente).

## Estructura

```
public/fonts/     louize-display.woff2 (fuente de titulares)
src/
  content/        ← ÚNICA fuente de datos: textos, servicios, contacto, fotografía
    site.ts         marca, contacto, redes, navegación, etiquetas de CTA
    specialties.ts  9 especialidades + 4 agrupaciones
    logistics.ts    7 servicios logísticos + 4 módulos editoriales
    media.ts        inventario fotográfico: brief + foto de referencia sustituible
    team.ts         equipo y credenciales (vacío a propósito)
  styles/
    fonts.css       @font-face de Louize Display
    tokens.css      paleta, temas de sección, escala tipográfica (clamp), motion
    base.css        tipografía global: titulares, descripciones, párrafos
  components/     Header, MobileNavigation (SiteMenu), Button (+ RollText, MixedLabel),
                  MixedTitle, Figure, SpecialtyCard, PatientExperienceCard,
                  ProcessStep, ContactCTA, ContactForm, Footer, PageIntro, Pending, Wordmark
  sections/home/  EditorialHero, BrandIntro, SpecialtyExplorer,
                  FeaturedService, PatientExperience, HowItWorks, TrustTeam
  pages/          Home, Specialties, SpecialtyDetail, Experience, About,
                  Contact, Legal, NotFound
```

## Decisiones de diseño (V2)

### Paleta

| Token | Valor | Uso |
|---|---|---|
| `--color-black` | `#111111` | Fondos editoriales de alto impacto, texto |
| `--color-white` | `#FFFFFF` | Información, servicios, máxima legibilidad |
| `--color-gold` | `#B89552` | Filetes, detalles, CTA de conversión. **No como texto sobre blanco** (2.9:1) |
| `--color-gold-light` | `#D5BD87` | Acentos y texto dorado sobre negro |
| `--color-ivory` | `#F4F0E8` | Solo para suavizar transiciones (sección de confianza, menú) |
| `--color-gray` | `#8A8985` | Texto secundario sobre negro (sobre blanco da 3.5:1) |
| `--color-border` | `#D8D3C9` | Filetes sobre claro |

Dos derivados para cumplir WCAG AA en texto pequeño sobre blanco: `--color-gray-ink` (`#5F5E5A`) y `--color-gold-ink` (`#8A6A2F`).
Cada sección declara su tema (`.on-dark`, `.on-ivory`) y los componentes usan `--bg`, `--fg`, `--muted`, `--line` y `--accent`.

### Tipografía

Se inspeccionó el CSS de verostudio.com. Usa **Louize Display** (205TF, regular y cursiva) para titulares, navegación,
botones y párrafos, y **Beausite Classic** (Fatype, 400/500, versión *WebTrial*) para frases cortas y UI.

| Rol | Fuente | Estado |
|---|---|---|
| Títulos (`--f-title`: h1, h2, hero, CTA final, frase del footer) | Noto Serif Display (OFL) | Alternativa libre más cercana a Victoria Two Display, la tipografía corporativa de victoriassecret.com (hecha a medida, no licenciable). Peso 330, anchura 90%. |
| Menú, botones y wordmark (`--f-display`) | Louize Display | Archivo entregado por el cliente en `public/fonts/`. Solo regular: la cursiva la sintetiza el navegador. |
| Párrafos (`--f-serif`) | Times New Roman | Fuente de sistema. |
| Columnas del footer (`--f-beausite`) | Beausite Classic | Archivo de prueba **sin tildes ni ñ** ("Cirugía" se ve "Cirugıa"); el cliente aceptó usarlo así en el footer. |
| Subtítulos y resto de la UI (`--f-sans`) | Hanken Grotesk (sustituta) | Sustituye a Beausite donde las tildes son críticas, hasta tener el archivo completo con licencia. |

**Licencias:** Louize Display y Beausite Classic son comerciales. Hace falta comprar la licencia web a 205TF y a Fatype antes de publicar el sitio.
Conviene pedir también `LouizeDisplay-Italic` para sustituir la cursiva sintetizada.

Lenguaje tipográfico:

- **Titulares** (`.h1`, `.h2`, `.display`): Noto Serif Display en MAYÚSCULAS completas y **sin cursiva** (decisión del cliente, 2026-11-04). Los `<em>` que quedan en el marcado se ven igual que el resto del título.
- **Descripciones:** subtítulo sans en mayúsculas y peso medio (`.h3`) + párrafo serif en negro (`.body`).
- **Sin rótulos pequeños** (número + etiqueta en versalitas) en ninguna sección.

### Composición

- **Hero:** retrato a sangre que mira hacia el espacio negativo, titular de gran escala que monta el borde de la foto, segundo recorte (manos) arriba a la derecha y CTA integrados. En móvil la foto va arriba, a sangre, con el titular sobre su pie.
- **Ritmo:** negro (hero) → blanco (manifiesto, especialidades) → negro (antiaging como campaña) → blanco (experiencia) → negro (cómo empezar) → marfil (confianza) → foto a sangre (CTA final) → negro (footer).
- **Tarjetas:** sin caja ni sombra; filete superior que se vuelve dorado al pasar el cursor.
- **Footer (estructura de Wolverine):** frase y CTA, 5 columnas, wordmark a ancho completo, franja legal y créditos fotográficos.

### Menú y botones (animación de la referencia)

- **Menú:** botón "◆ Menú" en píldora, wordmark centrado y CTA a la derecha. El panel se despliega con `clip-path` (0.5 s) y se recoge igual (0.4 s); enlaces gigantes con numeración romana, cada palabra rueda al pasar el cursor y la página activa lleva subrayado grueso. Contacto arriba a la derecha y especialidades y legales en cursiva abajo. Usa `<dialog>`: foco atrapado, Escape y fondo inerte.
- **CTA:** píldora con flecha minimalista. Al entrar en pantalla el fondo crece de abajo arriba (1 s, *ease-out-expo*) y el texto sube. Al pasar el cursor el texto rueda: sale por arriba y su copia entra por abajo (0.65 s, *ease-out-quart*).
- Con `prefers-reduced-motion` todo se muestra directamente, sin animación.

## Pendiente antes del lanzamiento

Las marcas **"Por validar"** muestran en pantalla lo que falta. Se ocultan con `VITE_SHOW_PENDING=false`.

1. **Licencias tipográficas** (Louize Display, Beausite Classic) y el archivo completo de Beausite.
2. **Datos de contacto** (`content/site.ts`): WhatsApp, teléfono, correo, dirección y horario. El botón "Contactar por WhatsApp" solo aparece cuando hay número.
3. **Redes sociales oficiales** (`site.social`).
4. **Logotipo oficial:** `Wordmark.tsx` es un wordmark tipográfico provisional, igual que `public/favicon.svg`. Falta también la imagen `og:image`.
5. **Fotografía:** todas las imágenes son **fotografías editoriales de referencia de Unsplash** (licencia libre), cargadas desde `images.unsplash.com`. No muestran personal, pacientes ni instalaciones de Victoria; los textos alternativos describen lo que se ve y el footer lista los créditos. Para sustituir una, se rellena `src`, `width` y `height` en `content/media.ts` y se borra `reference`. Cada entrada conserva su `brief` para la producción propia.
6. **Vigencia de servicios:** las 9 especialidades y los 7 servicios logísticos vienen del catálogo 2021–2022, y `procedures` está vacío en todas.
7. **Línea prioritaria:** `featuredSpecialtySlug` apunta a medicina antiaging como hipótesis.
8. **Equipo, credenciales e instalaciones** (`content/team.ts`).
9. **Formulario:** definir `VITE_CONTACT_ENDPOINT` (ver `.env.example`). Sin él, el formulario valida los datos pero no envía nada, y así se lo dice al usuario. Nunca simula un envío correcto.
10. **Textos legales:** política de tratamiento de datos (Ley 1581 de 2012) y aviso de privacidad.
11. **Copy:** todos los textos son propuestas pendientes de aprobación, incluido el titular "El arte de cuidar de ti". No se prometen resultados médicos.
12. **SEO:** el título, la descripción y el canonical se fijan por página en el cliente. Si se necesita un SEO más fuerte, conviene prerenderizar (SSG).
13. **Testimonios** (`content/testimonials.ts`): los cuatro testimonios del inicio (nombres, textos, calificaciones y retratos de stock) son **inventados para el prototipo** y solo se muestran en modo de revisión (`VITE_SHOW_PENDING`). Sustituir por testimonios reales con autorización escrita del paciente y marcar `placeholder: false`.
