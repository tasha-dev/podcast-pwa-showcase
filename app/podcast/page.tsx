// Codes by mahdi tasha
// Importing part
import PodcastContainer from "@/component/container/podcast";
import type { Metadata } from "next";

// Defining metadata of this page
export const metadata: Metadata = {
   title: "Podcast",
};

// Creating and exporting Podcast page as default
export default function PodcastPage() {
   // Returning JSX
   return <PodcastContainer />;
}
