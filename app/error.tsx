// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { ErrorPageProps } from "@/type/page";
import Link from "next/link";
import FadeUp from "@/component/animation/fadeUp";
import Button from "@/component/ui/button";
import ThemeToggler from "@/component/ui/themeToggler";

// Creating and exporting Error page as deafult
export default function ErrorPage({ error, reset }: ErrorPageProps) {
   // Returning JSX
   return (
      <>
         <div className="prose dark:prose-invert prose-neutral space-y-0">
            <FadeUp className="mb-4">
               <ThemeToggler />
               <h1 className="mb-0 mt-2 truncate text-red-500">Error : 500</h1>
            </FadeUp>
            <FadeUp className="mb-6" delay={1}>
               <h3 className="mt-0 truncate">
                  Sadly, <br /> There was an error in the page or the proccess.
               </h3>
               <pre>
                  <p>{JSON.stringify(error.message)}</p>
               </pre>
            </FadeUp>
         </div>
         <FadeUp
            delay={2}
            className="flex items-center justify-start gap-3 flex-wrap"
         >
            <Button asChild>
               <Link href="/">Head home</Link>
            </Button>
            <Button variant="secondary" onClick={reset}>
               Retry
            </Button>
         </FadeUp>
      </>
   );
}
