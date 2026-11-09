import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Victoria | Home Health & Spa', description: 'Atención médica y bienestar, con una experiencia pensada alrededor de cada persona. Barranquilla, Colombia.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="es"><body>{children}</body></html>; }
