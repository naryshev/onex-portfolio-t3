"use client";
import { Youtube, Mail, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import {Footer} from "../components/footer";

const socials = [
	{
		id: 1,
		icon: <Twitter size={80} />,
		href: "https://twitter.com/1xaniel",
		label: "Twitter",
		handle: "@1xaniel",
	},
	{
		id: 3,
		icon: <Instagram size={80} />,
		href: "https://twitter.com/onex.zip",
		label: "Instagram",
		handle: "@onex.zip",
	},
	{
		id: 2,
		icon: <Youtube size={80} />,
		href: "https://www.youtube.com/@1xaniel",
		label: "Youtube",
		handle: "@1xaniel",
	},

];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto py-28 ">
				<div className="grid w-full text-zinc-400">
					<h1 className="text-xl font-bold ">Unlike Any Other Engineer...</h1>
					<br></br>
					<h3 className="text-base/loose">Meet Xaniel, a self-taught audio engineer dedicated to shaping your sound and bringing your musical vision to life.</h3>
					<br></br>
					<h3 className="text-base/loose">Born and raised amidst the vibrant music scene of Los Angeles, Xaniel developed an early fascination with sound taking trumpet and piano lessons from his grandparents at a young age. As a teenager he made the bold decision to put down his instruments to explore the world of choir and vocal performance. Fueled by his passion for sound, he explored the limitless potential of vocals, adding depth and versatility to his musical repertoire. In college, he studied music history and theory to enhance his understanding of the underlying principles of music. With his diverse skillset he crafts compositions that are not only innovative but also rooted in a profound appreciation for the art form. </h3>
					<br></br>
					<h3 className="text-base/loose">We are where you need us to be. At your studio, wherever the country, or online. And we've upped the game. New methods, new technology, new techniques.  Our mixes have never sounded better!  </h3>
					<br></br>
					{/* <h3 className="text-base/loose font-semibold">Why Choose Xaniel?</h3>
					
					<ul className="list-disc text-base/loose ml-8 font-light">
						<li> <a className="font-medium">Convenience: </a>Say goodbye to the hassle of booking traditional studios. Xaniel brings the studio to you, offering unmatched convenience without compromising on quality. Xaniel’s expertise travels with him, ensuring that you can focus solely on your creativity without worrying about the logistics of studio bookings or travel.  </li>
						<li> <a className="font-medium">Personalized Approach: </a>Your project is unique, and so is the approach. Xaniel tailors every session to suit your style, ensuring a personalized and enjoyable recording experience.</li>
						<li> <a className="font-medium">Professional Quality: </a>Expect nothing but the best. Xaniel is committed to delivering professional-grade audio, characterized by clarity, depth, and a pristine sonic landscape.</li>					
					</ul> */}
					
										

				
				</div>
				{/* <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div> */}
			</div>
			<Footer/>
		</div>
	);
}
