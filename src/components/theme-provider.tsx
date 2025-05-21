"use client";

import * as React from "react";

type ThemeProviderProps = {
   children: React.ReactNode;
   defaultTheme?: "light" | "dark";
};

type ThemeContextType = {
   theme: string;
   setTheme: (theme: "light" | "dark") => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
   undefined
);

export function ThemeProvider({
   children,
   defaultTheme = "dark",
}: ThemeProviderProps) {
   const [theme, setTheme] = React.useState<"light" | "dark">(defaultTheme);

   // Load theme from localStorage on mount
   React.useEffect(() => {
      const storedTheme = localStorage.getItem("theme") as
         | "light"
         | "dark"
         | null;
      if (storedTheme) {
         setTheme(storedTheme);
      }
   }, []);

   // Update localStorage and apply theme class when theme changes
   React.useEffect(() => {
      localStorage.setItem("theme", theme);

      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
   }, [theme]);

   const value = React.useMemo(
      () => ({
         theme,
         setTheme: (theme: "light" | "dark") => setTheme(theme),
      }),
      [theme]
   );

   return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
   );
}

export const useTheme = () => {
   const context = React.useContext(ThemeContext);
   if (context === undefined) {
      throw new Error("useTheme must be used within a ThemeProvider");
   }
   return context;
};
