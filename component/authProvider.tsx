// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { AuthProviderProps } from "@/type/component";
import { UserLocalStorage } from "@/type/localStorage";
import useLocalStorageState from "use-local-storage-state";
import FakeLoading from "./ui/fakeLoading";
import FadeUp from "./animation/fadeUp";
import ThemeToggler from "./ui/themeToggler";
import Button from "./ui/button";
import Link from "next/link";

// Creating and exporting AuthProvider component as default
export default function AuthProvider({ children }: AuthProviderProps) {
   // Defining hooks
   const [user] = useLocalStorageState<UserLocalStorage>("user");

   // Returning JSX
   return (
      <FakeLoading time={5000}>
         {user?.code ? (
            children
         ) : (
            <>
               <div className="prose dark:prose-invert prose-neutral space-y-0">
                  <FadeUp className="mb-4">
                     <ThemeToggler />
                     <h1 className="mb-0 mt-2 truncate">Please login first</h1>
                  </FadeUp>
                  <FadeUp className="mb-6" delay={1}>
                     <h3 className="mt-0 truncate">
                        Sadly, <br /> You cant use this app without logging in .
                     </h3>
                  </FadeUp>
               </div>
               <FadeUp
                  delay={2}
                  className="flex items-center justify-start gap-3 flex-wrap"
               >
                  <Button asChild>
                     <Link href="/">Login</Link>
                  </Button>
               </FadeUp>
            </>
         )}
      </FakeLoading>
   );
}
