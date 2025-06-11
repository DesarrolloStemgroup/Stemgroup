export default function Footer() {
	return (
		<footer className="bg-[#224390] text-white py-12">
			<div className="container mx-auto px-4">
				<div className="border-white/20 pt-2 text-center text-white/80">
					<p>
						© {new Date().getFullYear()} Stem Group. Todos los derechos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
