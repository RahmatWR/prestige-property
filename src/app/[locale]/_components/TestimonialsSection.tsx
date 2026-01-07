"use client";

import React, { useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection: React.FC = () => {
	const t = useTranslations("Testimonials");
	const items = t.raw("items") as {
		name: string;
		role: string;
		quote: string;
	}[];
	const sectionRef = useRef<HTMLElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			if (cardsRef.current) {
				const cards = cardsRef.current.querySelectorAll("[data-testimonial]");
				gsap.fromTo(
					cards,
					{ opacity: 0, y: 80, rotateX: 10 },
					{
						opacity: 1,
						y: 0,
						rotateX: 0,
						duration: 1,
						stagger: 0.2,
						ease: "power3.out",
						scrollTrigger: {
							trigger: cardsRef.current,
							start: "top 80%",
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
			ref={sectionRef}
			className="section-padding bg-cream dark:bg-background">
			<div className="container-custom">
				{/* Section Header */}
				<div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
					<span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
						{t("subtitle")}
					</span>
					<h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
						{t("title")}
					</h2>
				</div>

				{/* Testimonials Grid */}
				<div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
					{items.map((testimonial, index) => (
						<div
							key={index}
							data-testimonial
							className="relative p-8 lg:p-10 bg-background dark:bg-card rounded-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant">
							{/* Quote Icon */}
							<div className="absolute -top-4 left-8">
								<div className="w-10 h-10 flex items-center justify-center bg-primary rounded-full">
									<Quote className="w-5 h-5 text-primary-foreground" />
								</div>
							</div>

							{/* Quote */}
							<p className="text-muted-foreground leading-relaxed mb-8 mt-4 italic">
								&quot;{testimonial.quote}&quot;
							</p>

							{/* Author */}
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
									<span className="font-heading text-lg font-semibold text-primary">
										{testimonial.name.charAt(0)}
									</span>
								</div>
								<div>
									<div className="font-semibold text-foreground">
										{testimonial.name}
									</div>
									<div className="text-sm text-muted-foreground">
										{testimonial.role}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
