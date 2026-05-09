// Codes by mahdi tasha
// Importing part
import { ComponentProps, ReactNode } from "react";

// Creating and exprting type of props for components
export interface RootLayoutProps {
  children: ReactNode;
}

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "white";
  size?: "normal" | "icon";
  asChild?: boolean;
  loading?: boolean;
}

export interface TooltipProps {
  children: ReactNode;
  triggerAsChild?: boolean;
  content: string;
  className?: string;
}

export interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export interface InputProps extends Omit<ComponentProps<"input">, "id"> {
  errorMessage?: string;
  label?: {
    title: string;
    id: string;
  };
  left?:
    | {
        type: "icon";
        icon: ReactNode;
      }
    | {
        type: "text";
        text: string;
      };
}

export interface OTPProps {
  lenght: number;
  className?: string;
  onValueChange?: (value: string) => void;
  errorMessage?: string;
}

export interface ImageInputProps {
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  errorMessage?: string;
}

export interface DatePickerProps {
  className?: string;
  label?: string;
  onValueChange?: (value: string) => void; // ISO
  value?: string;
  errorMessage?: string;
}

export interface DropdownProps {
  children: ReactNode;
  className?: string;
  options: {
    label: string;
    onClick?: () => void;
  }[];
}
