// Codes by mahdi taha
// Importing part
import { HomePageContextType } from "@/type/context";
import { createContext } from "react";

// Creating and exporting Contexts of the app
export const HomePageStepContext = createContext<
  HomePageContextType | undefined
>(undefined);
