// Codes by mahdi tasha
// Importing part
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Defining configs of next.js
const nextConfig: NextConfig = {
   pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

// Defining configs of mdx
const withMDX = createMDX({});

// Exporting the configs as default
export default withMDX(nextConfig);
