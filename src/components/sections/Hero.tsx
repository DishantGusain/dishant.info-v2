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

   const {  fadeIn, floatingAnimation, staggerAnimation } =
      useGsapAnimations();

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
      <div className="relative w-full min-h-screen p-8 flex flex-col justify-between overflow-hidden">
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
            <div className="flex items-center text-white/90 font-light tracking-wide text-lg">
               <span className="mr-2">{"{"}</span>
               <span>Front-End</span>
               <span className="mx-2">{"}"}</span>
               <span>Magician</span>
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
