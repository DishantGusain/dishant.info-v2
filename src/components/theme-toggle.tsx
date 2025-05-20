"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) {
   const { theme, setTheme } = useTheme();
   const ref = React.useRef<HTMLDivElement>(null);

   return (
      <div
         className={cn("relative", className)}
         ref={ref}
         {...props}
      >
         <Button
            variant="ghost"
            size="icon"
            onClick={() => {
               setTheme(theme === "light" ? "dark" : "light");
            }}
            className="h-9 w-9 rounded-full"
            aria-label="Toggle theme"
         >
            {theme === "light" && <Sun className="h-4 w-4" />}
            {theme === "dark" && <Moon className="h-4 w-4" />}
            <span className="sr-only">Toggle theme</span>
         </Button>
      </div>
   );
}
