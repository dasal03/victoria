export const specialties = [
{ name: 'Cirugía plástica, estética y reconstructiva', description: 'Procedimientos faciales y corporales con una valoración individual como punto de partida.', image: 'plastic', items: ['Blefaroplastia', 'Rinoplastia', 'Bichectomía', 'Otoplastia', 'Implantes de mamas y glúteos', 'Liposucción', 'Abdominoplastia', 'Lipotransferencia de grasa a glúteos'] },
{ name: 'Cirugía bariátrica', description: 'Consulta especializada en manejo de la obesidad, con análisis de nutrición y medicina interna, apoyo y control postoperatorio.', image: 'diagnostic', items: ['Manga gástrica', 'Bypass gástrico en Y de Roux', 'Minibypass gástrico', 'Cirugía de revisión', 'Manejo de complicaciones', 'Cirugía mínimamente invasiva', 'Gastrectomía y esofaguectomía', 'Cirugía de hiato esofágico y acalasia', 'Esplenectomía y adrenalectomía'] },
{ name: 'Cirugía general', description: 'Manejo interdisciplinario de patologías quirúrgicas, incluyendo pacientes con múltiples comorbilidades.', image: 'diagnostic', items: ['Cirugía de urgencias', 'Hospitalización', 'Trauma y urgencias no traumáticas', 'Cirugía gastrointestinal', 'Laparoscopia', 'Apendicectomía', 'Cirugía de colon'] },
{ name: 'Ortopedia', description: 'Servicios orientados al cuidado del movimiento y la recuperación física.', image: 'orthopedics', items: ['Aplicación de PRP y ácido hialurónico', 'Cirugías', 'Reemplazos', 'Fisioterapia'] },
{ name: 'Medicina antiaging', description: 'Alternativas de cuidado que se definen de acuerdo con la valoración y las necesidades de cada persona.', image: 'antiaging', items: ['Sueroterapia', 'Cámara hiperbárica', 'Tratamiento de células madre', 'Rellenos de grasa propia', 'Plasma rico en plaquetas'] },
{ name: 'Ginecología', description: 'Atención ginecológica, controles y procedimientos especializados.', image: 'diagnostic', items: ['Controles de ginecología', 'Histeroscopia', 'Toma de biopsias', 'Aplicación de dispositivos', 'Control de embarazos', 'Ecografías', 'Despigmentación y depilación', 'Cirugía estética reconstructiva y rediseño vulvovaginal', 'Cirugía de piso pélvico', 'Embellecimiento vaginal con láser Erbio'] },
{ name: 'Medicina del dolor', description: 'Atención especializada para el manejo del dolor crónico.', image: 'doctor', items: ['Tratamientos para dolores crónicos', 'Bomba elastomérica: administración intravenosa de medicamentos controlada por el especialista'] },
{ name: 'Odontología', description: 'Cuidado de la salud oral y tratamientos para tu sonrisa.', image: 'diagnostic', items: ['Diseño de sonrisa', 'Blanqueamiento', 'Implantes', 'Ortodoncia', 'Endodoncia', 'Exodoncia'] },
{ name: 'Imagenología', description: 'Estudios de diagnóstico por imágenes para apoyar la evaluación médica.', image: 'diagnostic', items: ['Resonancias', 'Tomografía', 'Ecografías', 'Radiografías', 'Mamografías', 'Densitometría ósea'] },
];
export const logistics = [
{ name: 'Alojamiento', image: 'stay', description: 'Una estancia pensada para tu recuperación. La duración depende del procedimiento y de tus necesidades de cuidado.' },
{ name: 'Alimentación', image: 'food', description: 'Desayuno, almuerzo y cena como parte del acompañamiento durante tu estancia.' },
{ name: 'Transporte', image: 'travel', description: 'Traslados desde y hacia el aeropuerto, a tus citas médicas y a las diligencias que necesites realizar.' },
{ name: 'Cuidados postquirúrgicos', image: 'nursing', description: 'Acompañamiento de enfermería para la atención y el cuidado después de tu procedimiento.' },
{ name: 'Visitas médicas generales', image: 'doctor', description: 'Seguimiento médico para revisar la evolución de tu recuperación.' },
{ name: 'Artículos para tu recuperación', image: 'garments', description: 'Fajas, medias y fajón postquirúrgico, de acuerdo con las indicaciones de tu atención.' },
{ name: 'Masajes postquirúrgicos', image: 'massage', description: 'Acompañamiento durante el proceso de recuperación, según la valoración y las indicaciones de tu equipo tratante.' },
];
export const whatsapp = 'https://wa.me/573004418000?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20una%20valoraci%C3%B3n%20en%20Victoria.';
export const phones = [
  { label: '+57 300 441 8000', href: 'tel:+573004418000' },
  { label: '+57 324 612 8888', href: 'tel:+573246128888' },
];
export const instagram = { handle: '@victoria_h_h_s', href: 'https://www.instagram.com/victoria_h_h_s/' };
export const navLinks = [
  { label: 'Especialidades', href: '/especialidades' },
  { label: 'Experiencia del paciente', href: '/experiencia' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

/**
 * Patient testimonials. Only real reviews, published with the patient's permission.
 * While this list is empty the reviews section shows clearly-marked examples in development
 * and is hidden in production.
 */
/** `photo`: a URL or /images path, only with the patient's consent. */
export const testimonials: { quote: string; name: string; photo?: string }[] = [];
