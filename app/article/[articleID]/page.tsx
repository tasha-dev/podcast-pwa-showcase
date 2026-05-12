// Codes by mahdi tasha
// Forcing next.js to render this component as clisnt side component
"use client";

// Importing part
import Layout from "@/component/layout";
import articles from "@/data/articles";
import { ArticlePageProps } from "@/type/page";
import { notFound } from "next/navigation";
import { use } from "react";

// Creating and exporting Article page as default
export default function ArticlePage({ params }: ArticlePageProps) {
   // Defining hooks
   const { articleID } = use(params);

   // Defining variables
   const foundedArticle = articles.find((item) => item.id === articleID);

   // Conditional rendering
   if (!foundedArticle) {
      notFound();
   } else {
      return (
         <Layout>
            <div className="prose dark:prose-invert prose-neutral max-w-full mb-4">
               {foundedArticle.content({})}
            </div>
         </Layout>
      );
   }
}
