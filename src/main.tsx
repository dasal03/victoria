import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import '@fontsource-variable/hanken-grotesk/index.css';
import '@fontsource-variable/noto-serif-display/standard.css';
import '@fontsource-variable/noto-serif-display/standard-italic.css';

import './styles/fonts.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/pages.css';
import App from './App';

// En vistas previas embebidas (VITE_ROUTER=memory) la URL del navegador no es controlable.
const Router = import.meta.env.VITE_ROUTER === 'memory' ? MemoryRouter : BrowserRouter;

// Las animaciones de aparición solo se activan con JavaScript disponible.
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
