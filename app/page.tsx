"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	BarChart3,
	Briefcase,
	ChevronRight,
	Code,
	Lightbulb,
	Menu,
	MessageCircle,
	MessageSquare,
	Phone,
	Send,
	Trophy,
	Users,
	X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/Hero";

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
	const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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

		document.querySelectorAll(".animate-on-scroll").forEach((el) => {
			observer.observe(el);
		});

		return () => {
			document.querySelectorAll(".animate-on-scroll").forEach((el) => {
				observer.unobserve(el);
			});
		};
	}, []);

	return (
		<div className="min-h-screen bg-white text-slate-800 overflow-hidden">
			{/* Header */}
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

				{/* Mobile menu */}
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
							<MobileNavLink
								href="#clients"
								onClick={() => setIsMenuOpen(false)}
							>
								Clientes
							</MobileNavLink>
							<MobileNavLink
								href="#gallery"
								onClick={() => setIsMenuOpen(false)}
							>
								Galería
							</MobileNavLink>
							<Button className="bg-[#224390] hover:bg-[#2d3a5a] text-white w-full">
								Contáctanos
							</Button>
						</div>
					</div>
				)}
			</header>

			{/* Hero Section - Presentación de Stem Group */}
			{/*<section
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
								En Stem Group creamos software a medida que impulsa el
								crecimiento de tu negocio
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
			</section> */}
			<Hero />

			{/* Puntos a destacar */}
			<section id="highlights" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
						<h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#224390]">
							Nuestro proceso
						</h2>
						<p className="text-xl text-slate-600 max-w-3xl mx-auto">
							Lo que nos diferencia y nos hace ser la mejor opción para tu
							proyecto
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<HighlightCard
							icon={<Trophy size={40} className="text-[#224390]" />}
							title="Reconocimiento de la comunidad"
							description="Nuestro trabajo es reconocido por la comunidad tecnológica por su calidad e innovación."
							delay={0.1}
						/>
						<HighlightCard
							icon={<MessageCircle size={40} className="text-[#224390]" />}
							title="Comunicación clara y continua"
							description="Mantenemos una comunicación transparente y constante durante todo el desarrollo del proyecto."
							delay={0.2}
						/>
						<HighlightCard
							icon={<Lightbulb size={40} className="text-[#224390]" />}
							title="Progreso y motivación"
							description="Impulsamos el progreso constante y mantenemos la motivación alta en todos nuestros proyectos."
							delay={0.3}
						/>
						<HighlightCard
							icon={<BarChart3 size={40} className="text-[#224390]" />}
							title="Análisis y planificación"
							description="Realizamos un análisis detallado y una planificación estratégica para asegurar el éxito."
							delay={0.4}
						/>
					</div>
				</div>
			</section>

			{/* Proyectos */}
			<section id="projects" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
						<h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#224390]">
							Nuestros Clientes
						</h2>
						<p className="text-xl text-slate-600 max-w-3xl mx-auto">
							Conoce algunos de los proyectos que hemos desarrollado para
							nuestros clientes
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<ProjectCard
							image="/placeholder.svg?height=300&width=500"
							title="Jetsmart"
							category="Category"
							description="Plataforma completa de comercio electrónico con gestión de inventario y pagos integrados."
							delay={0.1}
						/>
						<ProjectCard
							image="/placeholder.svg?height=300&width=500"
							title="Copa Argentina"
							category="Category"
							description="Aplicación móvil para gestión financiera personal con análisis de gastos e inversiones."
							delay={0.2}
						/>
						<ProjectCard
							image="/placeholder.svg?height=300&width=500"
							title="Del potro"
							category="Category"
							description="Sistema integral para la gestión de recursos empresariales, clientes y proyectos."
							delay={0.3}
						/>
						<ProjectCard
							image="/placeholder.svg?height=300&width=500"
							title="Cormillot"
							category="Category"
							description="Sistema integral para la gestión de recursos empresariales, clientes y proyectos."
							delay={0.3}
						/>
						<ProjectCard
							image="/placeholder.svg?height=300&width=500"
							title="Central Norte"
							category="Category"
							description="Sistema integral para la gestión de recursos empresariales, clientes y proyectos."
							delay={0.3}
						/>
					</div>

					<div className="text-center mt-12">
						<Button className="bg-[#224390] hover:bg-[#2d3a5a] text-white">
							Ver Todos los Proyectos
							<ChevronRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</div>
			</section>

			{/* Clientes y Aliados */}
			{/*<section id="clients" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
						<h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#224390]">
							Clientes y Aliados
						</h2>
						<p className="text-xl text-slate-600 max-w-3xl mx-auto">
							Empresas que han confiado en nosotros para desarrollar sus
							soluciones tecnológicas
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
						{[1, 2, 3, 4, 5, 6].map((i) => (
							<ClientLogo key={i} delay={i * 0.1} />
						))}
					</div>

					<div className="mt-20">
						<div className="text-center mb-12 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
							<h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#224390]">
								Lo Que Dicen Nuestros Clientes
							</h3>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<TestimonialCard
								quote="Stem Group transformó nuestra idea en una plataforma robusta que superó nuestras expectativas. Su equipo técnico es excepcional."
								author="María Rodríguez"
								company="CEO, TechStart"
								delay={0.1}
							/>
							<TestimonialCard
								quote="Trabajar con Stem Group ha sido una experiencia extraordinaria. Entendieron perfectamente nuestras necesidades."
								author="Carlos Méndez"
								company="Director de Innovación, GlobalTech"
								delay={0.2}
							/>
							<TestimonialCard
								quote="La capacidad técnica y profesionalismo de Stem Group es impresionante. Han sido un socio clave en nuestra transformación digital."
								author="Laura Sánchez"
								company="CTO, InnovateCorp"
								delay={0.3}
							/>
						</div>
					</div>
				</div>
			</section> */}

			{/* Galería de Imágenes */}
			<section id="gallery" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
						<h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#224390]">
							Galería
						</h2>
						<p className="text-xl text-slate-600 max-w-3xl mx-auto">
							Imágenes de nuestro equipo, oficinas y eventos
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						<GalleryImage
							src="/placeholder.svg?height=300&width=300"
							alt="Oficina Stem Group"
							delay={0.1}
						/>
						<GalleryImage
							src="/placeholder.svg?height=300&width=300"
							alt="Equipo trabajando"
							delay={0.2}
						/>
						<GalleryImage
							src="/placeholder.svg?height=300&width=300"
							alt="Reunión de equipo"
							delay={0.3}
						/>
						<GalleryImage
							src="/placeholder.svg?height=300&width=300"
							alt="Evento tecnológico"
							delay={0.4}
						/>
						<GalleryImage
							src="/placeholder.svg?height=300&width=300"
							alt="Presentación de proyecto"
							delay={0.5}
						/>
						<GalleryImage
							src="/placeholder.svg?height=300&width=300"
							alt="Desarrollo de software"
							delay={0.6}
						/>
						<GalleryImage
							src="/placeholder.svg?height=300&width=300"
							alt="Hackathon interno"
							delay={0.7}
						/>
						<GalleryImage
							src="/placeholder.svg?height=300&width=300"
							alt="Celebración de equipo"
							delay={0.8}
						/>
					</div>
				</div>
			</section>

			{/* Formulario de Contacto */}
			<section id="contact" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden animate-on-scroll opacity-0 transition-all duration-1000 scale-95">
						<div className="absolute top-0 right-0 w-64 h-64 bg-[#224390]/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
						<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#224390]/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>

						<div className="relative z-10">
							<div className="text-center mb-10">
								<h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#224390]">
									¿Listo para Transformar tu Idea en Realidad?
								</h2>
								<p className="text-xl text-slate-600">
									Contáctanos hoy mismo y comencemos a trabajar en tu próximo
									proyecto
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div>
									<h3 className="text-xl font-semibold mb-4 flex items-center text-[#224390]">
										<MessageSquare className="mr-2" />
										Hablemos
									</h3>
									<p className="text-slate-600 mb-6">
										Estamos aquí para responder tus preguntas y discutir cómo
										podemos ayudarte a alcanzar tus objetivos.
									</p>
									<div className="space-y-4">
										<div className="flex items-center">
											<div className="w-10 h-10 rounded-full bg-[#224390]/10 flex items-center justify-center mr-3">
												<MessageSquare className="h-5 w-5 text-[#224390]" />
											</div>
											<div>
												<p className="text-sm text-slate-500">Email</p>
												<p className="text-slate-800">contacto@stemgroup.com</p>
											</div>
										</div>
										<div className="flex items-center">
											<div className="w-10 h-10 rounded-full bg-[#224390]/10 flex items-center justify-center mr-3">
												<Phone className="h-5 w-5 text-[#224390]" />
											</div>
											<div>
												<p className="text-sm text-slate-500">Teléfono</p>
												<p className="text-slate-800">+1 (555) 123-4567</p>
											</div>
										</div>
									</div>
								</div>

								<div>
									<form className="space-y-4">
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-slate-700 mb-1"
											>
												Nombre
											</label>
											<input
												type="text"
												id="name"
												className="w-full px-4 py-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224390] text-slate-800"
												placeholder="Tu nombre"
											/>
										</div>
										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-slate-700 mb-1"
											>
												Email
											</label>
											<input
												type="email"
												id="email"
												className="w-full px-4 py-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224390] text-slate-800"
												placeholder="tu@email.com"
											/>
										</div>
										<div>
											<label
												htmlFor="message"
												className="block text-sm font-medium text-slate-700 mb-1"
											>
												Mensaje
											</label>
											<textarea
												id="message"
												rows={4}
												className="w-full px-4 py-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224390] text-slate-800"
												placeholder="Cuéntanos sobre tu proyecto..."
											></textarea>
										</div>
										<Button className="w-full bg-[#224390] hover:bg-[#2d3a5a] text-white">
											Enviar Mensaje
											<Send className="ml-2 h-4 w-4" />
										</Button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#224390] text-white py-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<Link href="/" className="flex items-center gap-2 mb-4">
								<div className="relative w-8 h-8">
									<div className="absolute inset-0 bg-white rounded-md transform-gpu"></div>
									<div className="absolute inset-0 flex items-center justify-center">
										<span className="font-bold text-lg text-[#224390]">S</span>
									</div>
								</div>
								<span className="font-bold text-xl">Stem Group</span>
							</Link>
							<p className="text-white/80 mb-4">
								Transformamos ideas en soluciones digitales que impulsan el
								crecimiento de tu negocio.
							</p>
							<div className="flex space-x-4">
								<SocialIcon />
								<SocialIcon />
								<SocialIcon />
								<SocialIcon />
							</div>
						</div>

						<div>
							<h3 className="font-bold text-lg mb-4">Servicios</h3>
							<ul className="space-y-2">
								<FooterLink href="#">Desarrollo de Software</FooterLink>
								<FooterLink href="#">Desarrollo Web</FooterLink>
								<FooterLink href="#">Aplicaciones Móviles</FooterLink>
								<FooterLink href="#">Inteligencia Artificial</FooterLink>
								<FooterLink href="#">DevOps</FooterLink>
							</ul>
						</div>

						<div>
							<h3 className="font-bold text-lg mb-4">Empresa</h3>
							<ul className="space-y-2">
								<FooterLink href="#">Sobre Nosotros</FooterLink>
								<FooterLink href="#">Equipo</FooterLink>
								<FooterLink href="#">Carreras</FooterLink>
								<FooterLink href="#">Blog</FooterLink>
								<FooterLink href="#">Contacto</FooterLink>
							</ul>
						</div>

						<div>
							<h3 className="font-bold text-lg mb-4">Legal</h3>
							<ul className="space-y-2">
								<FooterLink href="#">Términos de Servicio</FooterLink>
								<FooterLink href="#">Política de Privacidad</FooterLink>
								<FooterLink href="#">Cookies</FooterLink>
							</ul>
						</div>
					</div>

					<div className="border-t border-white/20 mt-12 pt-8 text-center text-white/80">
						<p>
							© {new Date().getFullYear()} Stem Group. Todos los derechos
							reservados.
						</p>
					</div>
				</div>
			</footer>

			{/* WhatsApp Button */}
			<a
				href="https://wa.me/1234567890"
				target="_blank"
				rel="noopener noreferrer"
				className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
				aria-label="Contactar por WhatsApp"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
					<path d="M14.5 17.5 C 18.15 13.85, 18.15 13.85, 18.15 13.85"></path>
					<path d="M8.5 11.5 C 6.85 9.85, 6.85 9.85, 6.85 9.85"></path>
				</svg>
			</a>
		</div>
	);
}

// @ts-ignore
function NavLink({ href, children }) {
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
// @ts-ignore
function MobileNavLink({ href, onClick, children }) {
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

// @ts-ignore
function HighlightCard({ icon, title, description, delay }) {
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
// @ts-ignore
function ClientLogo({ delay }) {
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
// @ts-ignore
function TestimonialCard({ quote, author, company, delay }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay }}
			className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10"
		>
			<Card className="bg-white border-slate-200 hover:shadow-md transition-all duration-300 h-full">
				<CardContent className="p-6">
					<p className="text-slate-600 mb-6 italic">"{quote}"</p>
					<div className="flex items-center">
						<div className="w-12 h-12 rounded-full bg-[#224390]/20 flex items-center justify-center mr-4">
							<Users className="text-[#224390]" size={20} />
						</div>
						<div>
							<p className="font-semibold text-slate-800">{author}</p>
							<p className="text-sm text-slate-500">{company}</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
// @ts-ignore
function GalleryImage({ src, alt, delay }) {
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

function SocialIcon() {
	return (
		<a
			href="#"
			className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
		>
			<span className="sr-only">Social Media</span>
			<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z"></path>
			</svg>
		</a>
	);
}
// @ts-ignore
function FooterLink({ href, children }) {
	return (
		<li>
			<Link
				href={href}
				className="text-white/80 hover:text-white transition-colors"
			>
				{children}
			</Link>
		</li>
	);
}
