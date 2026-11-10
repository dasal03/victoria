import { useState } from 'react';
import { Arrow, Button } from '../../components/Button';
import { Figure } from '../../components/Figure';
import { PendingNote, showPending } from '../../components/Pending';
import { media } from '../../content/media';
import { ctaLabels, site } from '../../content/site';
import { testimonials, type Testimonial } from '../../content/testimonials';
import './Testimonials.css';

function Stars({ rating }: { rating: number }) {
  return (
    <span className="stars" role="img" aria-label={`Calificación ${rating.toFixed(1)} de 5`}>
      <span className="stars__value">{rating.toFixed(1)}</span>
      <span className="stars__icons" aria-hidden="true">
        ★★★★★
      </span>
    </span>
  );
}

/** Cita con un fragmento destacado en negro sobre el resto en gris. */
function Quote({ t }: { t: Testimonial }) {
  if (!t.highlight || !t.quote.includes(t.highlight)) return <>“{t.quote}”</>;
  const [before, after] = t.quote.split(t.highlight);
  return (
    <>
      “{before}
      <strong>{t.highlight}</strong>
      {after}”
    </>
  );
}

/**
 * Testimonios en un panel claro sobre fotografía de interiores, con carrusel:
 * tarjeta del anterior a la izquierda, retrato y cita en el centro, tarjeta
 * del siguiente a la derecha. Los testimonios provisionales solo se muestran
 * en modo de revisión (ver content/testimonials.ts).
 */
export function Testimonials() {
  const items = testimonials.filter((t) => !t.placeholder || showPending);
  const [index, setIndex] = useState(0);
  if (items.length === 0) return null;

  const n = items.length;
  const current = items[index];
  const prev = items[(index - 1 + n) % n];
  const next = items[(index + 1) % n];
  const go = (step: number) => setIndex((i) => (i + step + n) % n);

  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <div className="reviews__bg" aria-hidden="true">
        <Figure media={media.facilities} reveal={false} showBrief={false} sizes="100vw" />
      </div>

      <div className="reviews__panel container" data-reveal>
        <div className="reviews__head">
          <h2 id="reviews-title" className="h2 reviews__title">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="body reviews__intro">
            Cada proceso empieza por escuchar. Estas son algunas experiencias de personas que han confiado en Victoria
            para su atención médica y su acompañamiento.
          </p>
        </div>

        {items.some((t) => t.placeholder) && (
          <div className="reviews__flag">
            <PendingNote>Testimonios de ejemplo: se sustituirán por opiniones reales autorizadas.</PendingNote>
          </div>
        )}

        <div className="reviews__stage" aria-roledescription="carrusel" aria-label="Testimonios">
          {n > 1 && (
            <button type="button" className="reviews__side reviews__side--prev" onClick={() => go(-1)}>
              <span className="visually-hidden">Testimonio anterior: </span>
              <span className="reviews__avatar">
                <Figure media={prev.photo} reveal={false} showBrief={false} sizes="64px" />
              </span>
              <span className="reviews__side-meta">
                <span className="reviews__name">{prev.name}</span>
                <span className="reviews__service">{prev.service}</span>
              </span>
              <Stars rating={prev.rating} />
            </button>
          )}

          {n > 1 && (
            <button type="button" className="reviews__nav reviews__nav--prev" onClick={() => go(-1)} aria-label="Testimonio anterior">
              <Arrow />
            </button>
          )}

          <div className="reviews__photo" key={`p-${index}`}>
            <Figure media={current.photo} ratio="4 / 5" reveal={false} showBrief={false} sizes="(min-width: 900px) 22vw, 70vw" />
          </div>

          <figure className="reviews__current" key={`q-${index}`} aria-live="polite">
            <blockquote className="reviews__quote">
              <Quote t={current} />
            </blockquote>
            <figcaption className="reviews__cap">
              <span className="reviews__who">
                <span className="reviews__name">{current.name}</span>
                <span className="reviews__service">{current.service}</span>
              </span>
              <span className="reviews__grade">
                <span className="reviews__grade-label">Calificación</span>
                <Stars rating={current.rating} />
              </span>
            </figcaption>
          </figure>

          {n > 1 && (
            <button type="button" className="reviews__side reviews__side--next" onClick={() => go(1)}>
              <span className="visually-hidden">Siguiente testimonio: </span>
              <Figure media={next.photo} reveal={false} showBrief={false} sizes="(min-width: 900px) 18vw, 40vw" />
              <span className="reviews__side-overlay">
                <span className="reviews__name">{next.name}</span>
                <Stars rating={next.rating} />
              </span>
            </button>
          )}

          {n > 1 && (
            <button type="button" className="reviews__nav reviews__nav--next" onClick={() => go(1)} aria-label="Siguiente testimonio">
              <Arrow />
            </button>
          )}
        </div>

        <div className="reviews__foot">
          <div className="reviews__actions">
            <Button to="/contacto#valoracion">{ctaLabels.primary}</Button>
            <Button to="/especialidades" variant="secondary">
              Ver especialidades
            </Button>
          </div>
          <p className="reviews__aside">
            Atención médica y acompañamiento en {site.city}. <strong>Valoración personalizada.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
