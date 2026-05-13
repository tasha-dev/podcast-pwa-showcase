// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import { cn } from "@/lib/util";
import { TabProps } from "@/type/component";
import { useState } from "react";
import { motion } from "framer-motion";

// Creating and exporting Tab component as default
export default function Tab({ items, className, onValueChange }: TabProps) {
   // Defining hooks
   const [activeIndex, setActiveIndex] = useState<number>(0);

   // Returning JSX
   return (
      <button
         onClick={() => {
            setActiveIndex((prev) => (prev === 0 ? 1 : 0));
            onValueChange?.(items[activeIndex]);
         }}
         className={cn(
            "grid grid-cols-2 gap-3 bg-neutral-300 dark:bg-neutral-700 p-1 overflow-hidden rounded-lg relative z-0 w-full",
            "transition-all duration-500 active:scale-95 outline-0 ring-0 dark:ring-neutral-700/40 ring-neutral-300/40 focus-visible:ring-4",
            className,
         )}
      >
         <motion.div
            className="absolute top-1 w-1/2 h-9 bg-white dark:bg-neutral-950 rounded-lg -z-10"
            initial={{
               right: "auto",
               left: "4px",
            }}
            animate={
               activeIndex === 0
                  ? {
                       left: "4px",
                       right: "auto",
                    }
                  : {
                       right: "4px",
                       left: "auto",
                    }
            }
            transition={{
               duration: 0.5,
               ease: "easeInOut",
            }}
         />
         {items.map((item, index) => (
            <div
               key={index}
               className="h-9 flex items-center justify-center cursor-pointer relative z-10"
            >
               <span className="block text-center font-medium text-black dark:text-white">
                  {item}
               </span>
            </div>
         ))}
      </button>
   );
}
