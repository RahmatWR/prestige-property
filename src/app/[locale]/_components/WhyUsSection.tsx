"use client";

import React from "react";
import { CheckCircle, Award, Shield, HeartHandshake } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCardReveal } from "../_hooks/useRevealAnimation";

const icons = [CheckCircle, Award, Shield, HeartHandshake];

const WhyUsSection: React.FC = () => {
	const t = useTranslations("WhyUs");
	const reasons = t.raw("reasons") as {
		title: string;
		description: string;
	}[];
	const containerRef = useCardReveal();

	return (
		<section
			id="why-us"
			className="section-padding bg-secondary dark:bg-card relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
						backgroundSize: "40px 40px",
					}}
				/>
			</div>

			<div className="container-custom relative z-10">
				{/* Section Header */}
				<div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
					<span className="text-primary-foreground/80 dark:text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
						{t("subtitle")}
					</span>
					<h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary-foreground dark:text-foreground">
						{t("title")}
					</h2>
				</div>

				{/* Reasons Grid */}
				<div ref={containerRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
					{reasons.map((reason, index) => {
						const Icon = icons[index];
						return (
							<div
								key={index}
								data-card
								className="group flex gap-6 p-8 lg:p-10 bg-background dark:bg-background/5 rounded-sm border border-border/50 dark:border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant">
								<div className="flex-shrink-0">
									<div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
										<Icon className="w-6 h-6 text-primary" />
									</div>
								</div>
								<div>
									<h3 className="font-heading text-xl font-semibold text-foreground dark:text-foreground mb-3">
										{reason.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{reason.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default WhyUsSection;
