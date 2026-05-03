// Codes by mahdi tasha
// Creating and exprting type of contexts
export interface HomePageContextType {
  step: "email" | "phone" | "info" | "code";
  setStep: (step: "email" | "phone" | "info" | "code") => void;
}
