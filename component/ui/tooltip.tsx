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
            className="absolute top-full left-0 text-base shrink-0"
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
            <div className="size-0 border-5 border-t-0 border-transparent border-b-current ml-4 mt-1" />
            <div className="bg-current h-9 px-3 rounded-md shadow-lg z-50 flex items-center justify-center">
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
