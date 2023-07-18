"use client";
import { Navigation } from "../components/nav";
import Cal from "@calcom/embed-react";


export default function Example() {
	return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className=" flex flex-col w-full items-center justify-center min-h-screen ">
				<div className="my-20 w-full">
            <MyComponent />

          </div>
				</div>
			</div>
		
		// <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
		// 	<Navigation />
		// 	<div className="justify-center min-h-screen py-25">				{/* <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16"> */}
    //     <div className="my-20">
    //     <MyComponent />

    //     </div>
                    
		// 		{/* </div> */}
		// 	</div>
		// </div>
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
