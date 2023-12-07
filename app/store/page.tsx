"use client";
import { Footer } from "../components/footer";
import { Navigation } from "../components/nav";
import { Player } from "../components/player";


export default function Store() {
	return (
   
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 px-3">
        <Navigation />
        
        <div className="">
            
        
        {/* <Player /> */}

            
        </div>
        
        
        
        <Footer/>
    </div>
    
	);
}


 // <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
    //     <Navigation />
    //     <div className=" flex flex-col w-full items-center justify-center min-h-screen ">
    //         <div className="my-20 w-full">
    //         <h1 className="h1word z-10 text-transparent duration-1000 bg-white cursor-default animate-title sm:text-6xl md:text-9xl  bg-clip-text">
	// 			<span className=" text-9xl text-fuchsia-500  hover:text-fuchsia-300 duration-700 hover:animate-bouncer ">1X</span>
	// 		</h1>
    //         </div>
    //     </div>
    // </div>

    // {/* <div className=" flex flex-col w-full items-center justify-center min-h-screen ">
    //          <div className="my-20 w-full">
    //             <h1 className="h1word z-10 text-transparent duration-1000 bg-white cursor-default animate-title sm:text-6xl md:text-9xl  bg-clip-text">
    //                 <span className=" text-9xl text-fuchsia-500  hover:text-fuchsia-300 duration-700 hover:animate-bouncer ">1X</span>
    //             </h1>
    //         </div>
    //     </div> */}