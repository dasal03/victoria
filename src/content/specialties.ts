import { media, type MediaSlot } from './media';

/**
 * Inventario de especialidades — fuente: catálogo de servicios 2021–2022.
 *
 * Ninguna especialidad está confirmada como vigente. `status: 'pending'`
 * indica que el cliente debe validar disponibilidad, alcance y profesionales.
 * Las descripciones son orientativas (qué abarca el área), no promesas de
 * tratamiento ni de resultado.
 */

export type GroupId = 'cirugia' | 'especializada' | 'diagnostico' | 'estetica';

export type Specialty = {
  slug: string;
  name: string;
  group: GroupId;
  summary: string;
  intro: string;
  /** Procedimientos confirmados por el cliente. Vacío hasta validar. */
  procedures: string[];
  status: 'pending' | 'confirmed';
  /** Aparece en la selección de la página de inicio. */
  featuredOnHome?: boolean;
  image?: MediaSlot;
};

export const groups: Record<GroupId, { label: string; description: string }> = {
  cirugia: {
    label: 'Procedimientos quirúrgicos',
    description: 'Áreas quirúrgicas con valoración previa y acompañamiento durante el proceso.',
  },
  especializada: {
    label: 'Atención especializada',
    description: 'Consulta y seguimiento en áreas médicas específicas.',
  },
  diagnostico: {
    label: 'Diagnóstico',
    description: 'Estudios de apoyo para orientar decisiones médicas.',
  },
  estetica: {
    label: 'Estética y antiaging',
    description: 'Medicina orientada al bienestar y al cuidado a lo largo del tiempo.',
  },
};

export const groupOrder: GroupId[] = ['cirugia', 'estetica', 'especializada', 'diagnostico'];

export const specialties: Specialty[] = [
  {
    slug: 'cirugia-plastica',
    name: 'Cirugía plástica, estética y reconstructiva',
    group: 'cirugia',
    summary: 'Procedimientos de cirugía plástica con fines estéticos o reconstructivos.',
    intro:
      'Un área que abarca procedimientos estéticos y reconstructivos. Cada caso comienza con una valoración en la que se revisan expectativas, alternativas y condiciones del paciente.',
    procedures: [],
    status: 'pending',
    image: media.specPlastica,
    featuredOnHome: true,
  },
  {
    slug: 'cirugia-bariatrica',
    name: 'Cirugía bariátrica',
    group: 'cirugia',
    summary: 'Opciones quirúrgicas relacionadas con el manejo del peso.',
    intro:
      'Cirugía orientada al manejo del peso cuando el criterio médico lo considera adecuado. La indicación siempre depende de una valoración profesional.',
    procedures: [],
    status: 'pending',
    image: media.specBariatrica,
    featuredOnHome: true,
  },
  {
    slug: 'cirugia-general',
    name: 'Cirugía general',
    group: 'cirugia',
    summary: 'Valoración y procedimientos de cirugía general.',
    intro: 'Atención quirúrgica general, desde la valoración inicial hasta la orientación sobre los siguientes pasos.',
    procedures: [],
    status: 'pending',
    image: media.specGeneral,
  },
  {
    slug: 'ortopedia',
    name: 'Ortopedia',
    group: 'cirugia',
    summary: 'Atención del sistema musculoesquelético: huesos, articulaciones y movimiento.',
    intro: 'Valoración de condiciones del sistema musculoesquelético y orientación sobre alternativas de manejo.',
    procedures: [],
    status: 'pending',
    image: media.specOrtopedia,
    featuredOnHome: true,
  },
  {
    slug: 'medicina-antiaging',
    name: 'Medicina antiaging',
    group: 'estetica',
    summary: 'Medicina enfocada en el bienestar y el cuidado a lo largo del tiempo.',
    intro:
      'Consulta orientada al bienestar y al envejecimiento saludable. Las alternativas disponibles se definen en consulta, según las necesidades de cada persona.',
    procedures: [],
    status: 'pending',
    image: media.specAntiaging,
    featuredOnHome: true,
  },
  {
    slug: 'ginecologia',
    name: 'Ginecología',
    group: 'especializada',
    summary: 'Consulta y seguimiento de la salud ginecológica.',
    intro: 'Atención de la salud ginecológica con un trato cercano y respetuoso.',
    procedures: [],
    status: 'pending',
    image: media.specGinecologia,
    featuredOnHome: true,
  },
  {
    slug: 'medicina-del-dolor',
    name: 'Medicina del dolor',
    group: 'especializada',
    summary: 'Valoración y manejo del dolor agudo o persistente.',
    intro: 'Un área dedicada a valorar el dolor y a orientar sobre las alternativas de manejo disponibles.',
    procedures: [],
    status: 'pending',
    image: media.specDolor,
  },
  {
    slug: 'odontologia',
    name: 'Odontología',
    group: 'especializada',
    summary: 'Atención de la salud oral.',
    intro: 'Consulta odontológica y orientación sobre tratamientos de salud oral.',
    procedures: [],
    status: 'pending',
    image: media.specOdontologia,
  },
  {
    slug: 'imagenologia',
    name: 'Imagenología',
    group: 'diagnostico',
    summary: 'Estudios de imagen de apoyo al diagnóstico.',
    intro: 'Estudios de imagen que apoyan la valoración y el seguimiento médico.',
    procedures: [],
    status: 'pending',
    image: media.specImagenologia,
  },
];

/** Especialidad destacada en la página de inicio. Ajustar cuando el cliente confirme su prioridad. */
export const featuredSpecialtySlug = 'medicina-antiaging';

export const getSpecialty = (slug: string) => specialties.find((s) => s.slug === slug);
export const specialtiesByGroup = (group: GroupId) => specialties.filter((s) => s.group === group);
export const specialtyPath = (slug: string) => `/especialidades/${slug}`;
