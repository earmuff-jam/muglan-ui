import { useMemo } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "../src/utils/Theme";
import { RouterProvider } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";

const THEMES = {
  lightTheme: lightTheme,
  darkTheme: darkTheme,
};

export const decorators = [
  (story, context) => {
    const { theme: themeKey } = context.globals;
    const theme = useMemo(
      () => THEMES[themeKey] || THEMES["lightTheme"],
      [themeKey]
    );
    return (
      <Box sx={{ padding: "2rem" }}>
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {story()}
          </ThemeProvider>
        </MemoryRouter>
      </Box>
    );
  },
];

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "theme",
    description: "theme selection",
    toolbar: {
      icon: "paintbrush",
      title: "Select a theme",
      dynamicTitle: true,
      items: [
        { value: "lightTheme", title: "lightTheme" },
        { value: "darkTheme", title: "darkTheme" },
      ],
    },
  },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};

export default preview;
