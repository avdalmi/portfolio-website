import { CssBaseline, FormControlLabel, Radio } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useMemo, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import {
  MainBox,
  AppBox,
  ThemeRadio,
  ThemeRadioChecked,
  getDesignTokens,
} from "./GlobalStyles";
import {
  ThemeRadioCont,
  ThemeRadioGroup,
} from "./GlobalStyles/theme/radioButton";

import {
  AboutPage,
  ProjectPage,
  CvPage,
  ContactPage,
  SideBar,
  HomePage,
  ProjectCardPage,
  SkillsPage,
} from "./pages/index";

function App() {
  const [mode, setMode] = React.useState<string>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (e: string) => {
        window.localStorage.setItem("theme", e);
        setMode(e);
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    if (typeof window !== "undefined")
      setMode(window.localStorage.getItem("theme") || "light");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBox>
        <ThemeRadioCont>
          <ThemeRadioGroup row>
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
          </ThemeRadioGroup>
        </ThemeRadioCont>

        <MainBox>
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/projects/:id" element={<ProjectCardPage />} />
            <Route path="/cv" element={<CvPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/skills/" element={<SkillsPage />} />
          </Routes>
        </MainBox>
      </AppBox>
    </ThemeProvider>
  );
}

export default App;
