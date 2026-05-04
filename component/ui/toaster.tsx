// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import { Toaster as Sonner } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";

// Creating and exporting Toaster component as deafult
export default function Toaster() {
  // Defining hooks
  const { theme } = useTheme();

  // Returning JSX
  return (
    <Sonner
      position="bottom-center"
      // bg-white dark:bg-neutral-900 text-neutral-900
      style={
        {
          "--normal-bg": theme === "light" ? "#ffffff" : "#0a0a0a",
          "--normal-text": "#0466c8",
          "--normal-border": "#0466c8",
          "--border-radius": "8px",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
    />
  );
}
