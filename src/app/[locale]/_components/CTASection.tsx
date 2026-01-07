"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const CTASection: React.FC = () => {
	const t = useTranslations("CTA");
	const sectionRef = useRef<HTMLElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			if (contentRef.current) {
				const elements = contentRef.current.querySelectorAll("[data-animate]");
				gsap.fromTo(
					elements,
					{ opacity: 0, y: 60 },
					{
						opacity: 1,
						y: 0,
						duration: 1,
						stagger: 0.15,
						ease: "power3.out",
						scrollTrigger: {
							trigger: sectionRef.current,
							start: "top 75%",
							toggleActions: "play none none reverse",
						},
					}
				);
			}
		});

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="contact"
			ref={sectionRef}
			className="section-padding bg-primary relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
			</div>

			<div className="container-custom relative z-10">
				<div ref={contentRef} className="max-w-3xl mx-auto text-center">
					<h2
						data-animate
						className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
						{t("title")}
					</h2>
					<p
						data-animate
						className="text-primary-foreground/80 text-lg md:text-xl mb-10 leading-relaxed">
						{t("subtitle")}
					</p>
					<div data-animate>
						<a
							href="mailto:contact@prestigeestates.com"
							className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-10 py-5 font-medium tracking-wide transition-all duration-300 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]">
							<span>{t("button")}</span>
							<ArrowRight className="w-5 h-5" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
