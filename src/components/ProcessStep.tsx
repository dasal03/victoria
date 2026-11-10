import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Arrow } from './Button';

type Props = { index: number; title: string; text: string; to: string };

/** Paso del proceso como tarjeta redondeada: número y flecha arriba, título y texto abajo. */
export function ProcessStep({ index, title, text, to }: Props) {
  return (
    <li className="step" data-reveal style={{ '--reveal-i': index } as CSSProperties}>
      <Link to={to} className="step__link">
        <div className="step__top">
          <span className="step__num" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="step__arrow" aria-hidden="true">
            <Arrow />
          </span>
        </div>
        <div className="step__body">
          <h3 className="h3 step__title">
            <span className="visually-hidden">Paso {index + 1}: </span>
            {title}
          </h3>
          <p className="step__text">{text}</p>
        </div>
      </Link>
    </li>
  );
}
