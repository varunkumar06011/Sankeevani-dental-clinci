import { Phone, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, getTelUrl } from '../utils/whatsapp';
import './MobileActionBar.css';

const MobileActionBar = () => {
  return (
    <div className="mobile-action-bar">
      <a href={getTelUrl()} className="action-btn action-call">
        <Phone size={18} />
        <span>Call</span>
      </a>
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="action-btn action-whatsapp"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default MobileActionBar;