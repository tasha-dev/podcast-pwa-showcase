// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { cn } from "@/lib/util";
import { OTPProps } from "@/type/component";
import { OTPInput } from "input-otp";

// Creating and exporting OTP component as default
export default function OTP({
  lenght,
  errorMessage,
  onValueChange,
  className,
}: OTPProps) {
  // Returning JSX
  return (
    <div className={className}>
      <OTPInput
        maxLength={lenght}
        onChange={onValueChange}
        render={({ slots }) => (
          <div className={"flex flex-wrap items-center justify-evenly gap-3"}>
            {slots.map((slot, idx) => (
              <div
                key={idx}
                data-focused={slot.isActive}
                data-errored={errorMessage !== undefined}
                className={cn(
                  "size-14 rounded-md outline-0 transition-all duration-500 flex items-center justify-center text-sm",
                  "data-[errored=false]:text-base data-[errored=true]:text-red-500",
                  "bg-transparent border-2 border-current",
                  "ring-current/40 data-[focused=false]:ring-0 data-[focused=true]:ring-3",
                )}
                {...slot}
              >
                {slot.char}
              </div>
            ))}
          </div>
        )}
      />
      {errorMessage && (
        <p className="mt-2 text-red-500 text-center text-sm font-normal">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
