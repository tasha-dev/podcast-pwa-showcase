// Codes by mahdi tasha
// Importing part
import { clsx, type ClassValue } from "clsx";
import moment, { Moment } from "moment";
import { twMerge } from "tailwind-merge";

// Defining variables
const tailwindLovelyColors = [
   "oklch(70.5% 0.213 47.604)",
   "oklch(76.8% 0.233 130.85)",
   "oklch(69.6% 0.17 162.48)",
   "oklch(68.5% 0.169 237.323)",
   "oklch(62.7% 0.265 303.9)",
   "oklch(64.5% 0.246 16.439)",
];

// Creating and exporting utility functions
export const convertBytesToMB = (size: number) =>
   +(size * (1 / 1024 / 1024)).toFixed(2);

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function sleep(ms: number): Promise<void> {
   return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getFormattedTime(time: number) {
   const minutes = Math.floor(time / 60000);
   const remainedMS = time - 60000 * minutes;
   const seconds = remainedMS / 1000;

   return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

export function fileToDataURL(file: File): Promise<string> {
   return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;

      reader.readAsDataURL(file);
   });
}

export function getDayRole(
   showingDate: Moment,
   index: number,
   selectedDate?: Moment,
) {
   const today = moment().format("YYYY/MM/DD");
   const itemDate = moment(
      new Date(showingDate.year(), showingDate.month(), index + 1),
   ).format("YYYY/MM/DD");

   if (moment(itemDate).isAfter(today)) {
      return "disabled";
   } else {
      if (itemDate === today) return "today";
      else if (
         selectedDate &&
         itemDate === moment(selectedDate).format("YYYY/MM/DD")
      )
         return "selected";
      else return "normal";
   }
}

export function getStartOfMonthWeekday(year: number, month: number) {
   return moment({ year, month: month - 1, day: 1 });
}

export function getRandomLovelyColor() {
   const randomIndex = Math.floor(Math.random() * tailwindLovelyColors.length);
   return tailwindLovelyColors[randomIndex];
}

export function formatTime(seconds: number) {
   if (!seconds || Number.isNaN(seconds)) return "00:00";
   else {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);

      return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
   }
}
