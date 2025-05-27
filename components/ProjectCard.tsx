"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectCard({
	image,
	title,
	category,
	description,
	delay,
}: {
	image: string;
	title: string;
	category: string;
	description: string;
	delay?: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay }}
			className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10"
		>
			<Card className="bg-white border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full group">
				<div className="relative h-48 overflow-hidden">
					<Image
						src={image || "/placeholder.svg"}
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
