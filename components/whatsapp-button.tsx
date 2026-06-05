'use client';

import { contactInfo } from '@/lib/content';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href={contactInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-soft-lg hover:scale-110 transition-transform"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
