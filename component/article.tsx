// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { cn, sleep } from "@/lib/util";
import { ArticleProps } from "@/type/component";
import { UserReactionsLocalStorage } from "@/type/localStorage";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

// Defining the reactions
const reactions = ["😂", "🤯", "💔", "❤️"];

// Creating and exporting Article component as deafult
export default function Article({
   data: { author, description, createdAt, id },
   hasReaction = true,
   className,
}: ArticleProps) {
   // Defining hooks
   const [reactionsLoading, setReactionsLoading] = useState<boolean>(false);
   const [userReactionsState, setReactionsLike] =
      useLocalStorageState<UserReactionsLocalStorage>("userReactions");

   // Defining variables
   const userReactions = !userReactionsState ? [] : [...userReactionsState];
   const reactionUser = userReactions.find((item) => item.id === id)?.reaction;

   // Defining a function to handle onClick of reaction buttons
   async function onClickHandler(reaction: string) {
      let arrayToSet: UserReactionsLocalStorage;

      if (!reactionUser) {
         arrayToSet = [
            ...userReactions,
            {
               id,
               reaction,
            },
         ];
      } else {
         if (reaction === reactionUser) {
            arrayToSet = userReactions.filter((item) => item.id !== id);
         } else {
            arrayToSet = userReactions.map((item) => {
               return {
                  ...item,
                  reaction,
               };
            });
         }
      }

      setReactionsLoading(true);
      await sleep(1000);

      setReactionsLike(arrayToSet);
      setReactionsLoading(false);
   }

   // Returning JSX
   return (
      <div className="relative">
         <Link
            href={`/article/${id}`}
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
         {hasReaction && (
            <div
               className={cn(
                  "flex items-center rounded-[45rem] dark:bg-neutral-800 bg-white absolute top-full left-4 -translate-y-1/2 p-1",
                  "shadow-xl shadow-black/20 max-w-[calc(100%-32px)] w-fit relative",
                  reactionsLoading ? "overflow-hidden" : "overflow-auto",
               )}
            >
               <AnimatePresence mode="wait">
                  {reactionsLoading && (
                     <motion.div
                        className="dark:bg-neutral-200/20 bg-neutral-800/20 backdrop-blur-xl absolute left-0 top-0 w-full h-full flex items-center justify-center"
                        initial={{
                           opacity: 0,
                        }}
                        exit={{
                           opacity: 0,
                        }}
                        animate={{
                           opacity: 1,
                        }}
                        transition={{
                           duration: 0.2,
                           ease: "easeInOut",
                        }}
                     >
                        <Loader2 className="size-4 animate-spin" />
                     </motion.div>
                  )}
               </AnimatePresence>
               {reactions.map((item, index) => (
                  <button
                     type="button"
                     disabled={reactionsLoading}
                     data-active={reactionUser === item}
                     key={index}
                     onClick={() => onClickHandler(item)}
                     className={cn(
                        "flex items-center justify-center cursor-pointer size-9 text-lg shrink-0 transition-all duration-500 active:scale-90 rounded-full",
                        "data-[active=false]:bg-transparent data-[active=true]:bg-base",
                     )}
                  >
                     {item}
                  </button>
               ))}
            </div>
         )}
      </div>
   );
}
