// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import { LayoutProps } from "@/type/component";
import AuthProvider from "./authProvider";
import Header from "./header";
import Navbar from "./navbar";

// Creating and exporting Layout component as deafult
export default function Layout({
   children,
   className,
   headerButton,
}: LayoutProps) {
   // Returning JSX
   return (
      <AuthProvider>
         <div className={className}>
            <Header className="mb-5" button={headerButton} />
            <main className={"mb-20"}>{children}</main>
            <Navbar />
         </div>
      </AuthProvider>
   );
}
