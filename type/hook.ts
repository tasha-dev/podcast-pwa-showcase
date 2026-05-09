// Codes by mahdi tasha
// Importing part
import { DependencyList } from "react";

// Creating and exprting type of hooks
export interface useTimerReturnProps {
  time: number; // in ms
  reset: () => void;
}

export interface useBlockOverflowProps {
  dependency: DependencyList;
  condition: boolean;
  element?: "body" | HTMLElement | null;
}
