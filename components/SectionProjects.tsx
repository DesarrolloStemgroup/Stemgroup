"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import centralNorte from "@/public/centralNorte.gif";
import challenger from "@/public/challenger360.gif";
import copa from "@/public/copa.gif";
import delpo from "@/public/delpo.gif";
import jetsmart from "@/public/jetsmart.gif";
import ocasa from "@/public/ocasa.gif";

function Proyectos() {
	// @ts-ignore
	function ProjectCard({ image, title, category, description, delay }) {
		return (
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay }}
				className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10"
			>
				<Card className="bg-white border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
					<div className="relative h-48 overflow-hidden">
						<Image
							src={image}
							alt={title}
							fill
							className="object-cover transition-transform duration-500 group-hover:scale-110"
						/>
					</div>
					<CardContent className="p-6">
						<span className="inline-block px-3 py-1 text-xs font-semibold bg-[#224390]/10 text-[#224390] rounded-full mb-2">
							{category}
						</span>
						<h3 className="text-xl font-bold text-[#224390] mb-2">{title}</h3>
						<p className="text-slate-600 mb-4">{description}</p>
						<Button
							variant="outline"
							className="border-[#224390] text-[#224390] hover:bg-[#224390]/10"
						>
							Ver Detalles
						</Button>
					</CardContent>
				</Card>
			</motion.div>
		);
	}
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
					<ProjectCard
						image={jetsmart}
						title="Jetsmart"
						category="Category"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa quidem commodi recusandae, "
						delay={0.1}
					/>
					<ProjectCard
						image={copa}
						title="Copa Argentina"
						category="Category"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa quidem commodi recusandae, "
						delay={0.2}
					/>
					<ProjectCard
						image={delpo}
						title="Del potro"
						category="Category"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa quidem commodi recusandae, "
						delay={0.3}
					/>
					<ProjectCard
						image={ocasa}
						title="Ocasa"
						category="Category"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa quidem commodi recusandae, "
						delay={0.3}
					/>
					<ProjectCard
						image={centralNorte}
						title="Central Norte"
						category="Category"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa quidem commodi recusandae, "
						delay={0.3}
					/>
					<ProjectCard
						image={challenger}
						title="Challenger 360"
						category="Category"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa quidem commodi recusandae, "
						delay={0.3}
					/>
				</div>
			</div>
		</section>
	);
}

export default Proyectos;
