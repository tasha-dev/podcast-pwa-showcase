// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

import { cn } from "@/lib/util";
// Importing part
import { ArticleProps } from "@/type/component";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

// Creating and exporting Article component as deafult
export default function Article({
   data: { author, description, href, content, createdAt },
   className,
}: ArticleProps) {
   // Returning JSX
   return (
      <Link
         href={href}
         className={cn(
            "bg-indigo-600 p-4 rounded-xl text-white block",
            className,
         )}
      >
         <div className="flex items-center justify-between gap-3">
            <div className="flex items-center justify-start gap-3 flex-1">
               {author.image ? (
                  <Image
                     className="size-10 rounded-full shrink-0 object-cover"
                     width={100}
                     height={100}
                     alt={author.name}
                     src={author.image}
                  />
               ) : (
                  <div className="size-10 rounded-full bg-amber-500 shrink-0" />
               )}
               <span className="text-left font-medium text-current block truncate flex-1 text-sm">
                  {author.name}
               </span>
            </div>
            <span className="text-right font-light text-current block shrink-0 text-xs">
               {moment(createdAt).fromNow()}
            </span>
         </div>
      </Link>
   );
}
