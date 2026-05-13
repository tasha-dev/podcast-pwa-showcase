// Codes by mahdi tasha
// Forcing next.js to render this component as clisnt side component
"use client";

// Importing part
import Layout from "@/component/layout";
import Button from "@/component/ui/button";
import Tooltip from "@/component/ui/tooltip";
import articles from "@/data/articles";
import { UserBookmakred } from "@/type/localStorage";
import { ArticlePageProps } from "@/type/page";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { use } from "react";
import useLocalStorageState from "use-local-storage-state";

// Creating and exporting Article page as default
export default function ArticlePage({ params }: ArticlePageProps) {
   // Defining hooks
   const { articleID } = use(params);
   const [userBookmarkedItems, setUserBookmarks] =
      useLocalStorageState<UserBookmakred>("userBookmarked");

   // Defining variables
   const foundedArticle = articles.find((item) => item.id === articleID);
   const userBookmarks = userBookmarkedItems ? [...userBookmarkedItems] : [];
   const articleBookmarked = !!userBookmarks.find((item) => item === articleID);

   // Conditional rendering
   if (!foundedArticle) {
      notFound();
   } else {
      return (
         <Layout
            className="relative"
            headerButton={
               <Tooltip
                  side="right"
                  triggerAsChild
                  content={
                     articleBookmarked
                        ? "Article is bookmarked"
                        : "Bookmark the article"
                  }
               >
                  <Button
                     size="icon"
                     onClick={() => {
                        if (articleBookmarked) {
                           const arrayToSet = userBookmarks.filter(
                              (item) => item !== articleID,
                           );

                           setUserBookmarks(arrayToSet);
                        } else setUserBookmarks([...userBookmarks, articleID]);
                     }}
                  >
                     {articleBookmarked ? (
                        <BookmarkCheck className="size-4" />
                     ) : (
                        <Bookmark className="size-4" />
                     )}
                  </Button>
               </Tooltip>
            }
         >
            <div className="prose dark:prose-invert prose-neutral max-w-full mb-4 prose-img:rounded-xl prose-img:w-full prose-img:aspect-video prose-img:object-cover">
               {foundedArticle.content({})}
            </div>
         </Layout>
      );
   }
}
