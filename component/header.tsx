// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import { HeaderProps } from "@/type/component";
import Button from "@/component/ui/button";
import { Bell } from "lucide-react";
import Tooltip from "./ui/tooltip";
import ThemeToggler from "./ui/themeToggler";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import { UserLocalStorage } from "@/type/localStorage";
import { cn } from "@/lib/util";
import Image from "next/image";

// Creating and exporting header component as default
export default function Header({ className }: HeaderProps) {
   // Defining hooks
   const [user] = useLocalStorageState<UserLocalStorage>("user");

   // Returning JSX
   return (
      <header
         className={cn(
            "flex items-center gap-3",
            user && user.image ? "justify-between" : "justify-end",
            className,
         )}
      >
         {user && user.image && (
            <Link
               href="/"
               className={cn(
                  "size-18 inline-block relative rounded-lg overflow-hidden transition-all duration-500 active:scale-95 shadow-lg shadow-black/20 outline-0 bg-base",
                  "ring-0 focus-visible:ring-4 ring-base/40",
               )}
            >
               <Image
                  className="absolute w-full h-full object-cover left-0 top-0"
                  alt={user.fullName || "User Name"}
                  src={user.image}
                  width={300}
                  height={300}
               />
            </Link>
         )}
         <div className="flex items-center justify-between gap-3">
            <ThemeToggler side="right" />
            <Tooltip side="right" triggerAsChild content="Notifications">
               <Button size="icon" variant="outline">
                  <Bell className="size-4" />
               </Button>
            </Tooltip>
         </div>
      </header>
   );
}
