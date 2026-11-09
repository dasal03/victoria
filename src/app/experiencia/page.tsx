import type { Metadata } from 'next';
import Breadcrumbs from '../_components/Breadcrumbs';
import { CtaBand, Experience, Journey } from '../_components/sections';

export const metadata: Metadata = { title: 'Experiencia del paciente | Victoria Home Health & Spa', description: 'Alojamiento, alimentación, transporte y acompañamiento para tu recuperación en Barranquilla.' };
export default function Page() {
  return <div className="page-inner page-dark"><Breadcrumbs current="Experiencia del paciente" /><Experience as="h1" /><Journey /><CtaBand /></div>;
}
