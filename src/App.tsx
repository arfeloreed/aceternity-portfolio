import { ThemeProvider } from "./components/ThemeProvider";
import Hero from "./components/Hero";

const App = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <main
        className="relative mx-auto flex flex-col items-center justify-center overflow-hidden
          bg-black-100 px-5 sm:px-10"
      >
        <Hero />
      </main>
    </ThemeProvider>
  );
};

export default App;
