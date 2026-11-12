import Link from 'next/link';

export default function Breadcrumbs({ current }: { current: string }) {
  return <nav className="breadcrumbs container" aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">{current}</span></nav>;
}
