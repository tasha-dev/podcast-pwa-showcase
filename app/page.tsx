// Codes by mahdi tasha
// Importing part
import ThemeToggler from "@/component/ui/themeToggler";

// Creating and Exporting home page as default
export default function HomePage() {
  // Returning JSX
  return (
    <>
      <ThemeToggler />
      <div className="prose dark:prose-invert prose-neutral">
        <h1>Welcome 👋</h1>
        <h3>Lets create your account !</h3>
      </div>
    </>
  );
}
