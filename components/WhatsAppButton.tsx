"use client";

import { ImWhatsapp } from "react-icons/im";

export default function WhatsAppButton() {
	return (
		<a
			href="https://wa.me/1234567890"
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
			aria-label="Contactar por WhatsApp"
		>
			<ImWhatsapp size={32} />
		</a>
	);
}
