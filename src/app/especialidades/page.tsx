import type { Metadata } from 'next';
import Specialties from '../_components/Specialties';
import { ImageBand, PageHero } from '../_components/sections';

export const metadata: Metadata = { title: 'Especialidades | Victoria Home Health & Spa', description: 'Explora las nueve especialidades médicas y sus procedimientos.' };
export default function Page() {
  return <><PageHero crumb="Especialidades" image="/images/doctor.jpg" position="38% 30%" title={<>Nuestras <em>especialidades</em></>} tagline="Nueve áreas médicas, cada una con valoración individual." /><Specialties /><ImageBand /></>;
}
