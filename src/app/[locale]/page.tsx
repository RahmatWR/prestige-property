import HeroSection from "./_components/HeroSection";
import AboutSection from "./_components/AboutSection";
import ProjectsSection from "./_components/ProjectsSection";
import WhyUsSection from "./_components/WhyUsSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import CTASection from "./_components/CTASection";

export default function HomePage() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<WhyUsSection />
			<TestimonialsSection />
			<CTASection />
		</main>
	);
}
