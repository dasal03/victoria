'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { specialties, whatsapp } from '../services';
import { Arrow } from './icons';

export default function Specialties({ as: Heading = 'h2' }: { as?: 'h1' | 'h2' }) {
  const [active, setActive] = useState(0);

  // Links such as /especialidades#especialidad-3 (from the menu) open that specialty.
  useEffect(() => {
    function fromHash() {
      const match = window.location.hash.match(/^#especialidad-(\d+)$/);
      const index = match ? Number(match[1]) - 1 : -1;
      if (index >= 0 && index < specialties.length) setActive(index);
    }
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const current = specialties[active];
  return (
    <section className="section specialties" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <p className="label">Especialidades · Un cuidado, muchas formas</p>
            <Heading id="services-title" className="h2">El cuidado <em>que necesitas.</em></Heading>
          </div>
          <p>Explora nuestras áreas de atención. Cada camino comienza con una valoración individual.</p>
        </div>
        <div className="explorer">
          <figure className="explorer-visual arch">
            <Image key={current.image + active} className="photo fade-in" src={`/images/${current.image}.jpg`} alt={`Atención en ${current.name.toLowerCase()}`} fill sizes="(max-width: 900px) 92vw, 38vw" />
            <figcaption><span>{String(active + 1).padStart(2, '0')} / {String(specialties.length).padStart(2, '0')}</span>{current.name}</figcaption>
          </figure>
          <ul className="accordion">
            {specialties.map((service, i) => {
              const open = active === i;
              return (
                <li key={service.name} id={`especialidad-${i + 1}`} className={`acc-item${open ? ' is-open' : ''}`}>
                  <h3>
                    <button type="button" id={`acc-btn-${i}`} aria-expanded={open} aria-controls={`acc-panel-${i}`} onClick={() => setActive(i)}>
                      <span className="acc-index">{String(i + 1).padStart(2, '0')}</span>
                      <span className="acc-title">{service.name}</span>
                      <span className="acc-icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div id={`acc-panel-${i}`} role="region" aria-labelledby={`acc-btn-${i}`} className="acc-panel">
                    <div className="acc-inner" inert={!open}>
                      <p>{service.description}</p>
                      <ul className="chips">{service.items.map(item => <li key={item}>{item}</li>)}</ul>
                      <a className="text-link" href={whatsapp} target="_blank" rel="noopener noreferrer">Consultar esta especialidad <Arrow /></a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="fine-print">Los procedimientos y tratamientos se definen con el especialista según la valoración de cada paciente. Consulta disponibilidad y condiciones de atención.</p>
      </div>
    </section>
  );
}
