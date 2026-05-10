// Codes by mahdi tasha
// Importing part
import { cn } from "@/lib/util";
import { ButtonProps } from "@/type/component";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

// Creating and exporting Button component as default
export default function Button({
   variant = "primary",
   size = "normal",
   className,
   asChild = false,
   loading = false,
   disabled = false,
   children,
   ...props
}: ButtonProps) {
   // Defining variables
   const Comp = asChild ? Slot : "button";
   const baseClasses = cn(
      "font-normal text-sm rounded-lg outline-none cursor-pointer relative overflow-hidden",
      "duration-500 transition-all active:scale-90 ring-0 focus-visible:ring-3",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      size === "normal"
         ? "flex items-center justify-center w-fit h-9 px-3"
         : "size-9 flex items-center justify-center",
      variant === "primary"
         ? "hover:bg-base text-white bg-base-light ring-base/40"
         : variant === "secondary"
           ? "dark:text-white text-black ring-current/40"
           : variant === "white"
             ? "bg-white text-base ring-white/40"
             : "bg-transparent text-base ring-current/40 border-2 border-current",
      className,
   );

   // Conditional rendering
   if (asChild) {
      return (
         <Comp disabled={disabled} className={baseClasses} {...props}>
            {children}
         </Comp>
      );
   } else {
      return (
         <Comp
            disabled={loading || disabled}
            className={baseClasses}
            {...props}
         >
            <motion.div
               className="absolute left-0 top-0 size-full flex items-center justify-center"
               transition={{
                  duration: 0.3,
                  ease: "easeInOut",
               }}
               initial={{
                  y: "100%",
               }}
               exit={{
                  y: "100%",
               }}
               animate={
                  loading
                     ? {
                          y: 0,
                       }
                     : {
                          y: "100%",
                       }
               }
            >
               <Loader2 className="size-4 animate-spin" />
            </motion.div>
            <motion.div
               className="h-9 flex items-center justify-center px-3"
               transition={{
                  duration: 0.3,
                  ease: "easeInOut",
               }}
               initial={{
                  y: 0,
               }}
               exit={{
                  y: 0,
               }}
               animate={
                  loading
                     ? {
                          y: "-100%",
                       }
                     : {
                          y: 0,
                       }
               }
            >
               {children}
            </motion.div>
         </Comp>
      );
   }
}
