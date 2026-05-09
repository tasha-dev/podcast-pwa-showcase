// Codes by mahdi tasha
// Forcing next.js to render this as client side
"use client";

// Importing part
import { cn } from "@/lib/util";
import { DropdownProps } from "@/type/component";

// Creating and exporting Dropdown component as default
export default function Dropdown({
  children,
  className,
  options,
}: DropdownProps) {
  // Returning JSX
  return (
    <div className={cn("relative", className)}>
      {children}
      <div className="absolute left-1/2 -translate-x-1/2 top-full translatey-[5px] w-full">
        HI
      </div>
    </div>
  );
}
