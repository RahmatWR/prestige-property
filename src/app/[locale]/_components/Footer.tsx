"use client";

import React from "react";
import Link from "next/link";
import {
	MapPin,
	Phone,
	Mail,
	Instagram,
	Linkedin,
	Facebook,
} from "lucide-react";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
	const t = useTranslations("Footer");
	const navLinks = useTranslations("Navigations");

	const socialLinks = [
		{ icon: Instagram, href: "#", label: "Instagram" },
		{ icon: Linkedin, href: "#", label: "LinkedIn" },
		{ icon: Facebook, href: "#", label: "Facebook" },
	];

	const quickLinks = [
		{ href: "#about", label: navLinks("about") },
		{ href: "#projects", label: navLinks("projects") },
		{ href: "#why-us", label: navLinks("whyUs") },
		{ href: "#contact", label: navLinks("contact") },
	];

	return (
		<footer className="bg-secondary dark:bg-card text-secondary-foreground dark:text-foreground">
			<div className="container-custom py-16 lg:py-20">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
					{/* Brand Column */}
					<div className="lg:col-span-2">
						<Link href="#" className="inline-block mb-6">
							<span className="font-heading text-2xl font-semibold">
								Prestige<span className="text-primary">.</span>
							</span>
						</Link>
						<p className="text-secondary-foreground/70 dark:text-muted-foreground leading-relaxed max-w-md mb-8">
							{t("description")}
						</p>
						{/* Social Links */}
						<div className="flex gap-4">
							{socialLinks.map((social, index) => (
								<Link
									key={index}
									href={social.href}
									aria-label={social.label}
									className="w-10 h-10 flex items-center justify-center bg-secondary-foreground/10 dark:bg-muted rounded-full text-secondary-foreground/70 dark:text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
									<social.icon className="w-5 h-5" />
								</Link>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-heading text-lg font-semibold mb-6">
							{t("quickLinks")}
						</h4>
						<ul className="space-y-3">
							{quickLinks.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className="text-secondary-foreground/70 dark:text-muted-foreground hover:text-primary transition-colors duration-300">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="font-heading text-lg font-semibold mb-6">
							{t("contact")}
						</h4>
						<ul className="space-y-4">
							<li className="flex gap-3 text-secondary-foreground/70 dark:text-muted-foreground">
								<MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
								<span>
									Jl. Sudirman No. 123
									<br />
									Jakarta Selatan 12190
								</span>
							</li>
							<li>
								<Link
									href="tel:+622112345678"
									className="flex gap-3 text-secondary-foreground/70 dark:text-muted-foreground hover:text-primary transition-colors duration-300">
									<Phone className="w-5 h-5 flex-shrink-0" />
									<span>+62 21 1234 5678</span>
								</Link>
							</li>
							<li>
								<Link
									href="mailto:contact@prestigeestates.com"
									className="flex gap-3 text-secondary-foreground/70 dark:text-muted-foreground hover:text-primary transition-colors duration-300">
									<Mail className="w-5 h-5 flex-shrink-0" />
									<span>contact@prestigeestates.com</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-8 border-t border-secondary-foreground/10 dark:border-border">
					<p className="text-center text-secondary-foreground/50 dark:text-muted-foreground text-sm">
						© {new Date().getFullYear()} Prestige Estates. {t("rights")}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
