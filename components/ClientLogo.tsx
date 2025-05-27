"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ClientLogo({ delay }: { delay?: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay }}
			className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10"
		>
			<div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-24">
				<div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
					<Briefcase className="text-gray-400" size={32} />
				</div>
			</div>
		</motion.div>
	);
}
