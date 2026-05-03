// Codes by mahdi tasha
// Importing part
import { cn } from "@/lib/util";
import { ButtonProps } from "@/type/component";
import { Slot } from "@radix-ui/react-slot";

// Creating and exporting Button component as default
export default function Button({
  variant = "primary",
  size = "normal",
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  // Defining variables
  const Comp = asChild ? Slot : "button";

  // Returning JSX
  return (
    <Comp
      className={cn(
        "font-normal text-sm rounded-lg outline-none cursor-pointer",
        "duration-500 transition-all active:scale-90 ring-0 focus-visible:ring-3",
        size === "normal"
          ? "h-9 px-3 flex items-center w-fit"
          : "size-9 flex items-center justify-center",
        variant === "primary"
          ? "hover:bg-base text-white bg-base-light ring-base/40"
          : "bg-white dark:bg-neutral-900 text-base ring-base/40",
        className,
      )}
      {...props}
    />
  );
}
