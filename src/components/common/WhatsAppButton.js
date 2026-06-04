import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '918849307823';
  const message = 'Hello! I am interested in your packaging solutions. Can you provide more details?';

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="whatsapp-btn__icon" />
      <span className="whatsapp-btn__tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
