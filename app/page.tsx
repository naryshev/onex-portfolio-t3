"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import {Footer} from "./components/footer";
import {motion} from "framer-motion"
import { MacbookScroll } from "./components/macbook-scroll";

const navigation = [
	// { name: "Credits", href: "/credits" },
	// { name: "Store", href: "/store" },
	//{ name: "Booking", href: "/booking" },
	// { name: "About", href: "/about" },
	
];


export default function Home() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
	if (window && window.innerWidth < 1068) {

		setIsMobile(true);
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "scroll"
		};
	}
	}, []);

	return (
		<div className="animate-fade-in">
			<div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black ">
				<div className="">
					
					
					{/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
					

						<h1 id="ONEX RECORDS" className="animate-[bounce_ease-in-out_3s_infinite] h1word z-10  text-transparent duration-300 bg-white  align-middle bg-clip-text pt-7 mt-20 ">
							<motion.div drag
							whileHover={{ scale: 1.2 }}
							dragConstraints={{
								top: 50,
								left: -50,
								right: 50,
								bottom: 250,}}
								whileTap={{ cursor: "grabbing" }}
							>
								<Link className="text-9xl text-fuchsia-500 hover:text-fuchsia-400 ease-in-out duration-50 cursor-pointer" href={"/credits"}>1X</Link>
							</motion.div>
						</h1>
					
								
				</div>	
				<div style={{ display: isMobile ? "none" : "block" }}>
					<MacbookScroll src="/src/ss.png" />					
				</div>
					
					{/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
				
					
				{/* <div id="footer" className=" absolute my-8 text-center bottom-0 ">
					<h2 className="text-xs text-zinc-500 ">
						Audio Engineering | Production
						<br />
						ONEX Los Angeles © 2024
						

						

					</h2>
							
				</div>		 */}
			
				
			</div>
			
		</div>
		
		
	);
}
