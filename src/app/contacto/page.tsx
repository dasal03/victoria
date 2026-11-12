import type { Metadata } from 'next';
import { ContactBlock, PageHero } from '../_components/sections';

export const metadata: Metadata = { title: 'Contacto | Victoria Home Health & Spa', description: 'Habla con Victoria Home Health & Spa por WhatsApp o teléfono.' };
export default function Page() {
  return <><PageHero crumb="Contacto" image="/images/nursing.jpg" position="70% 30%" title={<>El primer paso <em>es hablar.</em></>} tagline="WhatsApp, teléfono o Instagram: como te quede más cómodo." /><ContactBlock /></>;
}
