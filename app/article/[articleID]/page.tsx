// Codes by mahdi tasha
// Importing part
import ArticleContainer from "@/component/container/article";
import type { Metadata } from "next";

// Defining metadata of this page
export const metadata: Metadata = {
   title: "Article",
};

// Creating and exporting Article page as default
export default function ArticlePage() {
   // Returning JSX
   return <ArticleContainer />;
}
