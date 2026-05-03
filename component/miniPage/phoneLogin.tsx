// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import FadeUp from "@/component/animation/fadeUp";
import Button from "@/component/ui/button";
import Input from "@/component/ui/input";
import ThemeToggler from "../ui/themeToggler";
import { useContext } from "react";
import { HomePageStepContext } from "@/lib/context";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { phoneNumberLogin as formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { sleep } from "@/lib/util";
import useUserStore from "@/lib/store";

// Defining form type
type formType = z.infer<typeof formSchema>;

// Creating and exporting PhoneLogin mini page as deafult
export default function PhoneLogin() {
  // Defining hooks
  const homePageStep = useContext(HomePageStepContext);
  const userStore = useUserStore();
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  // Handling submit event
  const submitHandler: SubmitHandler<formType> = async (data) => {
    await sleep(3000);
    toast.success("You are logged in now.");
    console.log(userStore, data.phoneNumber);
  };

  // Returning JSX
  return (
    <>
      <div className="prose dark:prose-invert prose-neutral space-y-0">
        <FadeUp className="mb-4">
          <ThemeToggler />
          <h1 className="mb-0 mt-2 truncate">Welcome 👋</h1>
        </FadeUp>
        <FadeUp className="mb-6" delay={1}>
          <h3 className="mt-0 truncate">
            Lets create your <br />
            <span className="font-bold">account</span> !
          </h3>
        </FadeUp>
      </div>
      <FadeUp delay={2}>
        <form action="#" onSubmit={form.handleSubmit(submitHandler)}>
          <Input
            placeholder="Phone"
            type="tel"
            className="mb-6"
            left={{
              type: "text",
              text: "+98",
            }}
            errorMessage={form.formState.errors.phoneNumber?.message}
            {...form.register("phoneNumber")}
          />
          <div className="flex gap-1.5 flex-wrap">
            <Button loading={form.formState.isSubmitting} type="submit">
              Lets Go
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => homePageStep?.setStep("email")}
              disabled={form.formState.isSubmitting}
            >
              Got Email ?
            </Button>
          </div>
        </form>
      </FadeUp>
    </>
  );
}
