"use client";

import { useEffect } from "react";
import GalleryImage from "@/components/GalleryImage";

export default function SectionGallery() {
	useScrollAnimations();

	const images = [
		"Oficina Stem Group",
		"Equipo trabajando",
		"Reunión de equipo",
		"Evento tecnológico",
		"Presentación de proyecto",
		"Desarrollo de software",
		"Hackathon interno",
		"Celebración de equipo",
	];

	return (
		<section id="gallery" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#224390]">
						Galería
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto">
						Imágenes de nuestro equipo, oficinas y eventos
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{images.map((alt, i) => (
						<GalleryImage
							key={alt}
							src="/placeholder.svg?height=300&width=300"
							alt={alt}
							delay={0.1 + i * 0.1}
						/>
					))}
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
