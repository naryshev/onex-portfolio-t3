"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
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
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				
				<div className="flex flex-row-reverse items-center justify-between p-4 md:p-6 mx-auto w-full">
					<div className="flex justify-between space-x-4 mr-2 ">
						<Link
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Credits
						</Link>
						<Link
							href="/booking"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Booking
						</Link>
						<Link
							href="/about"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							About
						</Link>
					</div>
					
					<div className="flex justify-between items-center space-x-4 mt-4">
						
						{/* <Link
							href="/"
							className="duration-200 text-zinc-300 hover:text-zinc-100"
						>
							<ArrowLeft className="w-6 h-6 " />
						</Link> */}
						<Link
							href="/store"
							className="h2word"
						>
							<span className="hover:text-fuchsia-300 duration-500 text-fuchsia-500 text-5xl mt-10 ml-4 ">1X</span>
						</Link>
						
						<button type="button" className=""data-hs-overlay="#hs-custom-backdrop-modal">
							Open modal
					</button>
						
					</div>
					
				</div>

			</div>
			<div id="hs-custom-backdrop-modal" className="hs-overlay hs-overlay-backdrop-open:bg-blue-950/90 hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none">
							<div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
								<div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
								<div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
									<h3 className="font-bold text-gray-800 dark:text-white">
									Modal title
									</h3>
									<button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-custom-backdrop-modal">
									<span className="sr-only">Close</span>
									<svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
									</button>
								</div>
								<div className="p-4 overflow-y-auto">
									<p className="mt-1 text-gray-800 dark:text-gray-400">
									This is a wider card with supporting text below as a natural lead-in to additional content.
									</p>
								</div>
								<div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
									<button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-custom-backdrop-modal">
									Close
									</button>
									<button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
									Save changes
									</button>
								</div>
								</div>
							</div>
						</div>
		</header>
		
	);
};
