import { media, type MediaSlot } from './media';

/**
 * Testimonios.
 *
 * PROVISIONALES: nombres, textos, calificaciones y retratos son INVENTADOS para
 * el prototipo (por petición del cliente) y los retratos son fotografías de
 * stock, no pacientes. La sección solo los muestra en modo de revisión
 * (VITE_SHOW_PENDING distinto de "false"). Antes de publicar, sustituir por
 * testimonios reales con autorización escrita del paciente para usar su
 * nombre, opinión e imagen, y marcar `placeholder: false`.
 */

export type Testimonial = {
  name: string;
  /** Especialidad o servicio sobre el que opina. */
  service: string;
  quote: string;
  /** Fragmento de la cita que se destaca visualmente. */
  highlight?: string;
  rating: number;
  photo: MediaSlot;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Laura Martínez',
    service: 'Cirugía plástica',
    quote:
      'Desde la primera valoración sentí que me escuchaban. Me explicaron cada paso con calma y el acompañamiento después del procedimiento fue igual de cercano.',
    highlight: 'sentí que me escuchaban',
    rating: 5,
    photo: media.reviewLaura,
    placeholder: true,
  },
  {
    name: 'Daniela Rojas',
    service: 'Medicina antiaging',
    quote:
      'La atención es muy personalizada. Resolvieron todas mis dudas sin presión y me ayudaron con el alojamiento y los traslados durante mi visita a Barranquilla.',
    highlight: 'muy personalizada',
    rating: 5,
    photo: media.reviewDaniela,
    placeholder: true,
  },
  {
    name: 'Valentina Gómez',
    service: 'Ginecología',
    quote:
      'Un trato respetuoso y profesional en todo momento. Los espacios son tranquilos y el equipo siempre estuvo pendiente de mí.',
    highlight: 'respetuoso y profesional',
    rating: 4.9,
    photo: media.reviewValentina,
    placeholder: true,
  },
  {
    name: 'Camila Herrera',
    service: 'Medicina del dolor',
    quote:
      'Me orientaron con claridad sobre las opciones disponibles y me sentí acompañada durante todo el proceso, incluso después de la consulta.',
    highlight: 'me sentí acompañada',
    rating: 4.8,
    photo: media.reviewCamila,
    placeholder: true,
  },
];
