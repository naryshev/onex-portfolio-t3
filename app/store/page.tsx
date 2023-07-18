"use client";
import { Navigation } from "../components/nav";


export default function Example() {
	return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <Navigation />
        <div className=" flex flex-col w-full items-center justify-center min-h-screen ">
            <div className="my-20 w-full">
            <h1 className="h1word z-10 text-4xl text-transparent duration-1000 bg-white cursor-default animate-title sm:text-6xl md:text-9xl  bg-clip-text ">
				coming <span className="text-fuchsia-500">soon</span>
			</h1>
            </div>
        </div>
</div>
	);
}
