// Codes by mahdi tasha
// Importing part
import ShopContainer from "@/component/container/shop";
import type { Metadata } from "next";

// Defining metadata of this page
export const metadata: Metadata = {
   title: "Shop",
};

// Creating and exporting Shop page as default
export default function ShopPage() {
   // Returning JSX
   return <ShopContainer />;
}
