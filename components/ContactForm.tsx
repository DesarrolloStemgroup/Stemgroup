"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Send } from "lucide-react";

export default function ContactForm() {
	return (
		<section id="contact" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden animate-on-scroll opacity-0 transition-all duration-1000 scale-95"
				>
					<div className="absolute top-0 right-0 w-64 h-64 bg-[#224390]/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#224390]/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>

					<div className="relative z-10 flex flex-col items-center text-center">
						<div className="mb-10">
							<h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#224390]">
								¿Listo para Transformar tu Idea en Realidad?
							</h2>
							<p className="text-xl text-slate-600">
								Contáctanos hoy mismo y comencemos a trabajar en tu próximo
								proyecto.
							</p>
						</div>

						<div className="flex flex-col gap-4 md:flex-row md:justify-center md:items-center">
							<div className="flex items-center">
								<div className="w-10 h-10 rounded-full bg-[#224390]/10 flex items-center justify-center mr-3">
									<MessageSquare className="h-5 w-5 text-[#224390]" />
								</div>
								<div className="text-left">
									<p className="text-sm text-slate-500">Email</p>
									<p className="text-slate-800">contacto@stemgroup.com</p>
								</div>
							</div>
							<div className="flex items-center md:ml-8">
								<div className="w-10 h-10 rounded-full bg-[#224390]/10 flex items-center justify-center mr-3">
									<Phone className="h-5 w-5 text-[#224390]" />
								</div>
								<div className="text-left">
									<p className="text-sm text-slate-500">Teléfono</p>
									<p className="text-slate-800">+1 (555) 123-4567</p>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
