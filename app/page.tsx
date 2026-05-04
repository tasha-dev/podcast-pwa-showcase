// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import EmailLogin from "@/component/miniPage/emailLogin";
import PhoneLogin from "@/component/miniPage/phoneLogin";
import { HomePageStepContext } from "@/lib/context";
import { HomePageContextType } from "@/type/context";
import { UserLocalStorage } from "@/type/localStorage";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

// Creating and Exporting home page as default
export default function HomePage() {
  // Defining hooks
  const [step, setStep] = useState<HomePageContextType["step"]>("phone");
  const userLocalStorage = useLocalStorageState<UserLocalStorage>("user", {
    defaultValue: {
      loginWay: undefined,
      fullName: undefined,
      email: undefined,
      phoneNumber: undefined,
    },
  });

  // Returning JSX
  return (
    <HomePageStepContext.Provider
      value={{
        setStep,
        step,
      }}
    >
      {step === "phone" ? <PhoneLogin /> : <EmailLogin />}
    </HomePageStepContext.Provider>
  );
}
