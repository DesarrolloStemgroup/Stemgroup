"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import background from "@/public/jetsmart.gif";

export default function Hero() {
	const heroRef = useRef<HTMLElement>(null);
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
			className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
		>
			<div className="absolute inset-0">
				<div
					className="w-full h-full bg-cover bg-center"
					style={{
						backgroundImage: `url(${background.src})`,
						opacity: 0.7,
					}}
				/>

				<div className="absolute inset-0 bg-gradient-to-b from-[#163866]/50 to-[#163866]/0" />
			</div>
			<motion.div
				style={{ y, opacity }}
				className="absolute inset-0 z-0 pointer-events-none"
			>
				<div className="absolute inset-0 bg-gradient-to-b from-[#224390]/10 to-transparent" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,73,113,0.05)_0,transparent_70%)]" />

				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#224390]/5 rounded-full filter blur-3xl" />
				<div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#224390]/5 rounded-full filter blur-3xl" />
			</motion.div>
			<div className="container mx-auto px-4 z-10 text-center lg:text-left">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center lg:text-left"
					>
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
							Transformamos Ideas en Soluciones Digitales
						</h1>
						<p className="text-xl md:text-2xl text-slate-100 mb-8 font-bold">
							En Stem Group creamos software a medida que impulsa el crecimiento
							de tu negocio
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Link href={"#contact"}>
								{" "}
								<Button className="bg-[#224390] hover:bg-[#2d3a5a] text-white text-lg px-8 py-6 h-auto">
									Iniciar Proyecto
									<ChevronRight className="ml-2" />
								</Button>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
