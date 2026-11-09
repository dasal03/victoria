import Image from 'next/image';
import Link from 'next/link';
import { logistics, phones, instagram, specialties, whatsapp } from '../services';
import { Arrow, WhatsAppIcon } from './icons';

type HeadingLevel = { as?: 'h1' | 'h2' };
const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="label hero-label"><span className="dot" aria-hidden="true" />Medicina, bienestar y cuidado</p>
          <h1 id="hero-title" className="display">El arte de cuidar <em>de ti.</em></h1>
          <p className="lead">Atención médica y bienestar, con una experiencia pensada alrededor de cada persona.</p>
          <div className="actions">
            <a className="btn btn-dark" href={whatsapp} {...external}>Solicitar valoración <Arrow /></a>
            <Link className="btn btn-ghost" href="/nosotros">Descubrir Victoria <Arrow /></Link>
          </div>
          <dl className="hero-facts">
            <div><dt>Especialidades médicas</dt><dd>{String(specialties.length).padStart(2, '0')}</dd></div>
            <div><dt>Servicios de acompañamiento</dt><dd>{String(logistics.length).padStart(2, '0')}</dd></div>
            <div><dt>Nuestra ciudad</dt><dd className="small">Barranquilla</dd></div>
          </dl>
        </div>
        <div className="hero-visual">
          <figure className="arch hero-arch">
            <Image className="photo" src="/images/portrait.jpg" alt="Retrato de una paciente sonriendo con serenidad" fill priority sizes="(max-width: 900px) 90vw, 42vw" style={{ objectPosition: '50% 30%' }} />
          </figure>
          <figure className="hero-inset">
            <Image className="photo" src="/images/massage.jpg" alt="Masaje postquirúrgico en una camilla con sábanas blancas" fill sizes="(max-width: 900px) 40vw, 16vw" />
          </figure>
          <p className="hero-note">El cuidado está<br />en los detalles.</p>
        </div>
      </div>
    </section>
  );
}

export function Intro({ as: Heading = 'h2' }: HeadingLevel) {
  return (
    <section className="section intro" aria-labelledby="intro-title">
      <div className="container">
        <div className="intro-grid">
          <div data-reveal>
            <p className="label">Salud con sentido humano</p>
            <Heading id="intro-title" className="h2">Cuidamos de ti. <em>En cada detalle.</em></Heading>
          </div>
          <div className="intro-copy" data-reveal>
            <p className="lead">Hay decisiones que merecen sentirse acompañadas.</p>
            <p>En Victoria Home Health &amp; Spa reunimos servicios médicos y logísticos diseñados a tu medida. Pensamos en tu seguridad, tu comodidad y en lo que necesitas antes, durante y después de tu procedimiento.</p>
            <Link href="/especialidades" className="text-link">Conoce nuestras especialidades <Arrow /></Link>
          </div>
        </div>
        <figure className="intro-image" data-reveal>
          <Image className="photo" src="/images/team.jpg" alt="Equipo de profesionales de salud caminando por un pasillo clínico" fill sizes="(max-width: 1320px) 92vw, 1320px" />
          <figcaption><span className="label">Medicina &amp; bienestar</span><span className="intro-quote">Tu tranquilidad también es parte del cuidado.</span></figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Experience({ as: Heading = 'h2' }: HeadingLevel) {
  const [stay, ...rest] = logistics;
  return (
    <section className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <p className="label">Experiencia del paciente · Antes, durante y después</p>
            <Heading id="experience-title" className="h2">Tú te concentras en tu bienestar. <em>Nosotros, en los detalles.</em></Heading>
          </div>
          <p>Más allá de tu procedimiento, hay todo un viaje. Te acompañamos con servicios logísticos y de recuperación en Barranquilla.</p>
        </div>
        <article className="stay" data-reveal>
          <div className="stay-image">
            <Image className="photo" src={`/images/${stay.image}.jpg`} alt="Habitación de alojamiento presentada en el catálogo de Victoria" fill sizes="(max-width: 900px) 92vw, 55vw" />
          </div>
          <div className="stay-copy">
            <p className="label">01 · {stay.name}</p>
            <h3 className="h3-lg">Sentirte bien. <em>Sentirte en calma.</em></h3>
            <p>{stay.description}</p>
            <a className="text-link" href={whatsapp} {...external}>Planea tu estancia <Arrow /></a>
          </div>
        </article>
        <ul className="bento">
          {rest.map((service, i) => (
            <li key={service.name} className={`bento-item${[0, 3, 4].includes(i) ? ' is-wide' : ''}`} data-reveal>
              <div className="bento-image">
                <Image className="photo" src={`/images/${service.image}.jpg`} alt={`${service.name}, imagen del catálogo de servicios`} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 40vw" />
              </div>
              <div className="bento-copy">
                <span className="bento-index">{String(i + 2).padStart(2, '0')}</span>
                <h3 className="h3">{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const steps = [
  { n: 'I', title: 'Conversemos', text: 'Cuéntanos qué servicio te interesa y qué necesitas para tu visita a Barranquilla.' },
  { n: 'II', title: 'Valoremos tus necesidades', text: 'Consulta la valoración médica, los procedimientos y las opciones de acompañamiento.' },
  { n: 'III', title: 'Organicemos tu experiencia', text: 'Coordina los servicios de estancia, transporte y recuperación que requieras.' },
];

export function Journey() {
  return (
    <section className="section journey" aria-labelledby="journey-title">
      <div className="container">
        <div className="journey-head" data-reveal>
          <p className="label">Tu primer paso · Empieza con una conversación</p>
          <h2 id="journey-title" className="h2">Un camino pensado <em>alrededor de ti.</em></h2>
        </div>
        <ol className="steps">
          {steps.map(step => (
            <li key={step.n} data-reveal>
              <span className="step-mark" aria-hidden="true">{step.n}</span>
              <h3 className="h3">{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact({ as: Heading = 'h2' }: HeadingLevel) {
  return (
    <section className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-card" data-reveal>
          <div className="contact-main">
            <p className="label">Queremos cuidar de ti</p>
            <Heading id="contact-title" className="h2">El primer paso <em>es hablar.</em></Heading>
            <p>Escríbenos y cuéntanos qué necesitas. Te orientamos sobre la valoración, los procedimientos y tu estancia en Barranquilla.</p>
            <a className="btn btn-light" href={whatsapp} {...external}><WhatsAppIcon /> Solicitar valoración por WhatsApp</a>
          </div>
          <dl className="contact-details">
            <div><dt className="label">Llámanos o escríbenos</dt>{phones.map(p => <dd key={p.href}><a href={p.href}>{p.label}</a></dd>)}</div>
            <div><dt className="label">Encuéntranos en Instagram</dt><dd><a href={instagram.href} {...external}>{instagram.handle} <span aria-hidden="true">↗</span></a></dd></div>
            <div><dt className="label">Nuestra ciudad</dt><dd>Barranquilla, Colombia</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-inner" data-reveal>
        <h2 id="cta-title" className="h2">El primer paso <em>es hablar.</em></h2>
        <div className="actions">
          <a className="btn btn-dark" href={whatsapp} {...external}>Solicitar valoración <Arrow /></a>
          <Link className="btn btn-ghost" href="/contacto">Ver contacto <Arrow /></Link>
        </div>
      </div>
    </section>
  );
}
