import type { Metadata } from 'next';
import Breadcrumbs from '../_components/Breadcrumbs';
import Specialties from '../_components/Specialties';
import { CtaBand } from '../_components/sections';

export const metadata: Metadata = { title: 'Especialidades | Victoria Home Health & Spa', description: 'Explora las nueve especialidades médicas y sus procedimientos.' };
export default function Page() {
  return <div className="page-inner"><Breadcrumbs current="Especialidades" /><Specialties as="h1" /><CtaBand /></div>;
}
