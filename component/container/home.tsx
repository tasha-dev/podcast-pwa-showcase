// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

import Article from "../article";
// Importing part
import Layout from "../layout";

// Creating and Exporting Home page container (contains all content of home page)
// This method prevents the page to render by client side but the contents.
export default function HomeContainer() {
   // Returning JSX
   return (
      <Layout>
         <div className="prose dark:prose-invert prose-neutral max-w-full mb-4">
            <h1 className="mt-0 mb-1">Whats up ?</h1>
            <p>
               Lots of fun podcast and posts have been added in the meantime you
               were gone.
            </p>
         </div>
         <Article
            className="w-full"
            data={{
               author: {
                  name: "Mahdi Tasha",
               },
               createdAt: new Date().toISOString(),
               content: "HI",
               description: "HIHIHIHI",
               href: "/hi",
            }}
         />
      </Layout>
   );
}
