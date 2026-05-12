// Codes by mahdi tasha
// Importing part
import { MDXProps } from "mdx/types";
import { ReactNode } from "react";

// Creating and exporting General purpos typeso
export interface Article {
   author: {
      name: string;
      image?: string;
   };
   id: string;
   createdAt: string; // ISO
   description: string;
   title: string;
   label?: string[];
   content: (props: MDXProps) => ReactNode;
}
