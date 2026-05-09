// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { cn } from "@/lib/util";
import { InputProps } from "@/type/component";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

// Creating and exporting Input component as default
export default function Input({
  className,
  label,
  left,
  type = "text",
  placeholder,
  autoFocus = false,
  errorMessage,
  onFocus,
  onBlur,
  defaultValue,
  ...props
}: InputProps) {
  // Defining hooks
  const [focused, setFocused] = useState<boolean>(autoFocus);
  const [typeState, setTypeState] = useState<typeof type>(type);
  const [labelActive, setLabelActive] = useState<boolean>(
    defaultValue ? true : false,
  );

  // Conditional rendering
  return (
    <div className={className}>
      <div
        data-focused={focused}
        className={cn(
          errorMessage ? "text-red-500" : "text-base",
          label && "relative",
          "rounded-md h-9 w-full bg-white dark:bg-neutral-900",
          "border-2 border-current ring-current/40",
          "flex items-center justify-between transition-all duration-500",
          "data-[focused=true]:ring-3 data-[focused=false]:ring-0",
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
        {left && (
          <div
            className={cn(
              "shrink-0 border-r-2 border-r-current flex items-center justify-center",
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
        <input
          placeholder={placeholder}
          autoComplete={"off"}
          type={typeState}
          onBlur={(e) => {
            onBlur?.(e);
            setFocused(false);
            if (e.target.value === "") setLabelActive(false);
          }}
          onFocus={(e) => {
            onFocus?.(e);
            setFocused(true);
            setLabelActive(true);
          }}
          className={cn(
            "outline-none w-full block text-current text-sm font-medium flex-1 px-3 h-9",
            "dark:placeholder:text-neutral-600 placeholder:text-neutral-700",
          )}
          {...props}
        />
        {type === "password" && (
          <button
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            type="button"
            onClick={() =>
              typeState === "password"
                ? setTypeState("text")
                : setTypeState("password")
            }
            className={
              "shrink-0 border-l-2 border-l-current flex items-center justify-center size-9 outline-0 cursor-pointer"
            }
          >
            {typeState === "password" ? (
              <Eye className="size-4" />
            ) : (
              <EyeOff className="size-4" />
            )}
          </button>
        )}
      </div>
      {errorMessage && (
        <p className="mt-1.5 text-red-500 text-left text-sm font-normal">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
