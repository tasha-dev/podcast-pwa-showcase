// Codes by mahdi tasha
// Importing part
import { ComponentProps, ReactNode } from "react";

// Creating and exprting type of props for components
export interface RootLayoutProps {
  children: ReactNode;
}

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
  size?: "normal" | "icon";
}

export interface TooltipProps {
  children: ReactNode;
  triggerAsChild?: boolean;
  content: string;
  className?: string;
}
