import type { Metadata } from 'next';
import Breadcrumbs from '../_components/Breadcrumbs';
import { Contact } from '../_components/sections';

export const metadata: Metadata = { title: 'Contacto | Victoria Home Health & Spa', description: 'Habla con Victoria Home Health & Spa por WhatsApp o teléfono.' };
export default function Page() {
  return <div className="page-inner"><Breadcrumbs current="Contacto" /><Contact as="h1" /></div>;
}
