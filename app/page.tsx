"use client";
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import {Footer} from "./components/footer";
import {motion} from "framer-motion"

const navigation = [
	{ name: "Credits", href: "/credits" },
	// { name: "Store", href: "/store" },
	{ name: "Booking", href: "/booking" },
	// { name: "About", href: "/about" },
	
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
							className="text-base duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={150}
			/>

				<h1 id="ONEX RECORDS" className="animate-bouncer h1word z-10  text-transparent duration-300 bg-white cursor-default align-middle bg-clip-text pt-7  ">
					<motion.div drag
					whileHover={{ scale: 1.2 }}
					dragConstraints={{
						top: -250,
						left: -250,
						right: 250,
						bottom: 250,}}
					>
						<Link className="text-9xl text-fuchsia-500 hover:text-fuchsia-300 ease-in-out duration-400" href={"/credits"}>1X</Link>
					</motion.div>
						
				</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					{/* Audio Engineering | Production */}
					

					Los Angeles

				</h2>
			
			</div>
			
			{/* <nav className="my-16 animate-fade-in text-xs">
				<Footer/>
			</nav> */}
		</div>
		
		
	);
}
