import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealConfig {
	delay?: number;
	duration?: number;
	y?: number;
	stagger?: number;
}

export const useRevealAnimation = (config: RevealConfig = {}) => {
	const { delay = 0, duration = 1, y = 60, stagger = 0.1 } = config;
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const elements = containerRef.current.querySelectorAll("[data-reveal]");

		const ctx = gsap.context(() => {
			gsap.fromTo(
				elements,
				{ opacity: 0, y },
				{
					opacity: 1,
					y: 0,
					duration,
					delay,
					stagger,
					ease: "power3.out",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
				}
			);
		});

		return () => ctx.revert();
	}, [delay, duration, y, stagger]);

	return containerRef;
};

export const useSingleReveal = (config: RevealConfig = {}) => {
	const { delay = 0, duration = 1, y = 60 } = config;
	const elementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!elementRef.current) return;

		const ctx = gsap.context(() => {
			gsap.fromTo(
				elementRef.current,
				{ opacity: 0, y },
				{
					opacity: 1,
					y: 0,
					duration,
					delay,
					ease: "power3.out",
					scrollTrigger: {
						trigger: elementRef.current,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				}
			);
		});

		return () => ctx.revert();
	}, [delay, duration, y]);

	return elementRef;
};

export const useCardReveal = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const cards = containerRef.current.querySelectorAll("[data-card]");

		const ctx = gsap.context(() => {
			gsap.fromTo(
				cards,
				{ opacity: 0, y: 80, scale: 0.95 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.8,
					stagger: 0.15,
					ease: "power3.out",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top 75%",
						toggleActions: "play none none reverse",
					},
				}
			);
		});

		return () => ctx.revert();
	}, []);

	return containerRef;
};
