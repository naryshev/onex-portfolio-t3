"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Cal from "@calcom/embed-react";

const MyComponent = () => (
    <Cal
      calLink="xaniel"
      config={{
        name: "John Doe",
        email: "johndoe@gmail.com",
        notes: "Test Meeting",
        guests: ["janedoe@gmail.com"],
        theme: "dark",
      }}
    />
  );


export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
                    <span className="text-[hsl(280,100%,70%)]" ><button className="px-4 py-1 text-sm text-base text-Indigo-600 font-semibold rounded-full border-2 border-violet-700 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" data-cal-link="xaniel">Booking</button></span>
                    <MyComponent />
				</div>
			</div>
		</div>
	);
}
