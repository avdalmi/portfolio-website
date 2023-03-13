import { createTheme, PaletteMode } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useMemo } from "react";

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
        typography: {
          h1: {
            fontFamily: "Quicksand",
            fontSize: "3rem",
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: "0.05em",
            padding: "1rem",
          },
        },
        components: {
          MuiFormControlLabel: {
            styleOverrides: {
              root: {
                fontFamily: "Quicksand",
                fontSize: "4rem",
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: "0.05em",
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
          divider: "#fff",
          background: {
            default: "#1c1c1c",
            paper: "#646869",
          },
          text: {
            primary: "#fff",
            secondary: "b6b6b6",
          },
        },
        typography: {
          h1: {
            fontFamily: "Quicksand",
            fontSize: "3rem",
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: "0.05em",
            padding: "1rem",
          },
        },
        components: {
          MuiFormControlLabel: {
            styleOverrides: {
              root: {
                fontFamily: "Quicksand",
                fontSize: "4rem",
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: "0.05em",
              },
            },
          },
        },
      }),
});

// export const getDesignTokens = (mode: string) => ({
//   mode,
//   ...(mode === "light"
//     ? {
//         palette: {
//           primary: {
//             main: "#1c1c1c",
//             light: "#f13e98",
//             dark: "#2f6d51",
//             contrastText: "#de1e1e",
//           },
//           divider: "#1c1c1c",
//           background: {
//             default: "#e6e6e6",
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: "#1c1c1c",
//             secondary: "#333333",
//           },
//         },
//         typography: {
//           h1: {
//             fontFamily: "Quicksand",
//             fontSize: "4rem",
//             fontWeight: 300,
//             lineHeight: 1.15,
//             letterSpacing: "0.05em",
//           },
//         },
//         components: {
//           MuiInputBase: {
//             styleOverrides: {
//               // input: {
//               //   color: "#fff",
//               //   "&::before": {
//               //     borderBottom: "1px solid #eb9486",
//               //   },
//               // },
//             },
//           },
//           MuiFormControlLabel: {
//             styleOverrides: {
//               root: {
//                 fontFamily: "Quicksand",
//                 fontSize: "4rem",
//                 fontWeight: 300,
//                 lineHeight: 1.15,
//                 letterSpacing: "0.05em",
//               },
//             },
//           },
//         },
//       }
//     : {
//         palette: {
//           primary: {
//             main: "#fff",
//             light: "#f13e98",
//             dark: "#2f6d51",
//             contrastText: "#de1e1e",
//           },
//           // secondary: {
//           //   main: "#eb9486",
//           // },
//           divider: "#fff",
//           background: {
//             paper: "#646869",
//             default: "#1c1c1c",
//           },
//           warning: {
//             main: "#e3d081",
//           },
//           error: {
//             main: "#eb9486",
//           },
//           text: {
//             primary: "#fff",
//             secondary: "b6b6b6",
//           },
//         },
//       }),
// });
