import type { CSSProperties } from 'react';
import { Button } from '../../components/Button';
import { Figure } from '../../components/Figure';
import { ProcessStep } from '../../components/ProcessStep';
import { media } from '../../content/media';
import { ctaLabels } from '../../content/site';
import './HowItWorks.css';

const steps = [
  {
    title: 'Cuéntanos qué necesitas',
    text: 'Indica el servicio que te interesa o, si aún no lo tienes claro, describe brevemente lo que buscas.',
    to: '/especialidades',
  },
  {
    title: 'Solicita una valoración',
    text: 'Envía tu solicitud a través del formulario o de los canales oficiales de Victoria.',
    to: '/contacto#valoracion',
  },
  {
    title: 'Recibe orientación',
    text: 'El equipo te contactará para orientarte sobre los siguientes pasos y las opciones disponibles.',
    to: '/contacto',
  },
];

/** Foto redondeada a la izquierda; título, CTA y los pasos como tarjetas a la derecha. */
export function HowItWorks() {
  return (
    <section className="how section on-dark" aria-labelledby="how-title">
      <div className="how__grid container">
        <Figure
          media={media.howItWorks}
          ratio="4 / 5"
          className="how__media"
          sizes="(min-width: 1101px) 40vw, 100vw"
        />

        <div className="how__content">
          <h2 id="how-title" className="h2 how__title" data-reveal>
            Tres pasos para dar el primero.
          </h2>
          <div className="how__cta" data-reveal style={{ '--reveal-i': 1 } as CSSProperties}>
            <Button to="/contacto#valoracion" variant="light">
              {ctaLabels.primary}
            </Button>
          </div>

          <hr className="how__rule" />

          <ol className="how__steps" role="list">
            {steps.map((s, i) => (
              <ProcessStep key={s.title} index={i} {...s} />
            ))}
          </ol>

          <p className="how__note body">
            Esta guía describe cómo iniciar el contacto. No sustituye un protocolo clínico ni las indicaciones de un
            profesional de la salud.
          </p>
        </div>
      </div>
    </section>
  );
}
