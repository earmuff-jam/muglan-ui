import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./utils/Theme.js";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>
);
