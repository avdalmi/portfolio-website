import {
  createTheme,
  CssBaseline,
  FormControlLabel,
  Radio,
  RadioGroup,
  ThemeProvider,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { Routes, Route, Form } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BpCheckedIcon, BpIcon } from "./styles/theme/radioButton";
import { getDesignTokens } from "./styles/theme/theme";

function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <RadioGroup row defaultValue="light">
        <FormControlLabel
          value="light"
          label="light"
          control={
            <Radio
              disableRipple
              color="default"
              checkedIcon={<BpCheckedIcon />}
              icon={<BpIcon />}
              onChange={colorMode.toggleColorMode}
            />
          }
        />
        <FormControlLabel
          value="dark"
          label="dark"
          control={
            <Radio
              disableRipple
              color="default"
              checkedIcon={<BpCheckedIcon />}
              icon={<BpIcon />}
              onChange={colorMode.toggleColorMode}
            />
          }
        />
      </RadioGroup>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
