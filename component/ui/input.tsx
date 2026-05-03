// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { cn } from "@/lib/util";
import { InputProps } from "@/type/component";
import { useState } from "react";

// Creating and exporting Input component as default
export default function Input({
  className,
  label,
  left,
  placeholder,
  autoFocus = false,
  ...props
}: InputProps) {
  // Defining hooks
  const [focused, setFocused] = useState<boolean>(autoFocus);
  const [labelActive, setLabelActive] = useState<boolean>(false);

  // Returning JSX
  return (
    <div
      data-focused={focused}
      className={cn(
        "border-2 border-base rounded-md h-9 w-full text-base ring-base/40",
        "flex items-center justify-between transition-all duration-500",
        "data-[focused=true]:ring-3 data-[focused=false]:ring-0",
        label && "relative",
        className,
      )}
    >
      {label && (
        <div
          data-active={labelActive}
          className={cn(
            "absolute ml-3 left-0 top-0 bg-white dark:bg-neutral-900 pointer-events-none transition-all duration-500 flex",
            placeholder
              ? "translate-x-2 -translate-y-1/2 px-3 ml-0"
              : "data-[active=true]:translate-x-2 data-[active=true]:ml-0 data-[active=true]:px-3 data-[active=true]:-translate-y-1/2 data-[active=false]:translate-x-0 data-[active=false]:translate-y-1/2 data-[active=false]:ml-3 data-[active=false]:px-0",
          )}
        >
          <label htmlFor={label.id} className="text-xs font-normal">
            {label.title}
          </label>
        </div>
      )}
      <input
        placeholder={placeholder}
        onBlur={(e) => {
          setFocused(false);
          if (e.target.value === "") setLabelActive(false);
        }}
        onFocus={() => {
          setFocused(true);
          setLabelActive(true);
        }}
        className={cn(
          "outline-none w-full block  bg-white dark:bg-neutral-900 text-current text-sm font-medium flex-1 px-3",
          "dark:placeholder:text-neutral-600 placeholder:text-neutral-700",
        )}
        {...props}
      />
      {left && (
        <div
          className={cn(
            "shrink-0 border-l-2 border-l-current flex items-center justify-center",
            left.type === "icon" ? "size-9" : "px-3 h-9",
          )}
        >
          {left.type === "icon" ? (
            left.icon
          ) : (
            <span className="font-light text-current text-xs truncate block text-center">
              {left.text}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
