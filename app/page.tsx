import Hero from "@/components/Hero";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionHighlights from "@/components/SectionHighlights";
import SectionProjects from "@/components/SectionProjects";
import SectionGallery from "@/components/SectionGallery";

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-slate-800 overflow-hidden">
			<Header />
			<Hero />
			<SectionProjects />
			<SectionHighlights />
			<SectionGallery />
			<ContactForm />
			<Footer />
			<WhatsAppButton />
		</div>
	);
}
