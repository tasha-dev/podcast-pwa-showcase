// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import Button from "@/component/ui/button";
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
import { toast } from "sonner";
import DatePicker from "../ui/datePicker";
import { useRouter } from "next/navigation";
import ThemeToggler from "../ui/themeToggler";

// Defining form type
type formType = z.infer<typeof formSchema>;

// Creating and exporting Info mini page as deafult
export default function Info() {
  // Defining hooks
  const [user, setUser] = useLocalStorageState<UserLocalStorage>("user");
  const router = useRouter();
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: user,
  });

  // Handling submit event
  const submitHandler: SubmitHandler<formType> = async (data) => {
    await sleep(3000);

    setUser({
      ...user,
      image: data.image,
      fullName: data.fullName,
      dateOfBirth: data.dateOfBirth,
      password: data.password,
    });

    toast.success("Your information is saved locally.");
    router.push("/home");
  };

  // Returning JSX
  return (
    <>
      <div className="flex items-center justify-start gap-3 flex-wrap">
        <Button asChild>
          <Link href="/home">Leave for now</Link>
        </Button>
        <ThemeToggler />
      </div>
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
              errorMessage={form.formState.errors.image?.message}
              onValueChange={(value) => form.setValue("image", value)}
              value={form.getValues("image")}
              className="mx-auto"
            />
          </FadeUp>
          <FadeUp delay={2}>
            <Input
              type="text"
              errorMessage={form.formState.errors.fullName?.message}
              defaultValue={user?.fullName}
              label={{
                id: "fullName",
                title: "Your full name",
              }}
              {...form.register("fullName")}
            />
          </FadeUp>
          <FadeUp delay={3}>
            <Input
              type="password"
              defaultValue={user?.password}
              errorMessage={form.formState.errors.password?.message}
              label={{
                id: "password",
                title: "Password",
              }}
              {...form.register("password")}
            />
          </FadeUp>
          <FadeUp delay={4}>
            <DatePicker
              value={form.getValues("dateOfBirth")}
              onValueChange={(value) => form.setValue("dateOfBirth", value)}
              errorMessage={form.formState.errors.dateOfBirth?.message}
              label="Your date of birth"
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
