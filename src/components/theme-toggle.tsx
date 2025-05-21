"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FireRing } from "./fire-ring-border/fire-ring";
import { IceRing } from "./ice-ring-border/ice-ring";
export function ThemeToggle({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) {
   const { theme, setTheme } = useTheme();
   const ref = React.useRef<HTMLDivElement>(null);

   return (
      <div
         className={cn("relative  ", className)}
         ref={ref}
         {...props}
      >
         <div
            onClick={() => {
               setTheme(theme === "light" ? "dark" : "light");
            }}
            className=" hover:scale-105   transition-all duration-300 cursor-pointer rounded-full"
            aria-label="Toggle theme"
         >
            {theme === "light" && (
               // <div className="w-full h-full  rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
               <div className="  ">
                  {/* <img
                     className=" "
                     src="/moon-dark-old.png"
                  /> */}
                  <IceRing  >
                  <img
                     className="w-full h-full "
                     src="/moon-dark-old.png"
                  />
                  </IceRing>
               </div>
            )}
            {theme === "dark" && (
               <div className="w-full h-full relative  ">
                  {/* <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-200 to-slate-300 relative">
                  <div className="w-5 h-5 rounded-full bg-slate-500/40 blur-[1px] absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600/40 blur-[0.5px] absolute top-2/3 right-1/3"></div>
               </div>
                */}
                  {/* <img
                     className="w-full h-full "
                     src="/sun-light-old.png"
                  /> */}
                  <FireRing>
                  <img
                     className="w-full h-full "
                     src="/sun-light-old.png"
                  />
                  </FireRing>
               </div>
            )}
            <span className="sr-only">Toggle theme</span>
         </div>
      </div>
   );
}
