"use client";
import { Footer } from "../components/footer";
import { Button } from "../components/moving-border";
import { Navigation } from "../components/nav";
import Cal from "@calcom/embed-react";


export default function Example() {
	return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className=" flex flex-col w-full items-center justify-center min-h-screen ">
				<div className="my-20 w-full justify-center">
          {/* <MyComponent /> */}
          
          
        </div>
      </div>
    <Footer />
    </div>
	);
}

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
