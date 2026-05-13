// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { cn, getRandomLovelyColor, sleep } from "@/lib/util";
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
   data: { author, description, createdAt, id, title, label },
   hasReaction = true,
   className,
}: ArticleProps) {
   // Defining hooks
   const [color] = useState(getRandomLovelyColor());
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
            style={{
               color,
            }}
            className={cn(
               "p-4 rounded-2xl block transition-all duration-500 shadow-xl shadow-black/20 relative",
               "active:scale-95 ring-0 focus-visible:ring-4 outline-0 bg-current ring-current/40",
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
                     <div className="size-10 rounded-full bg-base shrink-0" />
                  )}
                  <div className="overflow-hidden flex-1">
                     <span className="text-left font-bold text-white block truncate flex-1 text-sm mb-1">
                        {title}
                     </span>
                     <span className="text-left font-light text-white block truncate flex-1 text-xs">
                        {author.name}
                     </span>
                  </div>
               </div>
               <span className="text-right font-light text-white block shrink-0 text-xs">
                  {moment(createdAt).fromNow()}
               </span>
            </div>
            <div
               className={cn(
                  "prose max-w-full",
                  label && label.length !== 0
                     ? "mb-3"
                     : hasReaction
                       ? "mb-8"
                       : "mb-0",
               )}
            >
               <p className="my-0 text-white">{description}</p>
            </div>
            {label && label.length !== 0 && (
               <div
                  className={cn(
                     "flex items-center justify-start gap-3 flex-wrap",
                     hasReaction && "mb-8",
                  )}
               >
                  {label.map((item, index) => (
                     <div
                        key={index}
                        className="text-white bg-current/20 rounded-[45rem] h-8 px-3 flex items-center justify-center border border-current"
                     >
                        <span className="text-center block text-current font-medium text-xs">
                           {item}
                        </span>
                     </div>
                  ))}
               </div>
            )}
         </Link>
         {hasReaction && (
            <div
               className={cn(
                  "flex items-center rounded-[45rem] dark:bg-neutral-800 bg-white absolute top-full left-4 -translate-y-1/2 p-1",
                  "shadow-xl shadow-black/20 max-w-[calc(100%-32px)] w-fit relative transition-all duration-500 ring-0 ring-neutral-800/40 dark:ring-white/40 focus-within:ring-4 outline-0",
                  reactionsLoading ? "overflow-hidden" : "overflow-auto",
               )}
            >
               <AnimatePresence mode="wait">
                  {reactionsLoading && (
                     <motion.div
                        className="dark:bg-neutral-200/20 bg-neutral-800/20 backdrop-blur-xl absolute left-0 top-0 w-full h-full"
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
                        <Loader2 className="size-4 animate-spin absolute left-1/2 top-1/2 -translate-1/2" />
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
                        "data-[active=false]:bg-transparent data-[active=true]:bg-base outline-0",
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
