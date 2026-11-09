# Victoria — Home Health & Spa

Sitio multipágina en Next.js App Router, React y TypeScript. Rutas: `/`, `/especialidades`, `/experiencia`, `/nosotros` y `/contacto`.

Dirección visual «Santuario cálido»: base marfil y arena, azul navy para contraste, dorado como acento y un motivo de arco en las imágenes. Tokens de diseño (color, tipo, espaciado) en `src/app/globals.css`; secciones en `src/app/_components/`. Solo el encabezado/menú, el acordeón de especialidades y la animación de entrada son componentes de cliente.

Tipografía: Cormorant Garamond para títulos (Google Fonts, licencia OFL, servida por `next/font`) y Figtree (Google Fonts, licencia OFL) para el texto. `public/fonts/CreatoDisplay-Regular.otf` ya no se usa.

```bash
npm install
npm run dev
```

`npm run build` compila producción. `npm run typecheck` verifica los tipos.

## Contenido

Servicios y teléfonos transcritos del catálogo de Victoria Home Health and Spa (edición 2021–2022). Datos editables en `src/app/services.ts`. Confirmar vigencia de oferta y canales antes de publicar. El sitio no procesa reservas ni recopila datos médicos; los enlaces de contacto abren WhatsApp o el teléfono del visitante.

Las fotografías de las secciones interiores se extrajeron del catálogo. El retrato del hero y su detalle de spa siguen siendo fotografías provisionales de Unsplash. Imágenes locales en `public/images/`.
