# Victoria — Home Health & Spa

Sitio multipágina en Next.js App Router, React y TypeScript. Rutas: `/`, `/especialidades`, `/experiencia`, `/nosotros` y `/contacto`.

Dirección visual «Santuario cálido»: base marfil y arena, azul navy para contraste, dorado como acento y un motivo de arco en las imágenes. Tokens de diseño (color, tipo, espaciado) en `src/app/globals.css`; secciones en `src/app/_components/`. Solo el encabezado/menú, el acordeón de especialidades y la animación de entrada son componentes de cliente.

Tipografía: Playfair Display para títulos y Manrope para el texto (Google Fonts, licencia OFL, servidas por `next/font`). `public/fonts/CreatoDisplay-Regular.otf` ya no se usa.

```bash
npm install
npm run dev
```

`npm run build` compila producción. `npm run typecheck` verifica los tipos.

## Contenido

Servicios y teléfonos transcritos del catálogo de Victoria Home Health and Spa (edición 2021–2022). Datos editables en `src/app/services.ts`. Confirmar vigencia de oferta y canales antes de publicar. El sitio no procesa reservas ni recopila datos médicos; los enlaces de contacto abren WhatsApp o el teléfono del visitante.

Las fotografías de las secciones interiores se extrajeron del catálogo. La foto del hero y la foto redonda de «Experiencia del paciente» son provisionales de Unsplash (licencia gratuita), cargadas desde `images.unsplash.com` (permitido en `next.config.ts`); reemplazarlas por fotografía propia de Victoria antes de publicar. Imágenes locales en `public/images/`.
