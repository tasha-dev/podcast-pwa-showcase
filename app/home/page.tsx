// Codes by mahdi tasha
// Importing part
import AuthProvider from "@/component/authProvider";
import type { Metadata } from "next";

// Defining metadata of this page
export const metadata: Metadata = {
   title: "Home Page",
};

// Creating and exporting Home page as default
export default function HomePage() {
   // Returning JSX
   return (
      <AuthProvider>
         <h1>Hi People</h1>
      </AuthProvider>
   );
}
