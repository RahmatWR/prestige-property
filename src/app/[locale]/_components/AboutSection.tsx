"use client";

import React from "react";
import { Eye, Target, Heart } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSingleReveal } from "../_hooks/useRevealAnimation";

const AboutSection: React.FC = () => {
	const t = useTranslations("About");
	const sectionRef = useSingleReveal({ y: 80 });

	const values = [
		{ icon: Eye, title: t("vision.title"), text: t("vision.text") },
		{ icon: Target, title: t("mission.title"), text: t("mission.text") },
		{ icon: Heart, title: t("values.title"), text: t("values.text") },
	];

	return (
		<section
			id="about"
			ref={sectionRef}
			className="section-padding bg-cream dark:bg-background">
			<div className="container-custom">
				{/* Section Header */}
				<div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
					<span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
						{t("subtitle")}
					</span>
					<h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
						{t("title")}
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed">
						{t("description")}
					</p>
				</div>

				{/* Values Grid */}
				<div className="grid md:grid-cols-3 gap-8 lg:gap-12">
					{values.map((item, index) => (
						<div
							key={index}
							data-reveal
							className="group text-center p-8 lg:p-10 bg-background dark:bg-card rounded-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant">
							<div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
								<item.icon className="w-7 h-7 text-primary" />
							</div>
							<h3 className="font-heading text-xl font-semibold text-foreground mb-4">
								{item.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{item.text}
							</p>
						</div>
					))}
				</div>

				{/* Stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 lg:mt-24 pt-16 border-t border-border">
					{[
						{ value: "50+", label: "Projects Completed" },
						{ value: "18", label: "Years Experience" },
						{ value: "2000+", label: "Happy Families" },
						{ value: "100%", label: "Satisfaction Rate" },
					].map((stat, index) => (
						<div key={index} className="text-center" data-reveal>
							<div className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-2">
								{stat.value}
							</div>
							<div className="text-muted-foreground text-sm tracking-wide">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
