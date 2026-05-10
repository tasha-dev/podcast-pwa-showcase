// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import { RootLayoutProps } from "@/type/component";
import AuthProvider from "./authProvider";
import Header from "./header";
import Navbar from "./navbar";

// Creating and exporting Layout component as deafult
export default function Layout({ children }: RootLayoutProps) {
   // Returning JSX
   return (
      <AuthProvider>
         <Header className="mb-5" />
         {children}
         <Navbar />
      </AuthProvider>
   );
}
