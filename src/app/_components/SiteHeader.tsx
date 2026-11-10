'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { instagram, navLinks, phones, specialties, whatsapp } from '../services';
import { Arrow } from './icons';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const background = document.querySelectorAll<HTMLElement>('main, footer.site-footer, .wa-float');
    background.forEach(el => el.setAttribute('inert', ''));
    document.body.style.overflow = 'hidden';
    const root = headerRef.current;
    const focusables = () => Array.from(root?.querySelectorAll<HTMLElement>('a[href], button') ?? []).filter(el => el.offsetParent !== null);
    focusables().find(el => el.closest('.menu-panel'))?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    document.addEventListener('keydown', onKey);
    return () => {
      background.forEach(el => el.removeAttribute('inert'));
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const overHero = ['/', '/especialidades', '/experiencia', '/contacto'].includes(pathname) && !open;
  const className = ['site-header', overHero && 'is-over-hero', open && 'is-open'].filter(Boolean).join(' ');

  return (
    <header ref={headerRef} className={className}>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Victoria Home Health & Spa, inicio">
          <span>Victoria</span><small>Home Health &amp; Spa</small>
        </Link>
        <div className="header-meta">
          <a href={phones[0].href}>{phones[0].label}</a>
          <a href={instagram.href} target="_blank" rel="noopener noreferrer">{instagram.handle}</a>
        </div>
        <button ref={toggleRef} className="burger" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="menu-principal" onClick={() => setOpen(v => !v)}>
          <span aria-hidden="true" /><span aria-hidden="true" />
        </button>
      </div>
      {open && (
        <div id="menu-principal" className="menu-panel" role="dialog" aria-modal="true" aria-label="Menú principal">
          <div className="container menu-grid">
            <nav aria-label="Menú principal">
              <ul className="menu-links">
                {[{ label: 'Inicio', href: '/' }, ...navLinks].map((link, i) => (
                  <li key={link.href} style={{ '--i': i } as React.CSSProperties}>
                    <Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <aside className="menu-aside">
              <p className="label">Especialidades</p>
              <ul className="menu-specialties">
                {specialties.map((s, i) => <li key={s.name}><Link href={`/especialidades#especialidad-${i + 1}`}>{s.name}</Link></li>)}
              </ul>
              <p className="label">Conversemos</p>
              {phones.map(p => <a key={p.href} className="menu-phone" href={p.href}>{p.label}</a>)}
              <a className="btn btn-light" href={whatsapp} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp <Arrow /></a>
            </aside>
          </div>
        </div>
      )}
    </header>
  );
}
