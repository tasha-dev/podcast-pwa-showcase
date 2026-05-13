// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import { cn } from "@/lib/util";
import {
   Bookmark,
   House,
   MessageCircle,
   Podcast,
   Search,
   ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// Defining data of navbar
const navbarData: {
   icon: ReactNode;
   href: string;
   disabled?: boolean;
}[] = [
   {
      href: "/search",
      icon: <Search className="size-7" />,
      disabled: true,
   },
   {
      href: "/podcast",
      icon: <Podcast className="size-7" />,
   },
   {
      href: "/home",
      icon: <House className="size-7" />,
   },
   {
      href: "/shop",
      icon: <ShoppingBag className="size-7" />,
   },
   {
      href: "/bookmark",
      icon: <Bookmark className="size-7" />,
   },
];

// Creating and exporting Navbar component as deafult
export default function Navbar() {
   // Defining hooks
   const pathname = usePathname();

   // Returning JSX
   return (
      <nav
         className={cn(
            "fixed bottom-0 left-0 bg-linear-to-t from-base toto-base/10 w-full h-1/3 pointer-events-none px-8 pb-4",
            "flex items-end justify-center gap-5 text-white z-40",
         )}
      >
         {navbarData.map((item, index) => (
            <Link
               href={item.href}
               key={index}
               data-active={pathname === item.href}
               aria-disabled={item.disabled ?? false}
               tabIndex={item.disabled ? -1 : 0}
               className={cn(
                  "size-13 flex items-center justify-center pointer-events-auto rounded-full relative z-10 outline-0 transition-all duration-500 ring-0 ring-black/10",
                  "dark:data-[active=true]:bg-blue-400 data-[active=true]:bg-base data-[active=false]:bg-transparent focus-visible:ring-4",
                  "active:scale-95 aria-disabled:text-current/20 aria-disabled:pointer-events-none",
               )}
            >
               {item.icon}
            </Link>
         ))}
      </nav>
   );
}
