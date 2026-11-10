'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, specialties, whatsapp } from '../services';
import { WhatsAppIcon } from './icons';

/** Nombre corto de cada especialidad para el menú. */
function shortName(name: string) {
  return name.replace(', estética y reconstructiva', '').replace('Medicina antiaging', 'Antiaging');
}

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
        <button ref={toggleRef} className="burger" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="menu-principal" onClick={() => setOpen(v => !v)}>
          {open && <span className="burger-label" aria-hidden="true">Cerrar</span>}
          <span className="burger-icon" aria-hidden="true"><span /><span /></span>
        </button>
      </div>
      {open && (
        <div id="menu-principal" className="menu-panel" role="dialog" aria-modal="true" aria-label="Menú principal">
          {/* Cada especialidad como una palabra grande que fluye en el panel; los enlaces
              principales y el contacto quedan en una fila pequeña abajo. */}
          <div className="container menu-stage">
            <nav aria-label="Especialidades">
              <ul className="menu-words">
                {specialties.map((s, i) => (
                  <li key={s.name} style={{ '--i': i } as React.CSSProperties}>
                    <span className="menu-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <Link href={`/especialidades#especialidad-${i + 1}`}>{shortName(s.name)}</Link>
                    {i === 4 && <span className="menu-dash" aria-hidden="true" />}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu-foot">
              <nav aria-label="Menú principal">
                <ul className="menu-pages">
                  {[{ label: 'Inicio', href: '/' }, ...navLinks].map(link => (
                    <li key={link.href}>
                      <Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="menu-contact">
                <a className="btn" href={whatsapp} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp <WhatsAppIcon /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
