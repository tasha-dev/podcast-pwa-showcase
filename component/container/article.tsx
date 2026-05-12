// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import Layout from "../layout";

// Creating and Exporting Article page container
export default function ArticleContainer() {
   // Returning JSX
   return (
      <Layout>
         <div className="prose dark:prose-invert prose-neutral max-w-full mb-4">
            <h1 className="mt-0 mb-1">HI PEOPLE</h1>
            <p>DONT KNOW</p>
         </div>
      </Layout>
   );
}
