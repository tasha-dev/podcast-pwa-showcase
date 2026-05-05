// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import Button from "@/component/ui/button";
import { useContext } from "react";
import { HomePageStepContext } from "@/lib/context";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { InfoForm as formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { sleep } from "@/lib/util";
import { UserLocalStorage } from "@/type/localStorage";
import useLocalStorageState from "use-local-storage-state";
import Link from "next/link";
import ImageInput from "../imageInput";
import FadeUp from "../animation/fadeUp";
import Input from "../ui/input";

// Defining form type
type formType = z.infer<typeof formSchema>;

// Creating and exporting Info mini page as deafult
export default function Info() {
  // Defining hooks
  const homePageStep = useContext(HomePageStepContext);
  const [user, setUser] = useLocalStorageState<UserLocalStorage>("user");
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: user?.image,
      dateOfBirth: user?.dateOfBirth,
      fullName: user?.fullName,
      password: user?.password,
    },
  });

  // Handling submit event
  const submitHandler: SubmitHandler<formType> = async (data) => {
    await sleep(3000);
    setUser((prev) => {
      return {
        ...prev,
      };
    });

    homePageStep?.setStep("code");
  };

  // Returning JSX
  return (
    <>
      <Button asChild>
        <Link href="/home">Leave for now</Link>
      </Button>
      <div className="prose dark:prose-invert prose-neutral max-w-full mb-6">
        <FadeUp>
          <h1 className="mt-2 truncate">Your account information</h1>
        </FadeUp>
        <form
          action="#"
          autoComplete="off"
          onSubmit={form.handleSubmit(submitHandler)}
          className="space-y-8"
        >
          <FadeUp delay={1}>
            <ImageInput
              onValueChange={(value) => form.setValue("image", value)}
              value={form.getValues("image")}
              className="mx-auto"
            />
          </FadeUp>
          <FadeUp delay={2}>
            <Input
              type="text"
              onChange={(e) => form.setValue("fullName", e.target.value)}
              defaultValue={form.getValues("fullName")}
              errorMessage={form.formState.errors.fullName?.message}
              label={{
                id: "fullName",
                title: "Your full name",
              }}
            />
          </FadeUp>
          <FadeUp delay={3}>
            <Input
              type="password"
              onChange={(e) => form.setValue("password", e.target.value)}
              defaultValue={form.getValues("password")}
              errorMessage={form.formState.errors.password?.message}
              label={{
                id: "password",
                title: "Password",
              }}
            />
          </FadeUp>
          <FadeUp delay={4}>
            <Input
              onChange={(e) => form.setValue("dateOfBirth", e.target.value)}
              defaultValue={form.getValues("dateOfBirth")}
              errorMessage={form.formState.errors.dateOfBirth?.message}
              type="date"
              label={{
                id: "dateOfBirth",
                title: "Your date of birth",
              }}
            />
            <Button
              type="submit"
              loading={form.formState.isSubmitting}
              className="mt-4"
            >
              Submit
            </Button>
          </FadeUp>
        </form>
      </div>
    </>
  );
}
