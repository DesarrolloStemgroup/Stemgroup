"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function HighlightCard({
	icon,
	title,
	description,
	delay,
}: {
	icon: React.ReactNode;
	title: string;
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
			<Card className="bg-white border-slate-200 hover:border-[#224390]/50 hover:shadow-md transition-all duration-300 h-full group">
				<CardContent className="p-6">
					<div className="mb-4 p-3 bg-[#224390]/10 rounded-lg inline-block group-hover:bg-[#224390]/20 transition-colors duration-300">
						{icon}
					</div>
					<h3 className="text-xl font-bold mb-2 text-[#224390]">{title}</h3>
					<p className="text-slate-600">{description}</p>
				</CardContent>
			</Card>
		</motion.div>
	);
}
