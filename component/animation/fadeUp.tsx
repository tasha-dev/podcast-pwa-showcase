// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import { FadeUpProps } from "@/type/component";
import { AnimatePresence, motion } from "framer-motion";

// Creating and exporting FadeUp component as deafult
export default function FadeUp({
  children,
  className,
  delay = 0,
}: FadeUpProps) {
  // Returninig JSX
  return (
    <AnimatePresence key={"fade-up-animation-presence"}>
      <motion.div
        className={className}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
          delay,
        }}
        initial={{
          opacity: 0,
          y: 10,
          filter: "blur(15px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          y: 10,
          filter: "blur(15px)",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
