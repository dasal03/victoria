import Link from 'next/link';
import { instagram, navLinks, phones, whatsapp } from '../services';
import { WhatsAppIcon } from './icons';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

/** Footer limpio: marca y CTA, tres columnas, nombre a todo el ancho y línea legal. */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-intro">
            <p className="footer-statement">
              <span className="footer-mark" aria-hidden="true">V</span>
              <span>Medicina y bienestar, <em>pensados</em> alrededor de ti.</span>
            </p>
            <a className="btn" href={whatsapp} {...external}>Escríbenos por WhatsApp <WhatsAppIcon /></a>
          </div>

          <nav className="footer-col" aria-label="Páginas">
            <p className="footer-label">Páginas</p>
            <Link href="/">Inicio</Link>
            {navLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>

          <div className="footer-col">
            <p className="footer-label">Contacto</p>
            <span>Barranquilla, Colombia</span>
            {phones.map(p => <a key={p.href} href={p.href}>{p.label}</a>)}
          </div>

          <div className="footer-col">
            <p className="footer-label">Redes</p>
            <a href={instagram.href} {...external}>Instagram</a>
            <a href={whatsapp} {...external}>WhatsApp</a>
          </div>
        </div>

        <p className="footer-wordmark" aria-hidden="true">VICTORIA</p>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Victoria Home Health &amp; Spa</span>
          <span>El arte de cuidar de ti</span>
        </div>
      </div>
    </footer>
  );
}
