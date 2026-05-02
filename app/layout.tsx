// Codes by mahdi tasha
// Importing part
import { cn } from "@/lib/util";
import { RootLayoutProps } from "@/type/component";
import localFont from "next/font/local";
import "@/app/style.css";
import type { Metadata } from "next";

// Defining metadata
export const metadata: Metadata = {
  title: {
    template: "%s | Podcast",
    default: "Podcast PWA Showcase | Mahdi Tasha",
  },
  description:
    "A small podcast pwa app which showcases my (Mahdi Tasha) skills in style and animation.",
  keywords: ["Podcast", "Music", "Next", "Code", "Front End", "React"],
  authors: [{ name: "Mahdi Tasha", url: "https://github.com/tasha-dev/" }],
  creator: "Mahdi Tasha",
  publisher: "Mahdi Tasha",
};

// Defining fonts
// Note: Our access to google fonts is gone. we have to use loca fonts now.
// import { Inter } from "next/font/google";
// const interFont = Inter({
//   display: "swap",
//   style: "normal",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
// });

const interFont = localFont({
  src: [
    {
      path: "../public/font/inter/Inter_18pt-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/font/inter/Inter_18pt-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/font/inter/Inter_18pt-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/font/inter/Inter_18pt-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/font/inter/Inter_18pt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/inter/Inter_18pt-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/font/inter/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/inter/Inter_18pt-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/inter/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/inter/Inter_18pt-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/font/inter/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/inter/Inter_18pt-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/font/inter/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/inter/Inter_18pt-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/font/inter/Inter_18pt-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/font/inter/Inter_18pt-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },

    {
      path: "../public/font/inter/Inter_18pt-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/font/inter/Inter_18pt-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
});

// Creating and exporting RootLayout component as default
export default function RootLayout({ children }: RootLayoutProps) {
  // Returning JSX
  return (
    <html suppressHydrationWarning lang="en">
      <body className={cn("bg-base overflow-x-hidden", interFont.className)}>
        <div className="max-w-lg px-4 py-8 mx-auto bg-white">{children}</div>
      </body>
    </html>
  );
}
