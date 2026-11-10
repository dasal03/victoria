import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ctaLabels, primaryNav, whatsappHref } from '../content/site';
import { Button, RollText } from './Button';
import './MobileNavigation.css';

type Props = { open: boolean; onClose: () => void };

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
const CLOSE_MS = 400;

/**
 * Enlace principal: cada palabra rueda dentro de su propia máscara con un
 * pequeño escalonado, así el efecto funciona aunque el texto parta en líneas.
 */
function MenuWords({ text }: { text: string }) {
  return (
    <>
      {text.split(' ').map((w, i) => (
        <span key={i} className="menu-link__mask" style={{ '--i': i } as CSSProperties}>
          <span className="menu-link__word">{w}</span>
          <span className="menu-link__word menu-link__word--copy" aria-hidden="true">
            {w}
          </span>
        </span>
      ))}
    </>
  );
}

/**
 * Menú del sitio a pantalla completa sobre <dialog> modal: el navegador
 * gestiona el foco atrapado, Escape y la inertización del fondo. Se despliega
 * y se recoge con clip-path, como en la referencia.
 */
export function SiteMenu({ open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const { pathname } = useLocation();
  const [leaving, setLeaving] = useState(false);
  const wa = whatsappHref();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    let timer: number | undefined;
    if (open && !dialog.open) {
      setLeaving(false);
      dialog.showModal();
    }
    if (!open && dialog.open) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setLeaving(true);
      timer = window.setTimeout(() => {
        dialog.close();
        setLeaving(false);
      }, reduce ? 0 : CLOSE_MS);
    }
    document.documentElement.classList.toggle('is-locked', open);
    return () => window.clearTimeout(timer);
  }, [open]);

  return (
    <dialog
      ref={ref}
      id="site-menu"
      className={`site-menu ${leaving ? 'is-leaving' : ''}`}
      aria-label="Menú principal"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <div className="site-menu__panel">
        <div className="site-menu__top container">
          <button type="button" className="menu-toggle site-menu__close roll-host" onClick={onClose}>
            <span className="menu-toggle__diamond" aria-hidden="true" />
            <RollText>Cerrar</RollText>
          </button>
        </div>

        <div className="site-menu__grid container">
          <nav aria-label="Principal" className="site-menu__primary">
            <ol role="list">
              {primaryNav.map((item, i) => {
                const active = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
                return (
                  <li key={item.to} style={{ '--i': i } as CSSProperties}>
                    <span className="site-menu__num" aria-hidden="true">
                      {ROMAN[i]}.
                    </span>
                    <NavLink to={item.to} end={item.to === '/'} onClick={onClose} className={`menu-link ${active ? 'is-active' : ''}`}>
                      <MenuWords text={item.label} />
                    </NavLink>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="site-menu__actions">
            <Button to="/contacto#valoracion" arrow>
              {ctaLabels.primary}
            </Button>
            {wa && (
              <Button href={wa} variant="secondary">
                {ctaLabels.whatsapp}
              </Button>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}
