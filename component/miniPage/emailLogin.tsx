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
import { emailLogin as formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { sleep } from "@/lib/util";
import { UserLocalStorage } from "@/type/localStorage";
import useLocalStorageState from "use-local-storage-state";

// Defining form type
type formType = z.infer<typeof formSchema>;

// Creating and exporting EmailLogin mini page as deafult
export default function EmailLogin() {
  // Defining hooks
  const homePageStep = useContext(HomePageStepContext);
  const [_, setUser] = useLocalStorageState<UserLocalStorage>("user");
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  // Handling submit event
  const submitHandler: SubmitHandler<formType> = async (data) => {
    await sleep(3000);
    setUser({
      loginWay: "email",
      email: data.email,
    });

    homePageStep?.setStep("code");
    toast.success("You are logged in now.");
  };

  // Returning JSX
  return (
    <>
      <ThemeToggler />
      <div className="prose dark:prose-invert prose-neutral space-y-0 mb-6">
        <h1 className="mb-4 mt-2 truncate">Welcome 👋</h1>
        <h3 className="mt-0 truncate">
          Lets create your <br />
          <span className="font-bold">account</span> !
        </h3>
      </div>
      <FadeUp delay={1}>
        <form action="#" onSubmit={form.handleSubmit(submitHandler)}>
          <Input
            placeholder="Email"
            type="email"
            className="mb-6"
            errorMessage={form.formState.errors.email?.message}
            {...form.register("email")}
          />
          <div className="flex gap-1.5 flex-wrap">
            <Button loading={form.formState.isSubmitting} type="submit">
              Lets Go
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => homePageStep?.setStep("phone")}
              disabled={form.formState.isSubmitting}
            >
              Back
            </Button>
          </div>
        </form>
      </FadeUp>
    </>
  );
}
