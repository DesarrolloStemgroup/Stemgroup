"use client";

import { useEffect } from "react";
import GalleryImage from "@/components/GalleryImage";
import segmento1 from "@/public/segmento1.jpeg";
import segmento2 from "@/public/segmento2.jpeg";
import segmento3 from "@/public/segmento3.jpeg";
import segmento4 from "@/public/segmento4.jpeg";
import segmento5 from "@/public/segmento5.jpeg";
import segmento6 from "@/public/segmento6.jpeg";

export default function SectionSegmentsGallery() {
	useScrollAnimations();

	const images = [
		{ src: segmento1.src, alt: "Jetsmart" },
		{ src: segmento2.src, alt: "Juegos" },
		{ src: segmento3.src, alt: "Trivias" },
		{ src: segmento4.src, alt: "Subastas" },
		{ src: segmento5.src, alt: "Tienda online" },
		{ src: segmento6.src, alt: "Sorteos" },
	];

	return (
		<section id="segmentos" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#224390]">
						Segmentos destacados
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto">
						Algunas secciones que componen los sitios de nuestros clientes:
						innovación y usabilidad en cada bloque.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{images.map(({ src, alt }, i) => (
						<div key={alt} style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
							<GalleryImage
								src={src}
								alt={alt}
								delay={0.1 + i * 0.1}
								width={300}
								height={80}
							/>
						</div>
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
