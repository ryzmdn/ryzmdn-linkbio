import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { SmoothScroll } from "./components/smooth-scroll.tsx";
import Home from "./page.tsx";
import "@/assets/css/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SmoothScroll>
        <Home />
      </SmoothScroll>
    </ThemeProvider>
  </StrictMode>,
);
