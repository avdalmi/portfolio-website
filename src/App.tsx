import {
  Box,
  CssBaseline,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useMemo, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  MainCont,
  ThemeRadio,
  ThemeRadioChecked,
  getDesignTokens,
} from "./styles";
import HomePage from "./pages/HomePage";
import { SectionCont } from "./styles/container/container";

function App() {
  const [mode, setMode] = React.useState<string>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (e: string) => {
        setMode(e);
        window.localStorage.setItem("theme", e);
      },
    }),
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined")
      setMode(window.localStorage.getItem("theme") || "light");
  }, []);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainCont>
        <Box
          sx={{
            transform: "rotate(-90deg)",
            width: "30px",
          }}
        >
          <RadioGroup sx={{ width: "200px" }} row>
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
                    colorMode.toggleColorMode(e.target.value);
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
                    colorMode.toggleColorMode(e.target.value);
                  }}
                />
              }
            />
          </RadioGroup>
        </Box>
        <SectionCont>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </SectionCont>
      </MainCont>
    </ThemeProvider>
  );
}

export default App;
