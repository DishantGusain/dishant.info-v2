import "./ice-ring.css";
export const IceRing = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="relative">
         <div className="ice-circle opacity-100"></div>
         <div className="text-center text-yellow-500 w-full h-full scale-115 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[49%] -z-10">
            {children}
         </div>
         <svg>
            <filter id="ice-wavy">
               <feTurbulence
                  x="0"
                  y="0"
                  baseFrequency="0.009"
                  numOctaves="5"
                  seed="2"
               >
                  <animate
                     attributeName="baseFrequency"
                     dur="60s"
                     values="0.02;0.005;0.02"
                     repeatCount="indefinite"
                  />
               </feTurbulence>
               <feDisplacementMap
                  in="SourceGraphic"
                  scale="30"
               />
            </filter>
         </svg>
      </div>
   );
};
