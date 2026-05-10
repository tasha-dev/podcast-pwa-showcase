// Codes by mahdi tasha
// Forcing next.js to render this as client side
"use client";

// Importing part
import { cn } from "@/lib/util";
import { DropdownProps } from "@/type/component";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./button";

// Creating and exporting Dropdown component as default
export default function Dropdown({
  className,
  options,
  trigger,
}: DropdownProps) {
  // Defining hooks
  const [open, setOpened] = useState<boolean>(false);

  // Returning JSX
  return (
    <div className={cn("relative", className)}>
      <Button
        variant="white"
        className="w-full"
        onClick={() => setOpened((prev) => !prev)}
      >
        {trigger}
      </Button>
      <AnimatePresence mode="wait" key="dropdown-animate-precense">
        {open && (
          <motion.div
            key={"dropdown"}
            className="absolute left-1/2 -translate-x-1/2 top-full translate-y-3 w-full bg-white max-h-[150px] overflow-auto p-2 rounded-lg shadow-lg shadow-black/10 flex flex-col gap-3"
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
            {options.map((item, index) => (
              <button
                key={index}
                className="rounded-md h-9 flex items-center justify-start p-2 w-full border border-base transition-all duration-500 bg-white text-base hover:bg-base hover:text-white focus-visible:bg-base focus-visible:text-white cursor-pointer"
                onClick={() => {
                  setOpened(false);
                  item.onSelect?.();
                }}
              >
                <span
                  className={
                    "font-medium text-sm block w-full text-left truncate"
                  }
                >
                  {item.label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
