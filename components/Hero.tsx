"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
	const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

	return (
		<section
			ref={heroRef}
			id="about"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
		>
			<motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-b from-[#224390]/10 to-transparent"></div>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,73,113,0.05)_0,transparent_70%)]"></div>
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"linear-gradient(to right, rgba(58,73,113,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(58,73,113,0.05) 1px, transparent 1px)",
						backgroundSize: "40px 40px",
					}}
				></div>
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#224390]/5 rounded-full filter blur-3xl"></div>
				<div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#224390]/5 rounded-full filter blur-3xl"></div>
			</motion.div>

			<div className="container mx-auto px-4 z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center lg:text-left"
					>
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#224390]">
							Transformamos Ideas en Soluciones Digitales
						</h1>
						<p className="text-xl md:text-2xl text-slate-600 mb-8">
							En Stem Group creamos software a medida que impulsa el crecimiento
							de tu negocio
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Button className="bg-[#224390] hover:bg-[#2d3a5a] text-white text-lg px-8 py-6 h-auto">
								Iniciar Proyecto
								<ChevronRight className="ml-2" />
							</Button>
							<Button
								variant="outline"
								className="border-[#224390] text-[#224390] hover:bg-[#224390]/10 text-lg px-8 py-6 h-auto"
							>
								Conocer Más
							</Button>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="hidden lg:block"
					>
						<div className="relative h-[500px] w-full">
							<div className="absolute inset-0 bg-[#224390]/5 rounded-2xl"></div>
							<div className="absolute inset-4 overflow-hidden rounded-xl">
								<Image
									src="/placeholder.svg?height=500&width=600"
									alt="Stem Group Team"
									fill
									className="object-cover rounded-xl"
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
				<div className="w-8 h-12 rounded-full border-2 border-[#224390] flex items-start justify-center">
					<div className="w-1 h-3 bg-[#224390] rounded-full mt-2 animate-pulse"></div>
				</div>
			</div>
		</section>
	);
}
