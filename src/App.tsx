import {
  Box,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Radio,
  RadioGroup,
  ThemeProvider,
} from "@mui/material";
import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { ThemeRadioChecked, ThemeRadio } from "./styles/theme/radioButton";
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
      <Box
        style={{
          display: "flex",
          alignItems: "flex-end",
        }}
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
            defaultValue="light"
          >
            <FormControlLabel
              value="light"
              label="light"
              sx={{
                fontFamily: "'Quicksand', sans-serif",
                ml: "40px",
              }}
              control={
                <Radio
                  // disableRipple
                  // color="default"
                  checkedIcon={<ThemeRadioChecked />}
                  icon={<ThemeRadio />}
                  onChange={colorMode.toggleColorMode}
                />
              }
            />
            <FormControlLabel
              value="dark"
              label="dark"
              sx={{
                fontFamily: "'Quicksand', sans-serif",
              }}
              control={
                <Radio
                  // disableRipple
                  // color="default"
                  checkedIcon={<ThemeRadioChecked />}
                  icon={<ThemeRadio />}
                  onChange={colorMode.toggleColorMode}
                />
              }
            />
          </RadioGroup>
        </Box>
        <Box
          sx={{
            // backgroundColor: "pink",
            height: "calc(100vh - 60px)",
            border: "3px solid black",
            margin: "30px 30px 30px 0",
            width: "calc(100vw - 60px)",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
