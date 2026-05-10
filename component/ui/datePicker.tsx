// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import useBlockOverflow from "@/hook/useBlockOverflow";
import { cn, getDayRole, getStartOfMonthWeekday } from "@/lib/util";
import { DatePickerProps } from "@/type/component";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar1, MoveLeft, MoveRight } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "./button";
import Dropdown from "./dropdown";

// Creating and exporting DatePicker component as default
export default function DatePicker({
  className,
  errorMessage,
  label,
  onValueChange,
  value,
}: DatePickerProps) {
  // Defining hooks
  const [open, setOpen] = useState<boolean>(false);
  const [valueState, setValueState] = useState(
    value ? moment(value) : moment(),
  );

  useBlockOverflow({
    condition: open,
    dependency: [open],
  });

  // Defining variables
  const daysInMonth = moment(valueState).daysInMonth();
  const startOfCurrentMonth = getStartOfMonthWeekday(
    valueState.year(),
    valueState.month(),
  );

  const daysBeforeThisMonth = 7 - startOfCurrentMonth.weekday();

  // Returning JSX
  return (
    <>
      {createPortal(
        <AnimatePresence mode="wait">
          {open && (
            <>
              <motion.div
                className="fixed left-1/2 top-0 dark:bg-black/10 bg-white/10 lg:max-w-lg w-full h-dvh pointer-events-none z-40 -translate-x-1/2"
                onClick={() => setOpen(false)}
                initial={{
                  opacity: 0,
                  backdropFilter: "blur(0px)",
                  pointerEvents: "none",
                }}
                exit={{
                  opacity: 0,
                  backdropFilter: "blur(0px)",
                  pointerEvents: "none",
                }}
                animate={{
                  opacity: 1,
                  backdropFilter: "blur(20px)",
                  pointerEvents: "auto",
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="lg:max-w-lg w-full max-h-3/4 fixed bottom-0 left-1/2 z-50 bg-linear-to-b from-base to bg-base-light rounded-t-xl -translate-x-1/2 py-8 px-4 overflow-auto text-white"
                transition={{
                  ease: "easeInOut",
                  duration: 0.65,
                }}
                initial={{
                  opacity: 0,
                  y: "100%",
                }}
                exit={{
                  opacity: 0,
                  y: "100%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
              >
                {label && (
                  <span className="text-center block truncate mb-2 font-bold text-xl">
                    {label}
                  </span>
                )}
                <div className="flex items-center justify-center gap-3 mb-5">
                  <Button
                    variant="white"
                    size="icon"
                    className="shrink-0"
                    onClick={() =>
                      setValueState((prev) => moment(prev).subtract("month", 1))
                    }
                  >
                    <MoveLeft className="size-4" />
                  </Button>
                  <Dropdown
                    className="flex-1"
                    trigger={moment(valueState).format("YYYY")}
                    options={[...new Array(100)].map((_, index) => {
                      const nowYear = new Date().getFullYear();
                      const thisYear = nowYear - index;

                      return {
                        label: thisYear.toString(),
                        onSelect: () => {
                          const dateToSet = new Date(
                            thisYear,
                            valueState.month(),
                            valueState.day(),
                          );

                          const momentOfDate = moment(dateToSet);
                          setValueState(momentOfDate);
                        },
                      };
                    })}
                  />
                  <Dropdown
                    className="flex-1"
                    trigger={moment(valueState).format("MMMM")}
                    options={[...new Array(12)].map((_, index) => {
                      const thisMonth = new Date(
                        valueState.year(),
                        index + 1,
                        valueState.day(),
                      );

                      const momentOfDate = moment(thisMonth);
                      return {
                        label: momentOfDate.format("MMMM"),
                        onSelect: () => {
                          setValueState(momentOfDate);
                        },
                      };
                    })}
                  />
                  <Button
                    variant="white"
                    size="icon"
                    onClick={() =>
                      setValueState((prev) => moment(prev).add("month", 1))
                    }
                  >
                    <MoveRight className="size-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-7 gap-3">
                  {[
                    ...new Array(
                      isNaN(daysBeforeThisMonth) ? 0 : daysBeforeThisMonth,
                    ),
                  ].map((_, index) => (
                    <div key={index} className="aspect-square w-full" />
                  ))}
                  {[...new Array(daysInMonth)].map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      disabled={
                        getDayRole(valueState, index, valueState) === "disabled"
                      }
                      data-role={getDayRole(valueState, index, valueState)}
                      onClick={() => {
                        const role = getDayRole(valueState, index, valueState);
                        if (role !== "disabled") {
                          const itemDate = moment(
                            new Date(
                              valueState.year(),
                              valueState.month(),
                              index + 1,
                            ),
                          );

                          setValueState(itemDate);
                          onValueChange?.(itemDate.toISOString());
                        }
                      }}
                      className={cn(
                        "w-full aspect-square flex items-center justify-center rounded-full text-center cursor-pointer outline-0 transition-all duration-500",
                        "data-[role=today]:bg-white data-[role=today]:text-base",
                        "data-[role=selected]:bg-white data-[role=selected]:text-base data-[role=selected]:ring-4 data-[role=selected]:ring-white/40",
                        "data-[role=normal]:bg-transparent data-[role=normal]:text-white",
                        "data-[role=disabled]:bg-transparent data-[role=disabled]:text-white/50",
                      )}
                    >
                      <span className="text-center text-sm font-normal block truncate">
                        {index + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.getElementById("root-layout") ?? document.body,
      )}
      <div className={className}>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            errorMessage ? "text-red-500" : "text-base",
            label && "relative",
            "rounded-md h-9 w-full bg-white dark:bg-neutral-900 cursor-pointer outline-0",
            "border-2 border-current ring-current/40",
            "flex items-center justify-between",
            "ring-0 focus:ring-3 ring-current/40",
          )}
        >
          {label && (
            <div
              className={cn(
                "absolute ml-0 left-0 top-0 bg-white dark:bg-neutral-900 pointer-events-none transition-all duration-500 flex translate-x-2 px-3 -translate-y-1/2",
              )}
            >
              <span className="text-xs font-normal">{label}</span>
            </div>
          )}
          <div className="h-9 w-full flex-1 flex items-center justify-start px-3">
            <span className="text-current font-medium text-sm truncate text-left">
              {moment(valueState).format("dddd, MMMM Do YYYY")}
            </span>
          </div>
          <div
            className={
              "shrink-0 flex items-center justify-center size-9 outline-0 cursor-pointer"
            }
          >
            <Calendar1 className="size-4" />
          </div>
        </button>
        {errorMessage && (
          <p className="mt-1.5 text-red-500 text-left text-sm font-normal">
            {errorMessage}
          </p>
        )}
      </div>
    </>
  );
}
