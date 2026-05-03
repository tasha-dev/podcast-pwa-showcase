// Codes by mahdi tasha
// Importing part
import FadeUp from "@/component/animation/fadeUp";
import Input from "@/component/ui/input";
import ThemeToggler from "@/component/ui/themeToggler";

// Creating and Exporting home page as default
export default function HomePage() {
  // Returning JSX
  return (
    <>
      <div className="prose dark:prose-invert prose-neutral space-y-0">
        <FadeUp className="mb-3">
          <ThemeToggler />
          <h1 className="mb-0 truncate">Welcome 👋</h1>
        </FadeUp>
        <FadeUp className="mb-3" delay={1}>
          <h3 className="mt-0 truncate">
            Lets create your <br />
            <span className="font-bold">account</span> !
          </h3>
        </FadeUp>
        <FadeUp delay={2}>
          <Input
            placeholder="HI"
            type="text"
            left={{
              type: "text",
              text: "+98",
            }}
            label={{
              id: "NAME",
              title: "Name",
            }}
          />
        </FadeUp>
      </div>
    </>
  );
}
