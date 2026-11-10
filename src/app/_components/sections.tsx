import Image from 'next/image';
import Link from 'next/link';
import { logistics, phones, instagram, specialties, testimonials, whatsapp } from '../services';
import { Arrow, ArrowUpRight, Sprig, WhatsAppIcon } from './icons';

type HeadingLevel = { as?: 'h1' | 'h2' };
// Provisional Unsplash photos (free licence) until Victoria supplies its own photography.
const heroPhoto = 'https://images.unsplash.com/photo-1728848901352-cff8d51d3e24?auto=format&fit=crop&w=2400&q=80';
const facePhoto = 'https://images.unsplash.com/photo-1728727187824-85f1c610a671?auto=format&fit=crop&w=400&q=70';
const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

export function Hero() {
  return (
    <div className="hero-frame">
      <section className="hero" aria-labelledby="hero-title">
        <Image className="hero-bg photo" src={heroPhoto} alt="" fill priority sizes="100vw" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-aside">
            <p>Atención médica y bienestar, con una experiencia pensada alrededor de cada persona.</p>
            <a className="btn btn-outline-light" href={whatsapp} {...external}>Solicitar valoración <Arrow /></a>
          </div>
          <div className="hero-title">
            <h1 id="hero-title" className="display">El arte de <em>cuidar de ti.</em></h1>
            <p className="hero-tagline">Medicina, bienestar y cuidado en Barranquilla.</p>
          </div>
        </div>
      </section>
      <AreasStrip />
    </div>
  );
}

const areas = ['Cirugía plástica', 'Medicina antiaging', 'Ortopedia', 'Ginecología', 'Odontología', 'Recuperación postquirúrgica', 'Alojamiento y traslados'];

export function AreasStrip() {
  const list = (hidden?: boolean) => <ul aria-hidden={hidden || undefined}>{areas.map(a => <li key={a}>{a}</li>)}</ul>;
  return (
    <section className="strip" aria-label="Áreas de atención">
      <div className="strip-track">{list()}{list(true)}</div>
    </section>
  );
}

export function Statement() {
  return (
    <section className="section statement">
      <div className="container">
        <p className="statement-text" data-reveal>Hay decisiones que merecen <em>sentirse acompañadas</em>. Por eso reunimos servicios médicos y logísticos <span className="nowrap-lg">diseñados <span className="nowrap"><span className="sprig-wrap"><Sprig /></span> <strong>a tu medida</strong>.</span></span></p>
      </div>
    </section>
  );
}

export function Intro({ as: Heading = 'h2' }: HeadingLevel) {
  return (
    <section className="about" aria-labelledby="intro-title">
      <figure className="about-image">
        <Image className="photo" src="/images/massage.jpg" alt="Masaje postquirúrgico en una camilla con sábanas blancas" fill sizes="(max-width: 900px) 100vw, 50vw" />
      </figure>
      <div className="about-copy" data-reveal>
        <Heading id="intro-title" className="h2">Cuidamos de <em>ti</em>, en cada detalle.</Heading>
        <p>En Victoria Home Health &amp; Spa pensamos en tu seguridad, tu comodidad y en lo que necesitas antes, durante y después de tu procedimiento.</p>
        <figure className="about-thumb"><Image className="photo" src="/images/care.jpg" alt="Masaje con piedras calientes en un ambiente de spa" fill sizes="200px" /></figure>
        <p className="about-quote">Tu tranquilidad también es <em>parte del cuidado</em>.</p>
        <Link href="/especialidades" className="text-link">Conoce nuestras especialidades <Arrow /></Link>
      </div>
    </section>
  );
}

const featured = [
  { index: 0, label: 'Cirugía plástica' },
  { index: 4, label: 'Medicina antiaging' },
  { index: 3, label: 'Ortopedia' },
  { index: 6, label: 'Medicina del dolor' },
];

export function SpecialtyCards() {
  return (
    <section className="section services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2 id="services-title" className="h2">Nuestras <em>especialidades</em></h2>
          <p>Explora nuestras áreas de atención. Cada camino comienza con una valoración individual.</p>
        </div>
        <ul className="cards">
          {featured.map(({ index, label }, i) => {
            const s = specialties[index];
            return (
              <li key={s.name} data-reveal style={{ '--i': i } as React.CSSProperties}>
                <Link className="card" href={`/especialidades#especialidad-${index + 1}`}>
                  <Image className="photo" src={`/images/${s.image}.jpg`} alt="" fill sizes="(max-width: 640px) 92vw, (max-width: 1100px) 46vw, 24vw" />
                  <span className="card-pill">{label}</span>
                  <span className="card-arrow" aria-hidden="true"><ArrowUpRight /></span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="/especialidades" className="text-link services-more">Ver las {specialties.length} especialidades <Arrow /></Link>
      </div>
    </section>
  );
}

type Logistic = (typeof logistics)[number];

/** Four cards: tall outer cards, shorter middle cards under the note (as in the reference). */
function RitualGroup({ items, note, full }: { items: Logistic[]; note?: string; full: boolean }) {
  return (
    <div className={`rituals-grid${items.length === 3 ? ' is-three' : ''}`}>
      {note && <p className="rituals-note">{note}</p>}
      {items.map((service, i) => {
        const body = (
          <>
            <Image className="photo" src={`/images/${service.image}.jpg`} alt={`${service.name}, imagen del catálogo de servicios`} fill sizes="(max-width: 640px) 92vw, (max-width: 1100px) 46vw, 24vw" />
            <span className="card-pill">{service.name}</span>
            {full ? <p className="ritual-caption">{service.description}</p> : <span className="card-arrow" aria-hidden="true"><ArrowUpRight /></span>}
          </>
        );
        const style = { '--i': i } as React.CSSProperties;
        return full
          ? <article key={service.name} className={`ritual ritual-${i}`} data-reveal style={style}>{body}</article>
          : <Link key={service.name} href="/experiencia" className={`ritual ritual-${i}`} data-reveal style={style}>{body}</Link>;
      })}
    </div>
  );
}

export function Experience({ as: Heading = 'h2', full = false }: HeadingLevel & { full?: boolean }) {
  const note = 'Más allá de tu procedimiento, hay todo un viaje. Te acompañamos con servicios logísticos y de recuperación en Barranquilla.';
  const featured = [0, 2, 3, 6].map(i => logistics[i]);
  return (
    <section className="section rituals" aria-labelledby="experience-title">
      <div className="container">
        {!full && <Link href="/experiencia" className="more-link">Ver más detalles</Link>}
        <div className="rituals-head" data-reveal>
          <Heading id="experience-title" className="h2">{full ? <>Más allá de tu <em>procedimiento</em></> : <>Experiencia del <em>paciente</em></>}</Heading>
          <p className="rituals-lede">Tú te concentras en tu bienestar <span className="inline-photo inline-face" aria-hidden="true"><Image className="photo" src={facePhoto} alt="" fill sizes="96px" /></span> y nosotros, en cada detalle de tu estancia.</p>
        </div>
        {full ? (
          <>
            <RitualGroup items={logistics.slice(0, 4)} note={note} full />
            <RitualGroup items={logistics.slice(4)} full />
          </>
        ) : (
          <RitualGroup items={featured} note={note} full={false} />
        )}
      </div>
    </section>
  );
}

export function ImageBand() {
  return (
    <section className="band" aria-labelledby="band-title">
      <div className="band-inner">
        <Image className="photo" src="/images/portrait.jpg" alt="" fill sizes="100vw" />
        <div className="band-shade" aria-hidden="true" />
        <div className="container band-copy" data-reveal>
          <h2 id="band-title" className="band-title">Cuéntanos qué necesitas — te acompañamos en cada paso.</h2>
          <a className="btn btn-outline-light" href={whatsapp} {...external}>Solicitar valoración <Arrow /></a>
        </div>
      </div>
    </section>
  );
}

/** Reference: "We use products from…" — overlapping circles. Shows Victoria's real specialties until partner logos are supplied. */
export function SpecialtyCircles() {
  const list = (hidden?: boolean) => (
    <ul aria-hidden={hidden || undefined}>
      {specialties.map((sp, i) => <li key={sp.name}><Link href={`/especialidades#especialidad-${i + 1}`} tabIndex={hidden ? -1 : undefined}>{sp.name}</Link></li>)}
    </ul>
  );
  return (
    <section className="section circles-section" aria-labelledby="circles-title">
      <div className="container">
        <h2 id="circles-title" className="circles-text" data-reveal>Reunimos <em>nueve especialidades médicas</em> y el acompañamiento que necesitas, en un solo lugar.</h2>
      </div>
      <div className="circles" data-reveal>
        <div className="circles-track">{list()}{list(true)}</div>
      </div>
    </section>
  );
}

const moments = [
  { image: 'stay', alt: 'Habitación de alojamiento para la recuperación' },
  { image: 'care', alt: 'Masaje con piedras calientes en un ambiente de spa' },
  { image: 'food', alt: 'Plato servido como parte de la alimentación durante la estancia' },
  { image: 'nursing', alt: 'Enfermera de Victoria preparándose para la atención' },
  { image: 'travel', alt: 'Pasajeros en el aeropuerto al atardecer' },
];

/** Reference: "Our works" — staggered gallery. */
export function Gallery() {
  return (
    <section className="section gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="gallery-top" data-reveal>
          <p>Momentos de la experiencia Victoria: estancia, acompañamiento y recuperación.</p>
          <a className="btn btn-dark" href={whatsapp} {...external}>Solicitar valoración <Arrow /></a>
        </div>
        <div className="gallery-grid">
          <h2 id="gallery-title" className="h2 gallery-title">Nuestro <em>cuidado</em></h2>
          {moments.map((m, i) => (
            <figure key={m.image} className={`gallery-item g-${i}`} data-reveal style={{ '--i': i } as React.CSSProperties}>
              <Image className="photo" src={`/images/${m.image}.jpg`} alt={m.alt} fill sizes="(max-width: 640px) 46vw, 24vw" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&h=900&q=70`;
const exampleReviews = [
  { quote: 'Aquí irá el testimonio real de una paciente, publicado con su autorización.', name: 'Nombre por confirmar', photo: u('1662850886700-4ec19bd30d11') },
  { quote: 'Ejemplo de reseña: reemplazar por un comentario real de Google o Instagram.', name: 'Nombre por confirmar', photo: u('1607569708758-0270aa4651bd') },
  { quote: 'Ejemplo de reseña: reemplazar por un comentario real de una paciente.', name: 'Nombre por confirmar', photo: u('1594756154841-ac5d160dbf46') },
  { quote: 'Ejemplo de reseña: reemplazar por un comentario real de una paciente.', name: 'Nombre por confirmar', photo: u('1772249541659-a034b3360f19') },
  { quote: 'Ejemplo de reseña: reemplazar por un comentario real de una paciente.', name: 'Nombre por confirmar', photo: u('1772989665252-7cb41ae759cc') },
];

/** Reference: "Client reviews". Photo by default, testimonial on hover/focus. Real testimonials only; examples never reach production. */
export function Reviews() {
  const isExample = testimonials.length === 0;
  if (isExample && process.env.NODE_ENV === 'production') return null;
  const items = (isExample ? exampleReviews : testimonials).slice(0, 5);
  return (
    <section className="section reviews" aria-labelledby="reviews-title">
      <div className="container">
        <h2 id="reviews-title" className="h2 reviews-title" data-reveal>Lo que dicen <em>nuestros pacientes</em></h2>
        {isExample && <p className="example-note">Contenido de ejemplo (textos y fotos), visible solo en desarrollo. Agrega testimonios reales en <code>services.ts</code>.</p>}
        <ul className="reviews-grid">
          {items.map((r, i) => (
            <li key={i} className="review" tabIndex={0} data-reveal style={{ '--i': i } as React.CSSProperties}>
              {r.photo && <Image className="photo" src={r.photo} alt={`Foto de ${r.name}`} fill sizes="(max-width: 640px) 92vw, 20vw" />}
              <span className="review-name">{r.name}</span>
              <div className="review-body">
                <span className="review-mark" aria-hidden="true">“</span>
                <blockquote>{r.quote}</blockquote>
                <cite>{r.name}</cite>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Inner-page hero: the same rounded photo card as the home hero, with breadcrumbs and the page title. */
export function PageHero({ title, crumb, image, tagline, position = '50% 35%' }: { title: React.ReactNode; crumb: string; image: string; tagline: string; position?: string }) {
  return (
    <div className="hero-frame">
      <section className="hero hero-page" aria-labelledby="page-title">
        <Image className="hero-bg photo" src={image} alt="" fill priority sizes="100vw" style={{ objectPosition: position }} />
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-inner">
          <nav className="hero-crumbs" aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">{crumb}</span></nav>
          <div className="hero-title">
            <h1 id="page-title" className="display">{title}</h1>
            <p className="hero-tagline">{tagline}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

/** Contact page body: large contact lines next to a tall photo. */
export function ContactBlock() {
  return (
    <section className="section contact-page" aria-labelledby="contact-heading">
      <div className="container contact-layout">
        <div className="contact-lines" data-reveal>
          <h2 id="contact-heading" className="h2">Conversemos <em>cuando quieras</em></h2>
          <p className="contact-intro">Escríbenos y cuéntanos qué necesitas. Te orientamos sobre la valoración, los procedimientos y tu estancia en Barranquilla.</p>
          <dl>
            <div><dt>WhatsApp</dt><dd><a className="btn btn-dark" href={whatsapp} {...external}>Solicitar valoración <Arrow /></a></dd></div>
            <div><dt>Llámanos</dt>{phones.map(p => <dd key={p.href}><a href={p.href}>{p.label}</a></dd>)}</div>
            <div><dt>Instagram</dt><dd><a href={instagram.href} {...external}>{instagram.handle} <ArrowUpRight /></a></dd></div>
            <div><dt>Ciudad</dt><dd>Barranquilla, Colombia</dd></div>
          </dl>
        </div>
        <figure className="contact-photo" data-reveal>
          <Image className="photo" src="/images/care.jpg" alt="Masaje con piedras calientes en un ambiente de spa" fill sizes="(max-width: 900px) 92vw, 40vw" />
        </figure>
      </div>
    </section>
  );
}
