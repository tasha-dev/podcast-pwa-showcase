// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import FadeUp from "@/component/animation/fadeUp";
import { useContext } from "react";
import { HomePageStepContext } from "@/lib/context";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { OTPLogin as formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { sleep } from "@/lib/util";
import { UserLocalStorage } from "@/type/localStorage";
import useLocalStorageState from "use-local-storage-state";

// Defining form type
type formType = z.infer<typeof formSchema>;

// Creating and exporting Code mini page as deafult
export default function Code() {
  // Defining hooks
  const homePageStep = useContext(HomePageStepContext);
  const [user, setUser] = useLocalStorageState<UserLocalStorage>("user");
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  // Handling submit event
  const submitHandler: SubmitHandler<formType> = async (data) => {
    await sleep(3000);

    setUser((prev) => {
      return {
        code: data.code,
        ...prev,
      };
    });

    homePageStep?.setStep("info");
    toast.success("Welcome 👋. Your now logged in to the podcast app.");
  };

  // Returning JSX
  return (
    <>
      <div className="prose dark:prose-invert prose-neutral space-y-0 mb-6">
        <FadeUp>
          <h1 className="mb-4 mt-0 truncate text-center">00:59</h1>
        </FadeUp>
        <FadeUp delay={1}>
          <h3 className="mt-0 truncate text-center">
            The activation code <br />
            is sent to your
            {user?.loginWay
              ? user?.loginWay === "email"
                ? " email"
                : " Phone number"
              : " -"}
            <br />
            Enter it here.
          </h3>
        </FadeUp>
        <FadeUp>OTP Group</FadeUp>
      </div>
    </>
  );
}
