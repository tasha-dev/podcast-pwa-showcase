// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { cn } from "@/lib/util";
import { ArticleProps } from "@/type/component";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

// Defining the reactions
const reactions = ["😂", "🤯", "💔", "❤️"];

// Creating and exporting Article component as deafult
export default function Article({
   data: { author, description, href, content, createdAt },
   className,
}: ArticleProps) {
   // Returning JSX
   return (
      <div className="relative">
         <Link
            href={href}
            className={cn(
               "bg-indigo-600 p-4 rounded-xl text-white block transition-all duration-500 shadow-xl shadow-black/20 relative",
               "active:scale-95 ring-0 ring-indigo-600/40 focus-visible:ring-4 outline-0",
               className,
            )}
         >
            <div className="flex items-center justify-between gap-3 mb-3">
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
            <div className="prose max-w-full mb-8">
               <p className="my-0 text-white">{description}</p>
            </div>
         </Link>
         <div
            className={cn(
               "flex items-center rounded-[45rem] dark:bg-neutral-800 bg-white absolute top-full left-4 -translate-y-1/2",
               "shadow-xl shadow-black/20 px-1 max-w-[calc(100%-32px)] overflow-auto",
            )}
         >
            {reactions.map((item, index) => (
               <button
                  type="button"
                  className="flex items-center justify-center cursor-pointer size-9 text-lg shrink-0 transition-all duration-500 active:scale-90"
                  key={index}
               >
                  {item}
               </button>
            ))}
         </div>
      </div>
   );
}
