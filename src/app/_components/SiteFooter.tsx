import Image from 'next/image';
import Link from 'next/link';
import { instagram, navLinks, phones, whatsapp } from '../services';
import { Arrow, InstagramIcon, WhatsAppIcon } from './icons';

const photos = ['stay', 'massage', 'food', 'travel'];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-card">
        <div className="footer-top">
          <div className="footer-cta">
            <p className="footer-statement">¿Empezamos a <em>cuidarte?</em></p>
            <p>Tu experiencia empieza con una conversación.</p>
            <a className="btn btn-light" href={whatsapp} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp <Arrow /></a>
          </div>
          <a className="footer-handle" href={instagram.href} target="_blank" rel="noopener noreferrer">{instagram.handle}</a>
          <ul className="footer-photos" aria-hidden="true">
            {photos.map(name => <li key={name}><Image className="photo" src={`/images/${name}.jpg`} alt="" fill sizes="(max-width: 900px) 25vw, 12vw" /></li>)}
          </ul>
        </div>
        <div className="footer-cols">
          <div className="footer-about">
            <p className="footer-brand">Victoria<small>Home Health &amp; Spa</small></p>
            <p>Medicina y bienestar. Una experiencia pensada alrededor de ti.</p>
          </div>
          <div>
            <p className="label">Contacto</p>
            <p>Barranquilla, Colombia</p>
            {phones.map(p => <a key={p.href} href={p.href}>{p.label}</a>)}
          </div>
          <nav aria-label="Pie de página">
            <p className="label">Explora</p>
            <Link href="/">Inicio</Link>
            {navLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
          <div className="footer-social">
            <a href={instagram.href} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${instagram.handle}`}><InstagramIcon /></a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
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
