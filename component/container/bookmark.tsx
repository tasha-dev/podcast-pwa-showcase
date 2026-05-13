// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import Layout from "../layout";
import Image from "next/image";
import LanyardImage from "@/public/image/lanyard.png";
import articles from "@/data/articles";
import Article from "../article";
import { cn } from "@/lib/util";
import { UserBookmakred } from "@/type/localStorage";
import useLocalStorageState from "use-local-storage-state";

// Creating and Exporting Bookmark page container
export default function BookmarkContainer() {
   // Defining hooks
   const [userBookmarkedItems] =
      useLocalStorageState<UserBookmakred>("userBookmarked");

   // Defining variables
   const userBookmarks = userBookmarkedItems ? [...userBookmarkedItems] : [];
   const articlesToRender = articles.filter((item) =>
      userBookmarks.includes(item.id),
   );

   // Returning JSX
   return (
      <Layout className="relative z-0">
         <Image
            width={500}
            height={500}
            alt="Lanyard Image"
            src={LanyardImage.src}
            className="absolute right-0 top-0 -z-10 w-auto h-auto -translate-y-10 translate-x-14"
         />
         <div className="relative z-10">
            <div className="prose dark:prose-invert prose-neutral max-w-full mb-4">
               <h1 className="my-0">Bookmarked Articles</h1>
            </div>
            <div>
               {articlesToRender.map((item, index) => (
                  <Article
                     data={item}
                     key={index}
                     hasReaction={false}
                     className={cn(
                        "shadow-[0_0_30px] shadow-black/10",
                        index !== 0 && "-mt-10",
                     )}
                  />
               ))}
            </div>
         </div>
      </Layout>
   );
}
