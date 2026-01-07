"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import heroBackground from "../../assets/hero-background.jpeg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
	const t = useTranslations("Hero");
	const sectionRef = useRef<HTMLElement>(null);
	const backgroundRef = useRef<HTMLDivElement>(null);
	const foregroundRef = useRef<HTMLDivElement>(null);
	const headlineRef = useRef<HTMLHeadingElement>(null);
	const subheadlineRef = useRef<HTMLParagraphElement>(null);
	const ctaRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			// Background fade in
			if (backgroundRef.current) {
				tl.fromTo(
					backgroundRef.current,
					{ opacity: 0, scale: 1.1 },
					{ opacity: 1, scale: 1, duration: 1.8 },
					0
				);
			}

			// Overlay animation
			if (overlayRef.current) {
				tl.fromTo(
					overlayRef.current,
					{ opacity: 0 },
					{ opacity: 1, duration: 1.2 },
					0.2
				);
			}

			// Foreground slide up - controlled animation
			if (foregroundRef.current) {
				tl.fromTo(
					foregroundRef.current,
					{ opacity: 0, y: 60 },
					{ opacity: 1, y: 0, duration: 1.2 },
					0.5
				);
			}

			// Headline animation
			if (headlineRef.current) {
				tl.fromTo(
					headlineRef.current,
					{ opacity: 0, y: 40 },
					{ opacity: 1, y: 0, duration: 1 },
					0.7
				);
			}

			// Subheadline animation
			if (subheadlineRef.current) {
				tl.fromTo(
					subheadlineRef.current,
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, duration: 0.9 },
					0.9
				);
			}

			// CTA buttons animation
			if (ctaRef.current) {
				tl.fromTo(
					ctaRef.current,
					{ opacity: 0, y: 25 },
					{ opacity: 1, y: 0, duration: 0.9 },
					1.1
				);
			}

			// Controlled parallax on scroll - clamped values
			if (backgroundRef.current) {
				gsap.fromTo(
					backgroundRef.current,
					{ y: 0 },
					{
						y: 80, // Reduced from 200 to prevent excessive movement
						ease: "none",
						scrollTrigger: {
							trigger: sectionRef.current,
							start: "top top",
							end: "bottom top",
							scrub: 1.5,
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
			id="home"
			className="relative h-screen min-h-[100svh] w-full overflow-hidden"
			aria-label="Hero section">
			{/* Background Layer - Full coverage */}
			<div
				ref={backgroundRef}
				className="absolute inset-0 w-full h-[120%] -top-[10%]"
				style={{ opacity: 0 }}>
				<Image
					src={heroBackground}
					alt="Indonesian residential neighborhood"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Gradient Overlay - Improved for text readability */}
			<div
				ref={overlayRef}
				className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"
				style={{ opacity: 0 }}
			/>

			{/* Content - Positioned in upper area with enough space above foreground */}
			<div className="relative z-20 h-full flex flex-col justify-start items-center text-center px-6 pt-20 md:pt-28 lg:pt-32">
				<div className="max-w-4xl mx-auto">
					<h1
						ref={headlineRef}
						className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-3 drop-shadow-lg"
						style={{ opacity: 0 }}>
						{t("headline")}
					</h1>

					<p
						ref={subheadlineRef}
						className="text-base md:text-lg lg:text-xl text-foreground/90 max-w-2xl mx-auto mb-5 leading-relaxed drop-shadow-md"
						style={{ opacity: 0 }}>
						{t("subheadline")}
					</p>

					<div
						ref={ctaRef}
						className="flex flex-col sm:flex-row gap-3 justify-center"
						style={{ opacity: 0 }}>
						<Link href="#projects" className="btn-primary">
							{t("cta")}
						</Link>
						<Link
							href="https://wa.me/6281350769684?text=Halo,%20saya%20tertarik%20dengan%20jasa%20Anda"
							target="_blank"
							className="btn-secondary backdrop-blur-sm bg-background/30 border-foreground/30">
							{t("ctaSecondary")}
						</Link>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<Link
				href="#about"
				aria-label="Scroll down"
				className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer z-99">
				<ArrowDown className="w-5 h-5 text-foreground/60" />
			</Link>
		</section>
	);
};

export default HeroSection;
