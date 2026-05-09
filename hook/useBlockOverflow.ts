// Codes by mahdi tasha
// Forcing next.js to render as client side
"use client";

// Importing part
import { useBlockOverflowProps } from "@/type/hook";
import { useEffect } from "react";

// Creating and exporting useBlockOverflow as default
export default function useBlockOverflow({
  condition,
  dependency,
  element,
}: useBlockOverflowProps) {
  // Defining variables
  const elementToOverflow = element
    ? element === "body"
      ? document.body
      : element
    : document.getElementById("root-layout");

  // Defining main logic
  useEffect(() => {
    if (elementToOverflow) {
      const orginalOverflow = elementToOverflow.style.overflow;
      const resetOverflow = () =>
        (elementToOverflow.style.overflow = orginalOverflow);

      if (condition) elementToOverflow.style.overflow = "hidden";
      else resetOverflow();

      return () => {
        resetOverflow();
      };
    }
  }, [condition, ...dependency]);
}
