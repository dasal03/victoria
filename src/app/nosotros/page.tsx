import type { Metadata } from 'next';
import Breadcrumbs from '../_components/Breadcrumbs';
import { ImageBand, Intro, Statement } from '../_components/sections';

export const metadata: Metadata = { title: 'Nosotros | Victoria Home Health & Spa', description: 'Conoce la esencia de Victoria Home Health & Spa.' };
export default function Page() {
  return <div className="page-inner"><Breadcrumbs current="Nosotros" /><Intro as="h1" /><Statement /><ImageBand /></div>;
}
