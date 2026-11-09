import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Figtree } from 'next/font/google';
import SiteHeader from './_components/SiteHeader';
import SiteFooter from './_components/SiteFooter';
import WhatsAppFloat from './_components/WhatsAppFloat';
import RevealObserver from './_components/RevealObserver';
import './globals.css';

const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const sans = Figtree({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  title: 'Victoria | Home Health & Spa',
  description: 'Atención médica y bienestar, con una experiencia pensada alrededor de cada persona. Barranquilla, Colombia.',
  openGraph: { title: 'Victoria | Home Health & Spa', description: 'Atención médica y bienestar, con una experiencia pensada alrededor de cada persona. Barranquilla, Colombia.', locale: 'es_CO', type: 'website' },
};
export const viewport: Viewport = { themeColor: '#f7f2ea' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
        <RevealObserver />
      </body>
    </html>
  );
}
