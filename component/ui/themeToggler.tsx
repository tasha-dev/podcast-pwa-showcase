// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import { useTheme } from "next-themes";
import Button from "./button";
import { SunMoon } from "lucide-react";
import Tooltip from "./tooltip";
import { ThemeTogglerProps } from "@/type/component";

// Creating and exporting ThemeToggler component as default
export default function ThemeToggler({ side, className }: ThemeTogglerProps) {
   // Defining hooks
   const { setTheme } = useTheme();

   // Returning JSX
   return (
      <Tooltip
         triggerAsChild
         content="Toggle Theme"
         className={className}
         side={side}
      >
         <Button
            size="icon"
            variant="primary"
            onClick={() =>
               setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
         >
            <SunMoon className="size-4" />
         </Button>
      </Tooltip>
   );
}
