"use client";

import React, { useEffect, useRef, useState } from "react";

export const Footer: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<footer ref={ref}>
			<div
				className={`fixed inset-x-0 bottom-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="mx-auto w-full max-w-screen-xl px-4 pb-6 lg:py-8">
                    <hr className="mb-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-xs text-zinc-500 sm:text-center dark:text-zinc-400">© 2023 <a href="https://onex.zip/" className="hover:underline">ONEX Records™</a>. All Rights Reserved.
                        </span>
                    
                </div>
              </div>
			</div>
		</footer>
	);
};
