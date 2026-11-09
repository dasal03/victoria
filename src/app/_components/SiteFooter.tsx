import Link from 'next/link';
import { instagram, phones, whatsapp } from '../services';
import { Arrow } from './icons';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <p className="footer-statement">El cuidado continúa. <em>Estemos cerca.</em></p>
          <a className="btn btn-light" href={whatsapp} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp <Arrow /></a>
        </div>
        <div className="footer-cols">
          <div className="footer-about">
            <p className="footer-brand">Victoria<small>Home Health &amp; Spa</small></p>
            <p>Medicina y bienestar. Una experiencia pensada alrededor de ti.</p>
            <p className="label footer-city"><span className="dot" aria-hidden="true" />Barranquilla, Colombia</p>
          </div>
          <nav aria-label="Pie de página">
            <p className="label">Explora</p>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nuestra esencia</Link>
            <Link href="/especialidades">Especialidades</Link>
            <Link href="/experiencia">Experiencia del paciente</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
          <div>
            <p className="label">Nuestro cuidado</p>
            <Link href="/especialidades">Servicios médicos</Link>
            <Link href="/experiencia">Alojamiento y alimentación</Link>
            <Link href="/experiencia">Traslados y acompañamiento</Link>
            <Link href="/experiencia">Recuperación postquirúrgica</Link>
          </div>
          <div>
            <p className="label">Conversemos</p>
            {phones.map(p => <a key={p.href} className="footer-phone" href={p.href}>{p.label}</a>)}
            <a href={instagram.href} target="_blank" rel="noopener noreferrer">{instagram.handle} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Victoria Home Health &amp; Spa</span>
          <span>El arte de cuidar de ti.</span>
        </div>
      </div>
    </footer>
  );
}
