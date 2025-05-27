"use client";

import { useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function SectionProjects() {
	useScrollAnimations();

	return (
		<section id="projects" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#224390]">
						Nuestros Clientes
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto">
						Conoce algunos de los proyectos que hemos desarrollado para nuestros
						clientes
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						"Jetsmart",
						"Copa Argentina",
						"Del potro",
						"Cormillot",
						"Central Norte",
					].map((title, i) => (
						<ProjectCard
							key={title}
							image="/placeholder.svg?height=300&width=500"
							title={title}
							category="Category"
							description="Sistema integral para la gestión de recursos empresariales, clientes y proyectos."
							delay={0.1 + i * 0.1}
						/>
					))}
				</div>

				<div className="text-center mt-12">
					<Button className="bg-[#224390] hover:bg-[#2d3a5a] text-white">
						Ver Todos los Proyectos
						<ChevronRight className="ml-2 h-4 w-4" />
					</Button>
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
