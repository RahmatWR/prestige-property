"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { useScrollSpy } from "../_hooks/useScrollSpy";

const Navbar: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [mounted, setMounted] = useState<boolean>(false);

	const { theme, setTheme } = useTheme();
	const activeId = useScrollSpy([
		"home",
		"about",
		"projects",
		"why-us",
		"contact",
	]);

	const t = useTranslations("Navigations");
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const id = requestAnimationFrame(() => setMounted(true));
		return () => cancelAnimationFrame(id);
	}, []);

	const toggleLocale = () => {
		const nextLocale = locale === "en" ? "id" : "en";
		router.push(`/${nextLocale}${pathname.slice(3)}`);
	};
	const toggleTheme = () => {
		if (!mounted) return;
		const nextTheme = theme === "light" ? "dark" : "light";
		setTheme(nextTheme);
	};

	const navLinks = [
		{ href: "#home", label: t("home") },
		{ href: "#about", label: t("about") },
		{ href: "#projects", label: t("projects") },
		{ href: "#why-us", label: t("whyUs") },
		{ href: "#contact", label: t("contact") },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				isScrolled
					? "bg-background/60 backdrop-blur-xl border-b border-border/30 shadow-lg shadow-black/5 py-4"
					: "bg-transparent py-6"
			}`}>
			<nav className="container-custom flex items-center justify-between">
				{/* Logo */}
				<Link href="#" className="relative z-10">
					<span className="font-heading text-2xl font-semibold tracking-tight text-foreground">
						Prestige<span className="text-primary">.</span>
					</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden lg:flex items-center gap-10">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`text-sm font-medium  hover:text-primary transition-colors duration-300 tracking-wide ${
								activeId === link.href.slice(1)
									? "text-primary"
									: "text-foreground/80"
							} transition`}>
							{link.label}
						</Link>
					))}
				</div>

				{/* Desktop Controls */}
				<div className="hidden lg:flex items-center gap-4">
					{/* Language Toggle */}
					{/* <Link></Link> */}
					<button
						onClick={toggleLocale}
						className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
						aria-label="Toggle language">
						<Globe className="w-4 h-4" />
						<span className="uppercase">{locale}</span>
					</button>

					{/* Theme Toggle */}
					<button
						onClick={toggleTheme}
						className="p-2 text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
						aria-label="Toggle theme">
						{!mounted ? null : theme === "light" ? (
							<Moon className="w-5 h-5" />
						) : (
							<Sun className="w-5 h-5" />
						)}
					</button>

					{/* CTA Button */}
					<Link
						href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20jasa%20Anda"
						target="_blank"
						className="btn-primary rounded-xl text-sm">
						<div className="text-foreground/90">{navLinks[3].label}</div>
					</Link>
				</div>

				{/* Mobile Menu Toggle */}
				<button
					className="lg:hidden p-2 text-foreground"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle menu">
					{isMobileMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>

				{/* Mobile Menu */}
				<div
					className={`lg:hidden fixed inset-0 top-0 bg-background z-40 transition-transform duration-500 ${
						isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
					}`}>
					<div className="flex flex-col h-full pt-24 px-6">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setIsMobileMenuOpen(false)}
								className="py-4 text-2xl font-heading text-foreground border-b border-border hover:text-primary transition-colors">
								{link.label}
							</Link>
						))}

						<div className="flex items-center gap-4 mt-8">
							<button
								onClick={toggleTheme}
								className="flex items-center gap-2 px-4 py-2 border border-border rounded text-foreground">
								<Globe className="w-4 h-4" />
								{/* <span className="uppercase">{language}</span> */}
							</button>

							<button
								// onClick={toggleTheme}
								className="p-3 border border-border rounded text-foreground">
								{!mounted ? null : theme === "light" ? (
									<Moon className="w-5 h-5" />
								) : (
									<Sun className="w-5 h-5" />
								)}
							</button>
						</div>

						<Link
							href="#contact"
							onClick={() => setIsMobileMenuOpen(false)}
							className="btn-primary mt-8 text-center">
							{navLinks[3].label}
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
