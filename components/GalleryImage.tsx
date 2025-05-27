"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function GalleryImage({
	src,
	alt,
	delay,
}: {
	src: string;
	alt: string;
	delay?: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay }}
			className="animate-on-scroll opacity-0 transition-all duration-1000 scale-95"
		>
			<div className="relative overflow-hidden rounded-lg aspect-square group">
				<Image
					src={src || "/placeholder.svg"}
					alt={alt}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div className="absolute inset-0 bg-[#224390]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
					<Button
						variant="outline"
						className="border-white text-white hover:bg-white/20"
					>
						Ver Imagen
					</Button>
				</div>
			</div>
		</motion.div>
	);
}
