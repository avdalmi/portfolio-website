export const getDesignTokens = (mode: string) => ({
  ...(mode === "light"
    ? {
        palette: {
          primary: {
            main: "#1c1c1c",
          },
          divider: "#1c1c1c",
          background: {
            default: "#e6e6e6",
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
          h2: {
            fontFamily: "Quicksand",
            fontSize: "1.7rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
          },
          h3: {
            fontFamily: "Quicksand",
            fontSize: "0.9rem",
            fontWeight: 500,
          },
          h4: {
            fontFamily: "Quicksand",
            fontSize: "1.3rem",
            fontWeight: 600,
          },
          h5: {
            fontFamily: "Quicksand",
            fontSize: "0.9rem",
            fontWeight: 600,
            lineHeight: 1.75,
          },
          h6: {
            fontFamily: "Quicksand",
            fontSize: "0.9rem",
            fontWeight: 400,
          },
          subtitle1: {
            fontSize: "0.9rem",
            fontWeight: 300,
            fontFamily: "Nunito Sans",
          },
        },
        breakpoints: {
          values: {
            xs: 450,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
        components: {},
      }
    : {
        palette: {
          primary: {
            main: "#fff",
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
          h2: {
            fontFamily: "Quicksand",
            fontSize: "1.7rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
          },
          h3: {
            fontFamily: "Quicksand",
            fontSize: "0.9rem",
            fontWeight: 500,
          },
          h4: {
            fontFamily: "Quicksand",
            fontSize: "1.3rem",
            fontWeight: 600,
          },
          h5: {
            fontFamily: "Quicksand",
            fontSize: "0.9rem",
            fontWeight: 600,
            lineHeight: 1.75,
          },
          h6: {
            fontFamily: "Quicksand",
            fontSize: "0.9rem",
            fontWeight: 400,
          },
          subtitle1: {
            fontSize: "0.9rem",
            fontWeight: 300,
            fontFamily: "Nunito Sans",
          },
        },
        breakpoints: {
          values: {
            xs: 450,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
        components: {},
      }),
});
