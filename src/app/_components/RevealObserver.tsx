'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Fades in elements marked with data-reveal. Content stays visible without JS or with reduced motion. */
export default function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const root = document.documentElement;
    root.classList.add('can-reveal');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
