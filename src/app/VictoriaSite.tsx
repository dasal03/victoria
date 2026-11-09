'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { specialties as medicalServices, logistics, whatsapp } from './services';

const sections = ['Inicio', 'Especialidades', 'Experiencia del paciente', 'Nosotros', 'Contacto'];
const specialties = medicalServices.map(service => service.name);
const routes: Record<string, string> = { Inicio: '/', Especialidades: '/especialidades', 'Experiencia del paciente': '/experiencia', Nosotros: '/nosotros', Contacto: '/contacto' };
export type PageView = 'Inicio' | 'Especialidades' | 'Experiencia del paciente' | 'Nosotros' | 'Contacto';
const roman = ['I.', 'II.', 'III.', 'IV.', 'V.'];
function Arrow() { return <svg viewBox="0 0 32 20" fill="none" aria-hidden="true"><path d="M1 10h28M21 2l8 8-8 8" stroke="currentColor" strokeWidth="1.2" /></svg>; }
export default function VictoriaSite({ view = 'Inicio' }: { view?: PageView }) {
  const router = useRouter();
  const PageHeading = view === 'Inicio' ? 'h2' : 'h1';
  const [menuOpen, setMenuOpen] = useState(false);
  const selected = view;
  const [activeService, setActiveService] = useState(0);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';
    const root = dialog.current;
    root?.querySelector<HTMLElement>('button, a')?.focus();
    function keyboard(e: KeyboardEvent) {
      if (e.key === 'Escape') { setMenuOpen(false); }
      if (e.key === 'Tab') {
        const items = root?.querySelectorAll<HTMLElement>('button, a[href]');
        if (!items?.length) return;
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', keyboard);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', keyboard); previous?.focus(); };
  }, [menuOpen]);
  function navigate(name: string) { setMenuOpen(false); router.push(routes[name]); }
  return <main id="inicio">
    {view === 'Inicio' ? <section className="hero" aria-labelledby="hero-title" inert={menuOpen}>
      <div className="hero-photo" /><div className="hero-shade" /><div className="grain" />
      <header className="header">
        <button ref={menuButton} className="menu-toggle" onClick={() => setMenuOpen(true)} aria-haspopup="dialog" aria-expanded={menuOpen}><span className="diamond" /> MENÚ</button>
        <Link className="brand" href="/" aria-label="Victoria, inicio"><span>VICTORIA</span><small>HOME HEALTH & SPA</small></Link>
        <button className="pill header-cta" onClick={() => navigate('Contacto')}>Solicitar valoración <Arrow /></button>
      </header>
      <div className="hero-content">
        <div className="headline-wrap"><span className="eyebrow">MEDICINA, BIENESTAR Y CUIDADO</span><h1 id="hero-title"><span>EL ARTE</span><span className="middle-line">DE CUIDAR</span><span className="last-line">DE TI.</span></h1></div>
        
        <div className="hero-bottom"><span className="gold-rule" /><span className="hero-care-label">EL CUIDADO ESTÁ EN LOS DETALLES</span><p>Atención médica y bienestar, con una experiencia pensada alrededor de cada persona.</p><div className="actions"><button className="pill" onClick={() => navigate('Contacto')}>Solicitar valoración <Arrow /></button><button className="pill outline" onClick={() => navigate('Nosotros')}>Descubrir Victoria <Arrow /></button></div></div>
      </div>
      <footer className="hero-footer"><span>BARRANQUILLA, COLOMBIA</span></footer>
    </section> : <header className="header inner-header" inert={menuOpen}>
      <button ref={menuButton} className="menu-toggle" onClick={() => setMenuOpen(true)} aria-haspopup="dialog" aria-expanded={menuOpen}><span className="diamond" /> MENÚ</button>
      <Link className="brand" href="/" aria-label="Victoria, inicio"><span>VICTORIA</span><small>HOME HEALTH & SPA</small></Link>
      <Link className="pill header-cta" href="/contacto">Solicitar valoración <Arrow /></Link>
    </header>}
    <div className="site-content" inert={menuOpen}>

      {view !== 'Inicio' && <nav className="breadcrumbs section-shell" aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">{view}</span></nav>}

      {(view === 'Inicio' || view === 'Nosotros') && <><section className="intro-section section-shell" id="nosotros" aria-labelledby="intro-title">
        <div className="section-topline"><span>01 / LA ESENCIA DE VICTORIA</span><span>BARRANQUILLA, COLOMBIA</span></div>
        <div className="intro-grid"><div><span className="eyebrow">SALUD CON SENTIDO HUMANO</span><PageHeading id="intro-title">Cuidamos de ti.<br /><span>En cada detalle.</span></PageHeading></div><div className="intro-copy"><span className="gold-rule" /><p>Hay decisiones que merecen sentirse acompañadas.</p><p>En Victoria Home Health & Spa reunimos servicios médicos y logísticos diseñados a tu medida. Pensamos en tu seguridad, tu comodidad y en lo que necesitas antes, durante y después de tu procedimiento.</p><Link href="/especialidades" className="text-link">Conoce nuestras especialidades <Arrow /></Link></div></div>
        <div className="intro-image"><img src="/images/team.jpg" alt="Profesionales de salud en un entorno clínico" loading="lazy" /><div className="image-caption"><span>MEDICINA & BIENESTAR</span><p>Tu tranquilidad también<br />es parte del cuidado.</p></div></div>
      </section></>}
      {(view === 'Inicio' || view === 'Especialidades') && <><section className="services-section section-shell" id="especialidades" aria-labelledby="services-title">
        <div className="section-topline"><span>02 / ESPECIALIDADES</span><span>UN CUIDADO, MUCHAS FORMAS</span></div>
        <div className="section-heading"><PageHeading id="services-title">El cuidado que<br />necesitas.</PageHeading><p>Explora nuestras áreas de atención. Cada camino comienza con una valoración individual.</p></div>
        <div className="service-explorer"><div className="service-visual"><img src={'/images/' + medicalServices[activeService].image + '.jpg'} alt={'Atención en ' + medicalServices[activeService].name.toLowerCase()} loading="lazy" /><span className="visual-number">{String(activeService + 1).padStart(2, '0')} / 09</span><div className="visual-caption">MEDICINA CON ATENCIÓN PERSONAL <span>◆</span></div></div><div className="service-list">{medicalServices.map((service, i) => <div className={'service-row ' + (activeService === i ? 'is-open' : '')} key={service.name}><h3><button id={'service-button-' + i} aria-expanded={activeService === i} aria-controls={'service-details-' + i} onClick={() => setActiveService(i)}><span className="service-index">{String(i + 1).padStart(2, '0')}</span><span>{service.name}</span><span className="service-plus">{activeService === i ? '−' : '+'}</span></button></h3><div id={'service-details-' + i} role="region" aria-labelledby={'service-button-' + i} hidden={activeService !== i}><p>{service.description}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><a className="text-link" href={whatsapp} target="_blank" rel="noopener noreferrer">Consultar esta especialidad <Arrow /></a></div></div>)}</div></div>
        <p className="service-note">Los procedimientos y tratamientos se definen con el especialista según la valoración de cada paciente. Consulta disponibilidad y condiciones de atención.</p>
      </section></>}
      {(view === 'Inicio' || view === 'Experiencia del paciente') && <><section className="experience-section section-shell" id="experiencia" aria-labelledby="experience-title">
        <div className="section-topline"><span>03 / EXPERIENCIA DEL PACIENTE</span><span>ANTES · DURANTE · DESPUÉS</span></div>
        <div className="section-heading"><PageHeading id="experience-title">Tú te concentras<br />en tu bienestar.<br /><span>Nosotros, en los detalles.</span></PageHeading><p>Más allá de tu procedimiento, hay todo un viaje. Te acompañamos con servicios logísticos y de recuperación en Barranquilla.</p></div>
        <div className="stay-feature"><img src="/images/stay.jpg" alt="Habitación de alojamiento presentada en el catálogo de Victoria" loading="lazy" /><div><span className="eyebrow">UN ESPACIO PARA RECUPERARTE</span><h3>Sentirte bien.<br />Sentirte en calma.</h3><p>{logistics[0].description}</p><a className="text-link" href={whatsapp} target="_blank" rel="noopener noreferrer">Planea tu estancia <Arrow /></a></div></div>
        <div className="logistics-grid">{logistics.slice(1).map((service, i) => <article className="logistics-item" key={service.name}><div className="logistics-image"><img src={'/images/' + service.image + '.jpg'} alt={service.name + ', imagen del catálogo de servicios'} loading="lazy" /><span>{String(i + 2).padStart(2, '0')}</span></div><h3>{service.name}</h3><p>{service.description}</p></article>)}</div>
      </section></>}
      {(view === 'Inicio' || view === 'Experiencia del paciente') && <><section className="journey-section section-shell" aria-labelledby="journey-title"><div className="section-topline"><span>04 / TU PRIMER PASO</span><span>ESTAMOS PARA ACOMPAÑARTE</span></div><div className="journey-heading"><span className="eyebrow">EMPIEZA CON UNA CONVERSACIÓN</span><h2 id="journey-title">Un camino pensado<br />alrededor de ti.</h2></div><div className="journey-steps">{[{n:'I',title:'Conversemos',text:'Cuéntanos qué servicio te interesa y qué necesitas para tu visita a Barranquilla.'},{n:'II',title:'Valoremos tus necesidades',text:'Consulta la valoración médica, los procedimientos y las opciones de acompañamiento.'},{n:'III',title:'Organicemos tu experiencia',text:'Coordina los servicios de estancia, transporte y recuperación que requieras.'}].map(step => <article key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section></>}
      {(view === 'Inicio' || view === 'Contacto') && <><section className="contact-section section-shell" id="contacto" aria-labelledby="contact-title"><div className="section-topline"><span>05 / CONTACTO</span><span>BARRANQUILLA TE ESPERA</span></div><div className="contact-grid"><div><span className="eyebrow">QUEREMOS CUIDAR DE TI</span><PageHeading id="contact-title">El primer paso<br />es hablar.</PageHeading><a className="pill" href={whatsapp} target="_blank" rel="noopener noreferrer">Solicitar valoración por WhatsApp <Arrow /></a></div><div className="contact-details"><div><span>LLÁMANOS O ESCRÍBENOS</span><a href="tel:+573004418000">+57 300 441 8000</a><a href="tel:+573246128888">+57 324 612 8888</a></div><div><span>ENCUÉNTRANOS EN INSTAGRAM</span><a href="https://www.instagram.com/victoria_h_h_s/" target="_blank" rel="noopener noreferrer">@victoria_h_h_s ↗</a></div><div><span>NUESTRA CIUDAD</span><p>Barranquilla, Colombia</p></div></div></div></section></>}
      <footer className="site-footer section-shell" id="footer">
        <div className="footer-opening"><div><span className="eyebrow">SALUD, BIENESTAR Y ATENCIÓN PERSONAL</span><p>El cuidado continúa.<br /><span>Estemos cerca.</span></p></div><a className="footer-social" href="https://www.instagram.com/victoria_h_h_s/" target="_blank" rel="noopener noreferrer"><span>SÍGUENOS EN INSTAGRAM</span><strong>@victoria_h_h_s <span>↗</span></strong></a></div>
        <div className="footer-columns"><div className="footer-intro"><span className="footer-emblem" aria-hidden="true">V<span>◆</span></span><p>Medicina y bienestar.<br />Una experiencia pensada<br />alrededor de ti.</p><span className="footer-location"><span /> BARRANQUILLA, COLOMBIA</span></div><nav aria-label="Navegación del pie de página"><h3>EXPLORA VICTORIA</h3><Link href="/">Inicio</Link><Link href="/nosotros">Nuestra esencia</Link><Link href="/especialidades">Especialidades</Link><Link href="/experiencia">Experiencia del paciente</Link><Link href="/contacto">Contacto</Link></nav><div className="footer-services"><h3>NUESTRO CUIDADO</h3><Link href="/especialidades">Servicios médicos</Link><Link href="/experiencia">Alojamiento y alimentación</Link><Link href="/experiencia">Traslados y acompañamiento</Link><Link href="/experiencia">Recuperación postquirúrgica</Link></div><div className="footer-connect"><h3>CONVERSEMOS</h3><a className="footer-phone" href="tel:+573004418000">+57 300 441 8000</a><a className="footer-phone" href="tel:+573246128888">+57 324 612 8888</a><a className="text-link" href={whatsapp} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp <Arrow /></a><p>Tu experiencia empieza<br />con una conversación.</p></div></div>
        <Link href="/" className="footer-wordmark" aria-label="Victoria, volver al inicio">VICTORIA<span>HOME HEALTH & SPA</span></Link>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} VICTORIA HOME HEALTH & SPA</span><span>EL ARTE DE CUIDAR DE TI.</span><Link href="/">VOLVER AL INICIO <span aria-hidden="true">↑</span></Link></div>
      </footer>
    </div>
    {menuOpen && <div className="menu-overlay" ref={dialog} role="dialog" aria-modal="true" aria-label="Menú principal"><button className="menu-toggle close-toggle" onClick={() => setMenuOpen(false)}><span className="diamond" /> CERRAR</button><div className="menu-layout"><nav aria-label="Navegación principal">{sections.map((name, i) => <button className={`nav-item ${selected === name ? 'active' : ''}`} key={name} onClick={() => navigate(name)}><span className="roman">{roman[i]}</span><span className="nav-label">{name}</span><span className="nav-arrow">↗</span></button>)}</nav><aside className="menu-aside"><div className="contact-info"><span className="aside-label">ESTAMOS CERCA DE TI</span><p>Contacto:<br />Barranquilla, Colombia</p><a className="pending" href="tel:+573004418000">+57 300 441 8000</a></div><ul className="specialties">{specialties.map(s => <li key={s}><button onClick={() => { setActiveService(specialties.indexOf(s)); navigate('Especialidades'); }}>{s}</button></li>)}</ul><span className="menu-signature">VICTORIA <small>HOME HEALTH & SPA</small></span></aside></div><div className="menu-footer"><span>EL ARTE DE CUIDAR DE TI.</span><span>Salud y bienestar con atención personal.</span></div></div>}

  </main>;
}
