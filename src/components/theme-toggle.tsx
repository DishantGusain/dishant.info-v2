"use client";

import * as React from "react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { FireRing } from "./fire-ring-border/fire-ring";
import { IceRing } from "./ice-ring-border/ice-ring";

export function ThemeToggle({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) {
   const { theme, setTheme } = useTheme();
   const ref = React.useRef<HTMLDivElement>(null);
   const [mounted, setMounted] = React.useState(false);

   // Only show UI after component is mounted on client to avoid hydration mismatch
   React.useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return (
         <div
            className={cn("relative w-10 h-10", className)}
            ref={ref}
            {...props}
         />
      );
   }

   return (
      <div
         className={cn("relative", className)}
         ref={ref}
         {...props}
      >
         <div
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="hover:scale-105 transition-all duration-300 cursor-pointer rounded-full"
            aria-label="Toggle theme"
         >
            {theme === "light" && (
               <div className="">
                  <IceRing>
                     <img
                        className="w-full h-full"
                        src="/moon-dark-old.png"
                        alt="Moon icon for dark mode"
                     />
                  </IceRing>
               </div>
            )}
            {theme === "dark" && (
               <div className="w-full h-full relative">
                  <FireRing>
                     <img
                        className="w-full h-full"
                        src="/sun-light-old.png"
                        alt="Sun icon for light mode"
                     />
                  </FireRing>
               </div>
            )}
            <span className="sr-only">Toggle theme</span>
         </div>
      </div>
   );
}
