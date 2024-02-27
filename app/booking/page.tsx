"use client";
import { Footer } from "../components/footer";
import { Button } from "../components/moving-border";
import { Navigation } from "../components/nav";
import Cal from "@calcom/embed-react";
import { WavyBackground } from "../components/wavy-background";

// import { Resend } from 'resend';

// const resend = new Resend('re_TRGeY3BU_FpW6J7M7F8Xzxvi6ZcvWvuTC');

// resend.emails.send({
//   from: 'support@onex.zip',
//   to: 'daniel.naryshev@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });

export default function Example() {
	return (
    <div >
    <div>
      <WavyBackground  speed="slow" backgroundFill="#171719" blur={10} waveWidth={90}>
        <div className="h-[40rem] w-full rounded-md bg-transparent-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-3xl sm:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-200  text-center font-bold">
              Join our Newsletter
            </h1>
            <p></p>
            <p className="text-neutral-100 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              
              The best engineering recording service in the LA area.
              
            </p>
            
            <form action="# ">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-slate-50 dark:text-slate-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input className="animate-pulse block p-3 pl-10 w-full text-sm text-slate-950 bg-transparent border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-900 dark:bg-transparent-700 dark:border-gray-300 dark:placeholder-gray-100 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" />
                  </div>
                  <div>
                      <button type="submit" className="hover:animate-pulse py-3 px-5 w-full text-sm font-medium text-center text-slate-50 border rounded-l-lg cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-xs text-center text-slate-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </form>
          </div>
          
        </div>
      </WavyBackground>
    </div>
    
      <Navigation />
      
      <Footer />
      
    </div>
    // <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
		// 	
		// 	<div className=" flex flex-col w-full items-center justify-center min-h-screen ">
		// 		<div className="my-20 w-full justify-center">
    //       {/* <MyComponent /> */}
          
          
    //     </div>
    //   </div>
    // <Footer />
    // </div>
	);
}

// const MyComponent = () => (
//   <Cal
//     calLink="xaniel"
//     config={{
//       name: "John Doe",
//       email: "johndoe@gmail.com",
//       notes: "Test Meeting",
//       guests: ["janedoe@gmail.com"],
//       theme: "dark",
//     }}
//   />
// );
