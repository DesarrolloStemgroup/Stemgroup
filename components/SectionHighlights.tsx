"use client";

import { useEffect } from "react";
import HighlightCard from "@/components/HighlightCard";
import { BarChart3, Lightbulb, MessageCircle, Trophy } from "lucide-react";

export default function SectionHighlights() {
	useScrollAnimations();

	return (
		<section id="highlights" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#224390]">
						Nuestro proceso
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto">
						Lo que nos diferencia y nos hace ser la mejor opción para tu
						proyecto
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<HighlightCard
						icon={<Trophy size={40} className="text-[#224390]" />}
						title="Reconocimiento de la comunidad"
						description="Nuestro trabajo es reconocido por la comunidad tecnológica por su calidad e innovación."
						delay={0.1}
					/>
					<HighlightCard
						icon={<MessageCircle size={40} className="text-[#224390]" />}
						title="Comunicación clara y continua"
						description="Mantenemos una comunicación transparente y constante durante todo el desarrollo del proyecto."
						delay={0.2}
					/>
					<HighlightCard
						icon={<Lightbulb size={40} className="text-[#224390]" />}
						title="Progreso y motivación"
						description="Impulsamos el progreso constante y mantenemos la motivación alta en todos nuestros proyectos."
						delay={0.3}
					/>
					<HighlightCard
						icon={<BarChart3 size={40} className="text-[#224390]" />}
						title="Análisis y planificación"
						description="Realizamos un análisis detallado y una planificación estratégica para asegurar el éxito."
						delay={0.4}
					/>
				</div>
			</div>
		</section>
	);
}

function useScrollAnimations() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("show");
					}
				});
			},
			{ threshold: 0.1 }
		);
		document
			.querySelectorAll(".animate-on-scroll")
			.forEach((el) => observer.observe(el));
		return () => {
			document
				.querySelectorAll(".animate-on-scroll")
				.forEach((el) => observer.unobserve(el));
		};
	}, []);
}
