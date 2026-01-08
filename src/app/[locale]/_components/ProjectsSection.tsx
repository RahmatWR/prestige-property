"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslations } from "next-intl";
import project1 from "../../assets/project-1.jpeg";
import project2 from "../../assets/project-2.jpeg";
import project3 from "../../assets/project-3.jpeg";

gsap.registerPlugin(ScrollTrigger);

const projectImages = [project1, project2, project3];

const ProjectsSection: React.FC = () => {
	const t = useTranslations("Projects");
	const items = t.raw("items") as {
		name: string;
		location: string;
		type: string;
	}[];
	const sectionRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Header animation
			if (headerRef.current) {
				gsap.fromTo(
					headerRef.current.querySelectorAll("[data-animate]"),
					{ opacity: 0, y: 60 },
					{
						opacity: 1,
						y: 0,
						duration: 1,
						stagger: 0.15,
						ease: "power3.out",
						scrollTrigger: {
							trigger: headerRef.current,
							start: "top 80%",
							toggleActions: "play none none reverse",
						},
					}
				);
			}

			// Cards animation
			if (cardsRef.current) {
				const cards = cardsRef.current.querySelectorAll("[data-card]");
				gsap.fromTo(
					cards,
					{ opacity: 0, y: 100, scale: 0.95 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 1,
						stagger: 0.2,
						ease: "power3.out",
						scrollTrigger: {
							trigger: cardsRef.current,
							start: "top 75%",
							toggleActions: "play none none reverse",
						},
					}
				);

				// Parallax for card images - reduced values for controlled movement
				cards.forEach((card) => {
					const img = card.querySelector("[data-parallax-img]");
					if (img) {
						gsap.fromTo(
							img,
							{ y: -15 },
							{
								y: 15,
								ease: "none",
								scrollTrigger: {
									trigger: card,
									start: "top bottom",
									end: "bottom top",
									scrub: 1.5,
								},
							}
						);
					}
				});
			}
		});

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="projects"
			ref={sectionRef}
			className="section-padding bg-background">
			<div className="container-custom">
				{/* Section Header */}
				<div ref={headerRef} className="max-w-3xl mb-16 lg:mb-20">
					<span
						data-animate
						className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
						{t("subtitle")}
					</span>
					<h2
						data-animate
						className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
						{t("title")}
					</h2>
				</div>

				{/* Projects Grid */}
				<div
					ref={cardsRef}
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{items.map((project, index) => (
						<article
							key={index}
							data-card
							className="group relative bg-card rounded-sm overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant cursor-pointer">
							{/* Image Container */}
							<div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
								<div
									data-parallax-img
									className="absolute inset-0 w-full h-[110%] -top-[5%]">
									<Image
										src={projectImages[index]}
										alt={project.name}
										className="object-cover transition-transform duration-700 group-hover:scale-105"
										loading="lazy"
										quality={60}
										fill
										placeholder="blur"
										sizes="(max-width: 768px) 90vw,
										(max-width: 1024px) 45vw, 30vw"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
							</div>

							{/* Content */}
							<div className="p-6 lg:p-8">
								<div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
									<MapPin className="w-4 h-4" />
									<span>{project.location}</span>
								</div>
								<h3 className="font-heading text-xl lg:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
									{project.name}
								</h3>
								<p className="text-muted-foreground mb-4">{project.type}</p>
								<div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
									<span>{t("viewProject")}</span>
									<ArrowUpRight className="w-4 h-4" />
								</div>
							</div>
						</article>
					))}
				</div>

				{/* View All CTA */}
				<div className="text-center mt-12 lg:mt-16">
					<a
						href="#contact"
						className="btn-secondary inline-flex items-center gap-2">
						<span>{t("viewProject")}</span>
						<ArrowUpRight className="w-4 h-4" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
