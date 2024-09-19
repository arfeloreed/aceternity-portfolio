import { ThemeProvider } from "./components/ThemeProvider";
import { FloatingNav } from "./components/ui/FloatingNav";

import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Projects from "./components/Projects";
import Clients from "./components/Clients";

import { navItems } from "./variables";

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
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Clients />
      </main>
    </ThemeProvider>
  );
};

export default App;
