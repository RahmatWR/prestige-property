import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxConfig {
	speed?: number;
	direction?: "up" | "down";
}

export const useParallax = (config: ParallaxConfig = {}) => {
	const { speed = 0.5, direction = "up" } = config;
	const elementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!elementRef.current) return;

		const yValue = direction === "up" ? -100 * speed : 100 * speed;

		const ctx = gsap.context(() => {
			gsap.fromTo(
				elementRef.current,
				{ y: -yValue },
				{
					y: yValue,
					ease: "none",
					scrollTrigger: {
						trigger: elementRef.current,
						start: "top bottom",
						end: "bottom top",
						scrub: true,
					},
				}
			);
		});

		return () => ctx.revert();
	}, [speed, direction]);

	return elementRef;
};

export const useHeroParallax = () => {
	const backgroundRef = useRef<HTMLDivElement>(null);
	const foregroundRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Background moves slower
			if (backgroundRef.current) {
				gsap.fromTo(
					backgroundRef.current,
					{ y: 0 },
					{
						y: 150,
						ease: "none",
						scrollTrigger: {
							trigger: backgroundRef.current,
							start: "top top",
							end: "bottom top",
							scrub: 1,
						},
					}
				);
			}

			// Foreground moves faster
			if (foregroundRef.current) {
				gsap.fromTo(
					foregroundRef.current,
					{ y: 0 },
					{
						y: 80,
						ease: "none",
						scrollTrigger: {
							trigger: foregroundRef.current,
							start: "top top",
							end: "bottom top",
							scrub: 0.5,
						},
					}
				);
			}
		});

		return () => ctx.revert();
	}, []);

	return { backgroundRef, foregroundRef };
};
