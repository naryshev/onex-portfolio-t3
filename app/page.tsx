import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Analytics } from '@vercel/analytics/react';

const navigation = [
	{ name: "Projects", href: "/projects" },
	// { name: "Store", href: "/store" },
	{ name: "Booking", href: "/booking" },
	{ name: "Contact", href: "/contact" },
	
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="h1word z-10 text-3xl text-transparent duration-800 bg-white cursor-default animate-title sm:text-6xl align-middle md:text-9xl bg-clip-text ">
				<Link href={"/store"}><span className="hover:text-fuchsia-300 duration-500 text-fuchsia-500">1X</span></Link>RECORDS
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Audio Engineering | Production
					
					<br />
					Based in LA
					{/* Learn More. */}
					{/* {" "}
					<Link
						target="_blank"
						href="https://unkey.dev"
						className="underline duration-500 hover:text-zinc-300"
					>
						unkey.dev
					</Link>{" "} */}
				</h2>
			</div>
			<Analytics />
		</div>
		
	);
}
