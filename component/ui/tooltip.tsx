// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { TooltipProps } from "@/type/component";
import Button from "./button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/util";

// Creating and exporting Tooltip component as default
export default function Tooltip({
   children,
   content,
   triggerAsChild = false,
   className,
   side = "left",
}: TooltipProps) {
   // Defining hooks
   const [open, setOpen] = useState<boolean>(false);

   // Returning JSX
   return (
      <div
         className={cn("relative block w-fit", className)}
         onPointerEnter={() => setOpen(true)}
         onPointerLeave={() => setOpen(false)}
      >
         {triggerAsChild ? children : <Button>{children}</Button>}
         <AnimatePresence key="Tooltip-Content">
            {open && (
               <motion.div
                  dir={side === "left" ? "ltr" : "rtl"}
                  className={cn(
                     "absolute text-base shrink-0 z-40",
                     side === "left" ? "top-full left-0" : "top-full right-0",
                  )}
                  transition={{
                     duration: 0.4,
                     ease: "easeInOut",
                  }}
                  initial={{
                     opacity: 0,
                     y: -3,
                     filter: "blur(10px)",
                  }}
                  animate={{
                     opacity: 1,
                     y: 0,
                     filter: "blur(0px)",
                  }}
                  exit={{
                     opacity: 0,
                     y: -3,
                     filter: "blur(10px)",
                  }}
               >
                  <div
                     className={cn(
                        "size-0 border-5 border-t-0 border-transparent border-b-current mt-1",
                        side === "left" ? "ml-4" : "mr-4",
                     )}
                  />
                  <div
                     className="bg-current h-9 px-3 rounded-md shadow-lg z-50 flex items-center justify-center"
                     dir="ltr"
                  >
                     <p className="text-center text-sm text-white whitespace-nowrap">
                        {content}
                     </p>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
