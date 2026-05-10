// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import FadeUp from "@/component/animation/fadeUp";
import { useContext, useState } from "react";
import { HomePageStepContext } from "@/lib/context";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { OTPLogin as formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { getFormattedTime, sleep } from "@/lib/util";
import { UserLocalStorage } from "@/type/localStorage";
import useLocalStorageState from "use-local-storage-state";
import OTP from "../ui/otp";
import Button from "../ui/button";
import useTimer from "@/hook/useTimer";
import { ArrowLeft } from "lucide-react";

// Defining form type
type formType = z.infer<typeof formSchema>;

// Creating and exporting Code mini page as deafult
export default function Code() {
   // Defining hooks
   const homePageStep = useContext(HomePageStepContext);
   const timer = useTimer(60000);
   const [user, setUser] = useLocalStorageState<UserLocalStorage>("user");
   const [resending, setResending] = useState<boolean>(false);
   const form = useForm<formType>({
      resolver: zodResolver(formSchema),
   });

   // Handling submit event
   const submitHandler: SubmitHandler<formType> = async (data) => {
      await sleep(3000);

      setUser({
         ...user,
         code: data.code,
      });

      homePageStep?.setStep("info");
      toast.success("Welcome 👋. Your now logged in to the podcast app.");
   };

   // Returning JSX
   return (
      <>
         {user?.loginWay && (
            <Button
               disabled={form.formState.isSubmitting || resending}
               size="icon"
               onClick={() =>
                  user.loginWay === "phone"
                     ? homePageStep?.setStep("phone")
                     : homePageStep?.setStep("email")
               }
            >
               <ArrowLeft className="size-4" />
            </Button>
         )}
         <div className="prose dark:prose-invert prose-neutral mb-6 max-w-full">
            <FadeUp>
               <h1 className="mb-4 mt-0 truncate text-center">
                  {getFormattedTime(timer.time)}
               </h1>
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
         </div>
         <FadeUp delay={2}>
            <form action="#" onSubmit={form.handleSubmit(submitHandler)}>
               <OTP
                  lenght={4}
                  errorMessage={form.formState.errors.code?.message}
                  onValueChange={(value) => form.setValue("code", value)}
                  className="mb-8"
               />
               <div className="flex gap-1.5 flex-wrap items-center justify-center">
                  <Button
                     loading={form.formState.isSubmitting}
                     type="submit"
                     disabled={resending}
                  >
                     Submit
                  </Button>
                  {user?.loginWay && (
                     <Button
                        type="button"
                        variant="secondary"
                        disabled={
                           form.formState.isSubmitting || timer.time !== 0
                        }
                        loading={resending}
                        onClick={async () => {
                           setResending(true);
                           await sleep(3000);

                           setResending(false);
                           timer.reset();
                           toast.success("Another code has been sent.");
                        }}
                     >
                        Resend
                     </Button>
                  )}
               </div>
            </form>
         </FadeUp>
      </>
   );
}
