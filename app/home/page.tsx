// Codes by mahdi tasha
// Importing part
import HomeContainer from "@/component/container/home";
import type { Metadata } from "next";

// Defining metadata of this page
export const metadata: Metadata = {
   title: "Home",
};

// Creating and exporting Home page as default
export default function HomePage() {
   // Returning JSX
   return <HomeContainer />;
}
