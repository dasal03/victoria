import { whatsapp } from '../services';
import { WhatsAppIcon } from './icons';

export default function WhatsAppFloat() {
  return <a className="wa-float" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp (se abre en una pestaña nueva)"><WhatsAppIcon /></a>;
}
