'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, phones, specialties, whatsapp } from '../services';
import { Arrow } from './icons';

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  return (
    <header ref={headerRef} className={`site-header${scrolled || open || pathname !== '/' ? ' is-solid' : ''}${open ? ' is-open' : ''}`}>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Victoria Home Health & Spa, inicio">
          <span>Victoria</span><small>Home Health &amp; Spa</small>
        </Link>
        <nav className="header-nav" aria-label="Principal">
          {navLinks.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="btn btn-dark header-cta" href={whatsapp} target="_blank" rel="noopener noreferrer">Solicitar valoración</a>
          <button ref={toggleRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="menu-principal" onClick={() => setOpen(v => !v)}>
            <span className="menu-lines" aria-hidden="true"><span /><span /></span>
            {open ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </div>
      {open && (
        <div id="menu-principal" className="menu-panel" role="dialog" aria-modal="true" aria-label="Menú principal">
          <div className="container menu-grid">
            <nav aria-label="Menú principal">
              <ul className="menu-links">
                <li><Link href="/" aria-current={pathname === '/' ? 'page' : undefined}><span>01</span>Inicio</Link></li>
                {navLinks.map((link, i) => <li key={link.href}><Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined}><span>{String(i + 2).padStart(2, '0')}</span>{link.label}</Link></li>)}
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
