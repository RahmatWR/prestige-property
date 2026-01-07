// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// interface LoadingScreenProps {
// 	onLoadingComplete: () => void;
// 	minDisplayTime?: number;
// }

// const LoadingScreen: React.FC<LoadingScreenProps> = ({
// 	onLoadingComplete,
// 	minDisplayTime = 2500,
// }) => {
// 	const containerRef = useRef<HTMLDivElement>(null);
// 	const logoRef = useRef<HTMLDivElement>(null);
// 	const progressRef = useRef<HTMLDivElement>(null);
// 	const lineLeftRef = useRef<HTMLDivElement>(null);
// 	const lineRightRef = useRef<HTMLDivElement>(null);
// 	const taglineRef = useRef<HTMLParagraphElement>(null);
// 	const [progress, setProgress] = useState(0);

// 	useEffect(() => {
// 		const ctx = gsap.context(() => {
// 			const tl = gsap.timeline();

// 			// Initial state setup
// 			gsap.set([logoRef.current, taglineRef.current], {
// 				opacity: 0,
// 				y: 30,
// 			});
// 			gsap.set([lineLeftRef.current, lineRightRef.current], {
// 				scaleX: 0,
// 			});
// 			gsap.set(progressRef.current, {
// 				scaleX: 0,
// 			});

// 			// Animate logo entrance
// 			tl.fromTo(
// 				logoRef.current,
// 				{ opacity: 0, y: 30 },
// 				{ opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
// 			);

// 			// Animate decorative lines
// 			tl.fromTo(
// 				lineLeftRef.current,
// 				{ scaleX: 0 },
// 				{ scaleX: 1, duration: 0.6, ease: "power2.inOut" },
// 				"-=0.3"
// 			);

// 			tl.fromTo(
// 				lineRightRef.current,
// 				{ scaleX: 0 },
// 				{ scaleX: 1, duration: 0.6, ease: "power2.inOut" },
// 				"-=0.6"
// 			);

// 			// Animate tagline
// 			tl.fromTo(
// 				taglineRef.current,
// 				{ opacity: 0, y: 20 },
// 				{ opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
// 				"-=0.2"
// 			);

// 			// Animate progress bar
// 			tl.fromTo(
// 				progressRef.current,
// 				{ scaleX: 0 },
// 				{
// 					scaleX: 1,
// 					duration: minDisplayTime / 1000 - 0.8,
// 					ease: "power1.inOut",
// 					onUpdate: function () {
// 						setProgress(Math.round(this.progress() * 100));
// 					},
// 				},
// 				"-=0.2"
// 			);
// 		}, containerRef);

// 		// Handle loading complete
// 		const timer = setTimeout(() => {
// 			const exitTl = gsap.timeline({
// 				onComplete: onLoadingComplete,
// 			});

// 			exitTl.fromTo(
// 				containerRef.current,
// 				{ opacity: 1, y: 0 },
// 				{ opacity: 0, y: -30, duration: 0.6, ease: "power2.inOut" }
// 			);
// 		}, minDisplayTime);

// 		return () => {
// 			ctx.revert();
// 			clearTimeout(timer);
// 		};
// 	}, [onLoadingComplete, minDisplayTime]);

// 	return (
// 		<div
// 			ref={containerRef}
// 			className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
// 			{/* Background subtle pattern */}
// 			<div className="absolute inset-0 opacity-[0.03]">
// 				<div
// 					className="absolute inset-0"
// 					style={{
// 						backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
// 						backgroundSize: "40px 40px",
// 					}}
// 				/>
// 			</div>

// 			{/* Content */}
// 			<div className="relative z-10 flex flex-col items-center">
// 				{/* Logo with decorative lines */}
// 				<div className="flex items-center gap-6">
// 					<div
// 						ref={lineLeftRef}
// 						className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-primary to-primary origin-right"
// 					/>

// 					<div ref={logoRef} className="text-center">
// 						<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
// 							Prestige<span className="text-primary">.</span>
// 						</h1>
// 					</div>

// 					<div
// 						ref={lineRightRef}
// 						className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent via-primary to-primary origin-left"
// 					/>
// 				</div>

// 				{/* Tagline */}
// 				<p
// 					ref={taglineRef}
// 					className="mt-6 text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase font-light">
// 					Premium Living
// 				</p>

// 				{/* Progress bar */}
// 				<div className="mt-12 w-48 md:w-64">
// 					<div className="relative h-px bg-border overflow-hidden">
// 						<div
// 							ref={progressRef}
// 							className="absolute inset-y-0 left-0 w-full bg-primary origin-left"
// 						/>
// 					</div>
// 					<p className="mt-4 text-center text-xs text-muted-foreground tracking-widest">
// 						{progress}%
// 					</p>
// 				</div>
// 			</div>

// 			{/* Corner decorations */}
// 			<div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-border/50" />
// 			<div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-border/50" />
// 			<div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-border/50" />
// 			<div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-border/50" />
// 		</div>
// 	);
// };

// export default LoadingScreen;

export default function Loading() {
	return <h1>Loading</h1>;
}
