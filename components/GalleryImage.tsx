"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryImageProps {
	src: string;
	alt: string;
	delay?: number;
	width?: number;
	height?: number;
}

export default function GalleryImage({
	src,
	alt,
	delay = 0,
	width = 400,
	height = 225,
}: GalleryImageProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay }}
			className="overflow-hidden rounded-lg"
		>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-110"
			/>
		</motion.div>
	);
}
