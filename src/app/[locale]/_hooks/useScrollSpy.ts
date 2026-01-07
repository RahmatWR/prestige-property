"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollSpy(sectionsId: string[]) {
	const [activeId, setActiveId] = useState("");
	const lastIdRef = useRef<string>("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visibleEntry = entries.find((e) => e.isIntersecting);
				if (!visibleEntry) return;

				const id = visibleEntry.target.id;

				if (lastIdRef.current !== id) {
					lastIdRef.current = id;
					setActiveId(id);

					// ✅ update address bar tanpa navigasi
					window.history.replaceState(null, "", `#${id}`);
				}
			},
			{
				rootMargin: "-40% 0px -40% 0px",
				threshold: 0.1,
			}
		);

		sectionsId.forEach((section) => {
			const el = document.getElementById(section);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [sectionsId]);

	return activeId;
}
