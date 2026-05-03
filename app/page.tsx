// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import FadeUp from "@/component/animation/fadeUp";
import PhoneLogin from "@/component/miniPage/phoneLogin";
import { HomePageStepContext } from "@/lib/context";
import { HomePageContextType } from "@/type/context";
import { useState } from "react";

// Creating and Exporting home page as default
export default function HomePage() {
  // Defining hooks
  const [step, setStep] = useState<HomePageContextType["step"]>("phone");

  // Returning JSX
  return (
    <HomePageStepContext.Provider
      value={{
        setStep,
        step,
      }}
    >
      {step === "phone" ? <PhoneLogin /> : <FadeUp>{step}</FadeUp>}
    </HomePageStepContext.Provider>
  );
}
