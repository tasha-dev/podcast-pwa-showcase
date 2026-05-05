// Codes by mahdi tasha
// Importing part
import FadeUp from "@/component/animation/fadeUp";
import Button from "@/component/ui/button";
import ThemeToggler from "@/component/ui/themeToggler";
import Link from "next/link";

// Creating and Exporting Not Found page as default
export default function NotFoundPage() {
  // Returning JSX
  return (
    <>
      <div className="prose dark:prose-invert prose-neutral space-y-0">
        <FadeUp className="mb-4">
          <ThemeToggler />
          <h1 className="mb-0 mt-2 truncate">Not Found 💔</h1>
        </FadeUp>
        <FadeUp className="mb-6" delay={1}>
          <h3 className="mt-0 truncate">
            Sadly, <br /> The page you are looking for <br /> is not{" "}
            <span className="font-bold">Found</span> !
          </h3>
        </FadeUp>
      </div>
      <FadeUp delay={2}>
        <Button asChild>
          <Link href="/">Head home</Link>
        </Button>
      </FadeUp>
    </>
  );
}
