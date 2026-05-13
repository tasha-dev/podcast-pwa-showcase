// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import { toast } from "sonner";
import Layout from "../layout";
import Button from "../ui/button";
import Image from "next/image";
import StoreImage from "@/public/image/store.png";

// Creating and Exporting Shop page container
export default function ShopContainer() {
   // Returning JSX
   return (
      <Layout className="relative h-dvh z-0">
         <Image
            width={600}
            height={600}
            alt="Store"
            src={StoreImage.src}
            className="absolute bottom-0 left-0 w-1/2 h-auto -z-10 scale-140"
         />
         <div className="prose dark:prose-invert prose-neutral max-w-full mb-4">
            <h1 className="mt-0 mb-1">Shop ?</h1>
            <p>
               Record, Share, Comment <br /> Start just now !
            </p>
            <div className="flex flex-wrap gap-3">
               <Button
                  onClick={() => toast("Bro calm down its just a placeholder.")}
               >
                  Monthly Subscription ($2)
               </Button>
               <Button
                  onClick={() => toast("Bro calm down its just a placeholder.")}
                  variant="white"
               >
                  <span className="block truncate text-center">
                     Yearly Subscription ($20)
                  </span>
               </Button>
            </div>
         </div>
      </Layout>
   );
}
