import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const InterSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
   title: "Dishant Gusain | Front-End Website Developer & Designer | React - Next.js - TailwindCSS",

   description:
      "I'm a freelance website application developer with 4 years of experience building modern, high-performance web applications. I specialize in converting Figma designs into production-ready React code, delivering responsive, pixel-perfect, and user-focused frontends. My tech stack includes React, Next.js, TailwindCSS, TypeScript, Node.js, and Figma. I offer Figma to React development, custom landing page creation, and single-page application (SPA) development — all optimized for speed, SEO, and seamless user experience",
   keywords:
      "Dishant Gusain, Dishant, Dishant.info, Website Developer, React, Next.js, Front End, Developer, Front-End, Freelance, Freelancer, Upwork, PeoplePerHour, Toptal, Guru, Fiverr, Contra, GSAP, GreenShock Animation Platform, Responsive, Tailwind, CSS, JavaScript, Web Application, India, Expertise, Upwork, TypeScript, NodeJS, Figma, Figma to React, Top Rated, Best website developer, Website Designer, Website Development, Website Developer in India.",

   authors: [{ name: "Dishant Gusain", url: "https://dishant.info/" }],

   creator: "Dishant Gusain",

   openGraph: {
      type: "website",
      title: "Dishant Gusain | Front-End Website Developer & Designer | React - Next.js - TailwindCSS",
      url: "https://dishant.info/",
      description:
         "I'm a freelance website application developer with 4 years of experience building modern, high-performance web applications. I specialize in converting Figma designs into production-ready React code, delivering responsive, pixel-perfect, and user-focused frontends. My tech stack includes React, Next.js, TailwindCSS, TypeScript, Node.js, and Figma. I offer Figma to React development, custom landing page creation, and single-page application (SPA) development — all optimized for speed, SEO, and seamless user experience",
      images: [
         {
            url: "https://firebasestorage.googleapis.com/v0/b/dishant-portfolio-nextjs.appspot.com/o/Dishant%20Gusain%20React%20Next%20Js%20Responsive%20Front%20End.png?alt=media&token=9d7246ab-c949-4c4b-8a09-4b31778e9e3d",
            alt: "Dishant Gusain's portfolio",
         },
      ],
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${InterSans.variable} font-Inter antialiased`}
         >
            {children}
         </body>
      </html>
   );
}
