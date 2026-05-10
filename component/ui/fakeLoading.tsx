// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { sleep } from "@/lib/util";
import { FakeLoadingProps } from "@/type/component";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

// Creating and exporting FakeLoading component as default
// This component uses sleep() function and takes some time to show the children
export default function FakeLoading({
   time = 3000,
   children,
}: FakeLoadingProps) {
   // Defining hooks
   const [loading, setLoading] = useState<boolean>(true);

   // Using useEffect to set the loading state
   useEffect(() => {
      async function asyncSleep() {
         await sleep(time);
         setLoading(false);
      }

      asyncSleep();

      return () => setLoading(false);
   }, [loading, time]);

   // Conditional rendering
   if (loading) {
      return (
         <Loader2 className="size-8 animate-spin text-base absolute left-1/2 top-1/2 -translate-1/2" />
      );
   } else return children;
}
