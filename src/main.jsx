import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <Theme accentColor="iris">
        <App />
      </Theme>
    </NextUIProvider>
  </StrictMode>
);
