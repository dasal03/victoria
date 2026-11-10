import type { CSSProperties } from 'react';
import { Button } from '../../components/Button';
import { SpecialtyCard } from '../../components/SpecialtyCard';
import { groupOrder, groups, specialties, specialtiesByGroup } from '../../content/specialties';
import './SpecialtyExplorer.css';

/** Las 9 especialidades en una sola sección: cada una con su imagen y su texto debajo. */
export function SpecialtyExplorer() {
  return (
    <section id="especialidades" className="explorer section" aria-labelledby="explorer-title">
      <div className="explorer__grid container">
        <header className="explorer__head">
          <h2 id="explorer-title" className="h2" data-reveal style={{ '--reveal-i': 1 } as CSSProperties}>
            Encuentra la atención que necesitas.
          </h2>
        </header>

        <div className="explorer__intro" data-reveal style={{ '--reveal-i': 2 } as CSSProperties}>
          <p className="body">Explora nuestras áreas de atención y conoce las opciones disponibles para tu proceso.</p>
          <ul className="explorer__groups" role="list">
            {groupOrder.map((g) => (
              <li key={g}>
                <span>{groups[g].label}</span>
                <span className="index-num">{String(specialtiesByGroup(g).length).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
          <Button to="/especialidades" variant="secondary">
            Ver todas las especialidades
          </Button>
        </div>

        <div className="explorer__cards">
          {specialties.map((s, i) => (
            <SpecialtyCard key={s.slug} specialty={s} index={i % 3} variant="feature" image={s.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
