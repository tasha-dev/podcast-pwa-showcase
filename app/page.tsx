// Codes by mahdi tasha
// Importing part
import FadeUp from "@/component/animation/fadeUp";
import Button from "@/component/ui/button";
import Input from "@/component/ui/input";
import ThemeToggler from "@/component/ui/themeToggler";

// Creating and Exporting home page as default
export default function HomePage() {
  // Returning JSX
  return (
    <>
      <div className="prose dark:prose-invert prose-neutral space-y-0">
        <FadeUp className="mb-4">
          <ThemeToggler />
          <h1 className="mb-0 mt-2 truncate">Welcome 👋</h1>
        </FadeUp>
        <FadeUp className="mb-6" delay={1}>
          <h3 className="mt-0 truncate">
            Lets create your <br />
            <span className="font-bold">account</span> !
          </h3>
        </FadeUp>
        <FadeUp delay={2}>
          <form action="#">
            <Input
              placeholder="Phone"
              type="tel"
              className="mb-6"
              left={{
                type: "text",
                text: "+98",
              }}
            />
            <Button type="submit" className="block mx-auto mb-2 min-w-1/2">
              Lets Go
            </Button>
            <Button
              type="button"
              className="block mx-auto mb-2 min-w-1/2"
              variant="secondary"
            >
              Got Email ?
            </Button>
          </form>
        </FadeUp>
      </div>
    </>
  );
}
