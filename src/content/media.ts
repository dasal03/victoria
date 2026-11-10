/**
 * Inventario de fotografía.
 *
 * No hay fotografías autorizadas de Victoria en esta fase. Cada espacio usa una
 * fotografía editorial de REFERENCIA (Unsplash, licencia libre) que marca la
 * dirección de arte: claroscuro, piel natural, espacios cálidos. Ninguna
 * muestra personal, pacientes ni instalaciones de Victoria, y los textos
 * alternativos lo describen tal cual es.
 *
 * `brief` sigue siendo el encargo para la producción fotográfica propia.
 * Para sustituir: coloca el archivo en /public/images/<carpeta>/, rellena
 * `src`, `width` y `height`, y borra `reference`. `src` siempre tiene prioridad.
 */

export type Tone = 'ink' | 'ivory' | 'stone';

export type ReferencePhoto = {
  /** Identificador de images.unsplash.com (sin el prefijo `photo-`). */
  id: string;
  /** Página de la foto en Unsplash (créditos). */
  page: string;
  author: string;
  /** Punto focal para `object-position`, p. ej. "30% 40%". */
  focus?: string;
};

export type MediaSlot = {
  /** Texto alternativo de lo que se ve en la imagen actual. */
  alt: string;
  /** Brief del encuadre que debe producirse con material propio. */
  brief: string;
  tone: Tone;
  reference?: ReferencePhoto;
  src?: string;
  width?: number;
  height?: number;
};

const ref = (id: string, slug: string, author: string, focus?: string): ReferencePhoto => ({
  id,
  page: `https://unsplash.com/photos/${slug}`,
  author,
  focus,
});

export const media = {
  heroMain: {
    alt: 'Retrato de perfil en blanco y negro sobre fondo negro',
    brief: 'Retrato editorial vertical sobre fondo negro, luz lateral de ventana, piel natural. Persona real autorizada.',
    tone: 'ink',
    reference: ref('1541715301255-12a4839b424a', 'tSX6E9UextA', 'Alexander Krivitskiy', '30% 35%'),
  },
  heroDetail: {
    alt: 'Detalle de manos en penumbra',
    brief: 'Detalle cerrado de manos: gesto de acompañamiento, luz cálida rasante.',
    tone: 'ink',
    reference: ref('1447619297994-b829cc1ab44a', 'iQWvVYMtv1k', 'Milada Vigerova', '55% 50%'),
  },
  heroTexture: {
    alt: 'Luz de ventana y sombras sobre una superficie clara',
    brief: 'Plano abstracto: luz natural sobre los materiales reales de Victoria.',
    tone: 'ivory',
    reference: ref('1543067361-5521e0ed8f3d', 'Ai1DGl5ED5g', 'Augustine Wong', '50% 40%'),
  },
  brandIntro: {
    alt: 'Escalera de arquitectura minimalista con luz cálida',
    brief: 'Espacio real de Victoria: recepción o circulación, encuadre vertical y arquitectónico.',
    tone: 'ivory',
    reference: ref('1601993957728-1e56ab70c5a8', '0B7ijYKaKcE', 'Alesia Kazantceva', '50% 55%'),
  },
  featuredAntiaging: {
    alt: 'Retrato editorial de una mujer con la mano junto al cuello, fondo oscuro',
    brief: 'Editorial de bienestar: retrato sereno, piel con textura natural, sin antes/después ni promesas de resultado.',
    tone: 'ink',
    reference: ref('1536970133011-278d129e072e', 'o3c8SD-oJeM', 'Vinicius "amnx" Amano', '50% 30%'),
  },
  featuredAntiagingDetail: {
    alt: 'Retrato de perfil con luz cálida sobre fondo oscuro',
    brief: 'Segundo recorte de la campaña: detalle de piel, hombro o perfil con luz cálida.',
    tone: 'ink',
    reference: ref('1563170446-9c3c0622d8a9', '6eFmG1qWxJI', 'Olena Bohovyk', '45% 40%'),
  },
  /* Una imagen independiente por especialidad (sección Especialidades) */
  specPlastica: {
    alt: 'Retrato natural de una mujer con luz suave',
    brief: 'Consulta de valoración en cirugía plástica: conversación, gesto, sin instrumental quirúrgico.',
    tone: 'stone',
    reference: ref('1643932919088-53349a7c3385', 'k8AWNNCry-0', 'see plus', '45% 30%'),
  },
  specBariatrica: {
    alt: 'Mujer vestida de blanco descansando en un sofá crema con luz cálida',
    brief: 'Bienestar y vitalidad; sin cuerpos antes/después ni mensajes sobre el peso.',
    tone: 'ink',
    reference: ref('1769256618547-0f7a4b25ec61', 'EouDcfj0Owc', 'Vadim Yefremov', '50% 55%'),
  },
  specGeneral: {
    alt: 'Mano descansando sobre una superficie negra',
    brief: 'Detalle de cuidado: manos del equipo, sin instrumental ni quirófano.',
    tone: 'ink',
    reference: ref('1640215708038-745c57e4d512', '_mXwYGqMDR8', 'Sam Badmaeva', '50% 55%'),
  },
  specOrtopedia: {
    alt: 'Bailarina en movimiento sobre fondo oscuro',
    brief: 'Movimiento y articulaciones: gesto atlético o de danza.',
    tone: 'ink',
    reference: ref('1597754298097-fb51c3ec8ac8', '0mqcCmuWNlc', 'Alexander Jawfox', '50% 35%'),
  },
  specAntiaging: {
    alt: 'Primer plano de un rostro con un haz de luz cálida',
    brief: 'Piel con textura natural y luz cálida; sin promesas de resultado.',
    tone: 'ink',
    reference: ref('1551184451-76b762941ad6', 'b2bXKspL5MY', 'Kamila Maciejewska', '50% 45%'),
  },
  specGinecologia: {
    alt: 'Retrato de perfil de una mujer con luz cálida',
    brief: 'Retrato sereno y respetuoso; trato cercano.',
    tone: 'ink',
    reference: ref('1575000998090-b1ceb12a9aa1', 'OHxW268bcMY', 'Marshal Quast', '50% 35%'),
  },
  specDolor: {
    alt: 'Mano apoyada sobre el cuello, en blanco y negro',
    brief: 'Gesto de alivio o cuidado; sin dramatizar el dolor.',
    tone: 'stone',
    reference: ref('1574107063326-75c9ceb48938', 'vG8eLBOfrLU', 'Mimipic Photography', '50% 40%'),
  },
  specOdontologia: {
    alt: 'Mujer sonriendo, en blanco y negro',
    brief: 'Sonrisa natural, encuadre editorial; sin instrumental odontológico.',
    tone: 'stone',
    reference: ref('1544457073-505b76b886de', 'mthxHfkQIEs', 'Alexander Krivitskiy', '50% 40%'),
  },
  specImagenologia: {
    alt: 'Ondas abstractas de luz dorada sobre fondo oscuro',
    brief: 'Abstracción de la imagen diagnóstica; equipos reales solo si están verificados.',
    tone: 'ink',
    reference: ref('1685625971503-ef1f82128939', 'V8_m9CZwzgw', 'Visax', '50% 50%'),
  },
  /* Retratos de testimonios PROVISIONALES (prototipo): personas de stock, no pacientes reales */
  reviewLaura: {
    alt: 'Retrato de una mujer sonriendo',
    brief: 'Retrato de paciente real que haya autorizado su testimonio e imagen.',
    tone: 'ivory',
    reference: ref('1573294705900-9623cfc746b7', 'COOrCB6qqO0', 'Mehran Hadad', '50% 30%'),
  },
  reviewDaniela: {
    alt: 'Retrato de una mujer sonriendo sobre fondo oscuro',
    brief: 'Retrato de paciente real que haya autorizado su testimonio e imagen.',
    tone: 'ink',
    reference: ref('1593207129063-c99ebcf14ea4', 'YYg7LYcqJgM', 'hesam Link', '50% 30%'),
  },
  reviewValentina: {
    alt: 'Retrato sereno de una mujer sobre fondo gris',
    brief: 'Retrato de paciente real que haya autorizado su testimonio e imagen.',
    tone: 'stone',
    reference: ref('1667053508464-eb11b394df83', 'JRa8lCQQhSs', 'Dmitry Ganin', '50% 30%'),
  },
  reviewCamila: {
    alt: 'Retrato natural de una mujer sobre fondo claro',
    brief: 'Retrato de paciente real que haya autorizado su testimonio e imagen.',
    tone: 'ivory',
    reference: ref('1533933269825-da140ad3132f', 'oifclaPX5oM', 'Matt Reiter', '50% 30%'),
  },
  howItWorks: {
    alt: 'Manos juntas en penumbra',
    brief: 'Primera conversación con el equipo: gesto de escucha y acompañamiento.',
    tone: 'ink',
    reference: ref('1664829406355-d5ea0a3561fd', 'JUUtIjPqUtU', 'Mahdi Bafande', '50% 45%'),
  },
  lodging: {
    alt: 'Habitación en penumbra con lámpara de luz cálida',
    brief: 'Habitación real ofrecida a pacientes, luz cálida de tarde.',
    tone: 'ink',
    reference: ref('1552858725-a19e7fcd3ac4', 'F2SrBdv9swk', 'Jp Valery', '40% 60%'),
  },
  transport: {
    alt: 'Detalle de asiento de cuero en el interior de un vehículo',
    brief: 'Llegada o traslado acompañado; sin marcas de terceros visibles.',
    tone: 'ink',
    reference: ref('1746350359617-5389d5d3983f', 'buMAEjqZPA0', 'Ansis Kančs', '50% 60%'),
  },
  postOp: {
    alt: 'Manos durante un masaje terapéutico',
    brief: 'Momento de cuidado y descanso; trato humano, sin exponer heridas.',
    tone: 'ink',
    reference: ref('1598901865264-4f5f30954532', '83RTpUBjyYY', 'Katherine Hanlon', '50% 50%'),
  },
  complementary: {
    alt: 'Toallas dobladas sobre un banco de madera con luz cálida',
    brief: 'Bodegón: alimentación, artículos de recuperación, textiles.',
    tone: 'ink',
    reference: ref('1790756548569-3c561d78f591', 'pxqnqB1DsWs', 'HUUM', '50% 70%'),
  },
  facilities: {
    alt: 'Sala de espera de diseño sobrio con luz tenue',
    brief: 'Panorámica de instalaciones verificadas.',
    tone: 'stone',
    reference: ref('1693578538512-fc66f318c833', 'npE_I2GzpHY', 'Sherzod Gulomov', '50% 55%'),
  },
  closing: {
    alt: 'Luz cálida filtrándose a través de una cortina en un interior oscuro',
    brief: 'Plano amplio y sereno para el cierre de página.',
    tone: 'ink',
    reference: ref('1706486540611-3b4221f1c3ad', 'EnVOIeXh7fg', 'Devon MacKay', '50% 50%'),
  },
} satisfies Record<string, MediaSlot>;

export type MediaKey = keyof typeof media;

/** Fotografías de referencia en uso, para créditos. */
export const referenceCredits = Object.values(media as Record<string, MediaSlot>)
  .map((m) => m.reference)
  .filter((r): r is ReferencePhoto => Boolean(r));

const UNSPLASH_WIDTHS = [480, 800, 1200, 1600, 2200];

export function referenceUrl(r: ReferencePhoto, width: number) {
  return `https://images.unsplash.com/photo-${r.id}?auto=format&fit=crop&q=72&w=${width}`;
}

export function referenceSrcSet(r: ReferencePhoto) {
  return UNSPLASH_WIDTHS.map((w) => `${referenceUrl(r, w)} ${w}w`).join(', ');
}
