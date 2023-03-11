import { deepOrange, grey } from "@mui/material/colors";

export const getDesignTokens = (mode: string) => ({
  mode,
  ...(mode === "light"
    ? {
        palette: {
          primary: {
            main: "#1c1c1c",
            light: "#f13e98",
            dark: "#2f6d51",
            contrastText: "#de1e1e",
          },
          divider: "#1c1c1c",
          background: {
            default: "#e6e6e6",
            paper: deepOrange[900],
          },
          text: {
            primary: "#1c1c1c",
            secondary: "#333333",
          },
        },
        components: {
          MuiInputBase: {
            styleOverrides: {
              input: {
                color: "#fff",
                "&::before": {
                  borderBottom: "1px solid #eb9486",
                },
              },
            },
          },
        },
      }
    : {
        palette: {
          primary: {
            main: "#fff",
            light: "#f13e98",
            dark: "#2f6d51",
            contrastText: "#de1e1e",
          },
          // secondary: {
          //   main: "#eb9486",
          // },
          divider: "#fff",
          background: {
            paper: "#646869",
            default: "#1c1c1c",
          },
          warning: {
            main: "#e3d081",
          },
          error: {
            main: "#eb9486",
          },
          text: {
            primary: "#fff",
            secondary: "b6b6b6",
          },
        },
      }),
});
