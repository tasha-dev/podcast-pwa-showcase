// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import { useTheme } from "next-themes";
import Button from "./button";
import { SunMoon } from "lucide-react";
import Tooltip from "./tooltip";

// Creating and exporting ThemeToggler component as default
export default function ThemeToggler() {
  // Defining hooks
  const { setTheme } = useTheme();

  // Returning JSX
  return (
    <Tooltip triggerAsChild content="Toggle Theme">
      <Button
        variant="primary"
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
        size="icon"
      >
        <SunMoon />
      </Button>
    </Tooltip>
  );
}
