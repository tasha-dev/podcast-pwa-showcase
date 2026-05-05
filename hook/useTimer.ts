// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { useTimerReturnProps } from "@/type/hook";
import { useEffect, useState } from "react";

// Creating and exporting useTimer hook as default
export default function useTimer(startFrom: number): useTimerReturnProps {
  // Defining states
  const [time, setTime] = useState<number>(startFrom);

  // Defining memo hook for the main logic of hook
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        const newTime = prev - 1000;
        if (newTime >= 0) return prev - 1000;
        else return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Returning part
  return {
    reset: () => setTime(startFrom),
    time,
  };
}
