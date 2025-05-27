"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link href="/" className="flex items-center gap-2">
					<div className="relative w-8 h-8">
						<div className="absolute inset-0 bg-[#224390] rounded-md transform-gpu"></div>
						<div className="absolute inset-0 flex items-center justify-center">
							<span className="font-bold text-lg text-white">S</span>
						</div>
					</div>
					<span className="font-bold text-xl text-[#224390]">Stem Group</span>
				</Link>

				<nav className="hidden md:flex items-center gap-8">
					<NavLink href="#about">Nosotros</NavLink>
					<NavLink href="#highlights">Destacados</NavLink>
					<NavLink href="#projects">Proyectos</NavLink>
					<NavLink href="#clients">Clientes</NavLink>
					<NavLink href="#gallery">Galería</NavLink>
					<Button className="bg-[#224390] hover:bg-[#2d3a5a] text-white">
						Contáctanos
					</Button>
				</nav>

				<button
					className="md:hidden text-[#224390]"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{isMenuOpen && (
				<div className="md:hidden bg-white shadow-md">
					<div className="container mx-auto px-4 py-4 flex flex-col gap-4">
						<MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
							Nosotros
						</MobileNavLink>
						<MobileNavLink
							href="#highlights"
							onClick={() => setIsMenuOpen(false)}
						>
							Destacados
						</MobileNavLink>
						<MobileNavLink
							href="#projects"
							onClick={() => setIsMenuOpen(false)}
						>
							Proyectos
						</MobileNavLink>
						<MobileNavLink href="#clients" onClick={() => setIsMenuOpen(false)}>
							Clientes
						</MobileNavLink>
						<MobileNavLink href="#gallery" onClick={() => setIsMenuOpen(false)}>
							Galería
						</MobileNavLink>
						<Button className="bg-[#224390] hover:bg-[#2d3a5a] text-white w-full">
							Contáctanos
						</Button>
					</div>
				</div>
			)}
		</header>
	);
}

function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className="text-slate-700 hover:text-[#224390] transition-colors relative group"
		>
			{children}
			<span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#224390] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
		</Link>
	);
}

function MobileNavLink({
	href,
	onClick,
	children,
}: {
	href: string;
	onClick?: () => void;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className="text-slate-700 hover:text-[#224390] transition-colors py-2 block border-b border-slate-200"
			onClick={onClick}
		>
			{children}
		</Link>
	);
}
