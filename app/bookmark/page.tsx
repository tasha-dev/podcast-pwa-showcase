// Codes by mahdi tasha
// Importing part
import BookmarkContainer from "@/component/container/bookmark";
import type { Metadata } from "next";

// Defining metadata of this page
export const metadata: Metadata = {
   title: "Bookmark",
};

// Creating and exporting Bookmark page as default
export default function BookmarkPage() {
   // Returning JSX
   return <BookmarkContainer />;
}
