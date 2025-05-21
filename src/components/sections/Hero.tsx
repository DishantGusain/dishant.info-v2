"use client";

import { useEffect, useRef } from "react";
import useGsapAnimations from "@/hooks/animation/useGsapAnimations";
import gsap from "gsap";
import { FireRing } from "../fire-ring-border/fire-ring";
export const Hero = () => {
   const nameRef = useRef<HTMLHeadingElement>(null);
   const subtitleRef = useRef<HTMLDivElement>(null);
   const decorationRef = useRef<HTMLDivElement>(null);
   const buttonContainersRef = useRef<HTMLDivElement>(null);

   const { fadeIn, floatingAnimation, staggerAnimation } = useGsapAnimations();

   useEffect(() => {
      // Create context with document.body as the scope
      const ctx = gsap.context(() => {
         // Name animation
         fadeIn(nameRef, {
            from: { y: 200 },
            delay: 0.2,
         });

         // Subtitle animation
         fadeIn(subtitleRef, {
            delay: 0.4,
         });

         // Decoration animation
         fadeIn(decorationRef, {
            from: { opacity: 0, rotation: -10 },
            to: { rotation: 0 },
            duration: 1.2,
            delay: 0.6,
            ease: "elastic.out(1, 0.5)",
         });

         // Floating animation for the decoration
         floatingAnimation(decorationRef);

         // Button containers animation
         if (buttonContainersRef.current) {
            const buttons = Array.from(buttonContainersRef.current.children);
            staggerAnimation(
               buttons,
               {
                  delay: 0.6,
               },
               0.15
            );
         }
      });

      return () => ctx.revert();
   }, [fadeIn, floatingAnimation, staggerAnimation]);

   return (
      <div className="relative w-full min-h-screen p-8 flex flex-col justify-between overflow-hidden ">
         {/* Name and subtitle */}
         <div className="">
            <div className="flex justify-center ">
               <div
                  ref={nameRef}
                  className="text-[max(5.125rem,min(13.3333vw_+_2rem,18rem))] max-w-[80%] font-bold    text-orange-500 dark:text-white w-full"
               >
                  <div className="  w-full  flex justify-start items-end">
                     <h1 className="  ">Dishant</h1>
                  </div>
                  <div className=" w-full flex justify-end items-start relative">
                     <h1 className=" absolute leading-0 z-20">gusain</h1>
                     <h1 className="  opacity-0  leading-none ">agusain</h1>
                     <div className="w-full h-full absolute top-0 left-0 bg-transparent"></div>

                     {/* Purple wavy decoration */}
                     <div
                        ref={decorationRef}
                        className="absolute  w-24 ml-2 top-10 right-[12%]"
                     >
                        <svg
                           viewBox="0 0 100 200"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M50 0C35 40 65 60 50 100C35 140 65 160 50 200"
                              stroke="#9333EA"
                              strokeWidth="40"
                              strokeLinecap="round"
                           />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Bottom subtitle */}
         <div
            ref={subtitleRef}
            className="mb-6 flex flex-col gap-4"
         >
            <div className="flex space-x-2  items-center text-white/90 font-light tracking-wide text-lg">
               <svg
                  viewBox="0 0 19 59"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-auto"
               >
                  <path
                     d="M0.36364 29.4545V26.6364C2.89394 26.6364 4.65909 26.1061 5.65909 25.0455C6.67425 23.9848 7.18182 22.2121 7.18182 19.7273V12.4545C7.18182 10.3636 7.37879 8.55302 7.77273 7.02272C8.18182 5.49242 8.84091 4.22727 9.75 3.22727C10.6591 2.22727 11.8712 1.48484 13.3864 0.999996C14.9015 0.515146 16.7727 0.27272 19 0.27272V4.72727C17.2424 4.72727 15.8561 4.99999 14.8409 5.54545C13.8409 6.0909 13.1288 6.93939 12.7045 8.0909C12.2955 9.22727 12.0909 10.6818 12.0909 12.4545V21.5455C12.0909 22.7273 11.9318 23.803 11.6136 24.7727C11.3106 25.7424 10.7424 26.5758 9.90909 27.2727C9.07576 27.9697 7.88637 28.5076 6.34091 28.8864C4.81061 29.2651 2.81819 29.4545 0.36364 29.4545ZM19 58.4545C16.7727 58.4545 14.9015 58.2121 13.3864 57.7273C11.8712 57.2424 10.6591 56.5 9.75 55.5C8.84091 54.5 8.18182 53.2348 7.77273 51.7045C7.37879 50.1742 7.18182 48.3636 7.18182 46.2727V39C7.18182 36.5151 6.67425 34.7424 5.65909 33.6818C4.65909 32.6212 2.89394 32.0909 0.36364 32.0909V29.2727C2.81819 29.2727 4.81061 29.4621 6.34091 29.8409C7.88637 30.2197 9.07576 30.7576 9.90909 31.4545C10.7424 32.1515 11.3106 32.9848 11.6136 33.9545C11.9318 34.9242 12.0909 36 12.0909 37.1818V46.2727C12.0909 48.0455 12.2955 49.5 12.7045 50.6364C13.1288 51.7727 13.8409 52.6136 14.8409 53.1591C15.8561 53.7197 17.2424 54 19 54V58.4545ZM0.36364 32.0909V26.6364H5.72728V32.0909H0.36364Z"
                     fill="currentColor"
                  />
               </svg>
               <div className="text-5xl  -mt-2 tracking-tight">
                  <p className="">Front-End Magician</p>
               </div>

               <svg
                  viewBox="0 0 19 59"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-auto"
               >
                  <path
                     d="M18.8182 29.2727V32.0909C16.2879 32.0909 14.5152 32.6212 13.5 33.6818C12.5 34.7424 12 36.5152 12 39V46.2727C12 48.3636 11.7955 50.1743 11.3864 51.7046C10.9924 53.2349 10.3409 54.5 9.43182 55.5C8.52273 56.5 7.31061 57.2424 5.79546 57.7273C4.28031 58.2121 2.4091 58.4546 0.181824 58.4546V54C1.9394 54 3.31819 53.7197 4.31819 53.1591C5.33334 52.6136 6.04546 51.7727 6.45455 50.6364C6.87879 49.5 7.09091 48.0455 7.09091 46.2727V37.1818C7.09091 36 7.24243 34.9243 7.54546 33.9546C7.86364 32.9849 8.4394 32.1515 9.27273 31.4546C10.1061 30.7576 11.2879 30.2197 12.8182 29.8409C14.3636 29.4621 16.3636 29.2727 18.8182 29.2727ZM0.181824 0.272736C2.4091 0.272736 4.28031 0.515161 5.79546 1.00001C7.31061 1.48486 8.52273 2.22728 9.43182 3.22728C10.3409 4.22728 10.9924 5.49243 11.3864 7.02274C11.7955 8.55304 12 10.3636 12 12.4546V19.7273C12 22.2121 12.5 23.9849 13.5 25.0455C14.5152 26.1061 16.2879 26.6364 18.8182 26.6364V29.4546C16.3636 29.4546 14.3636 29.2652 12.8182 28.8864C11.2879 28.5076 10.1061 27.9697 9.27273 27.2727C8.4394 26.5758 7.86364 25.7424 7.54546 24.7727C7.24243 23.803 7.09091 22.7273 7.09091 21.5455V12.4546C7.09091 10.6818 6.87879 9.22728 6.45455 8.09092C6.04546 6.9394 5.33334 6.09092 4.31819 5.54546C3.31819 5.00001 1.9394 4.72728 0.181824 4.72728V0.272736ZM18.8182 26.6364V32.0909H13.4546V26.6364H18.8182Z"
                     fill="currentColor"
                  />
               </svg>
            </div>

            {/* Buttons/containers at bottom */}
            <div
               ref={buttonContainersRef}
               className="flex gap-4 mt-2"
            >
               <div className="px-6 py-1 text-center border border-white/30 rounded-full">
                  Contact Me
               </div>
               <div className="px-6 py-1 text-center border border-white/30 rounded-full">
                  Showcase
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
