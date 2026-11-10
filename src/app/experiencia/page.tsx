import type { Metadata } from 'next';
import { Experience, Gallery, ImageBand, PageHero } from '../_components/sections';

export const metadata: Metadata = { title: 'Experiencia del paciente | Victoria Home Health & Spa', description: 'Alojamiento, alimentación, transporte y acompañamiento para tu recuperación en Barranquilla.' };
export default function Page() {
  return <><PageHero crumb="Experiencia del paciente" image="/images/stay.jpg" position="50% 55%" title={<>Experiencia del <em>paciente</em></>} tagline="Tú te concentras en tu bienestar; nosotros, en los detalles." /><Experience full /><Gallery /><ImageBand /></>;
}
