import {
  Box,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Radio,
  RadioGroup,
  ThemeProvider,
} from "@mui/material";
import { useMemo, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  MainCont,
  ThemeRadio,
  ThemeRadioChecked,
  getDesignTokens,
} from "./styles";
import HomePage from "./pages/HomePage";

function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (e: any) => {
        setMode(e.target.value);
        window.localStorage.setItem("theme", e.target.value);
      },
    }),
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined")
      setMode(window.localStorage.getItem("theme") || "light");
  }, []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainCont
      // style={{
      //   display: "flex",
      //   alignItems: "flex-end",
      //   // backgroundColor: "pink",
      //   transition: "all 1.9s ease",
      // }}
      >
        <Box
          sx={{
            transform: "rotate(-90deg)",
            width: "30px",
          }}
        >
          <RadioGroup
            sx={{
              width: "200px",
            }}
            row
          >
            <FormControlLabel
              value="light"
              label="light"
              sx={{
                ml: "40px",
              }}
              checked={mode === "light" ? true : false}
              control={
                <Radio
                  disableRipple
                  checkedIcon={<ThemeRadioChecked />}
                  icon={<ThemeRadio />}
                  onChange={(e) => {
                    colorMode.toggleColorMode(e);
                  }}
                />
              }
            />
            <FormControlLabel
              value="dark"
              label="dark"
              checked={mode === "dark" ? true : false}
              control={
                <Radio
                  disableRipple
                  checkedIcon={<ThemeRadioChecked />}
                  icon={<ThemeRadio />}
                  onChange={(e) => {
                    colorMode.toggleColorMode(e);
                  }}
                />
              }
            />
          </RadioGroup>
        </Box>
        <Box
          sx={{
            // backgroundColor: "pink",
            height: "calc(100vh - 60px)",
            border: `1px solid ${theme.palette.divider}`,
            margin: "30px 30px 30px 0",
            width: "calc(100vw - 60px)",
            transition: "all 1.9s ease",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Box>
      </MainCont>
    </ThemeProvider>
  );
}

export default App;
