import { CssBaseline, FormControlLabel, Radio } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  MainBox,
  AppBox,
  ThemeRadio,
  ThemeRadioChecked,
  getDesignTokens,
} from "./GlobalStyles";
import {
  ThemeRadioBox,
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

import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [mode, setMode] = useLocalStorage("theme", "light");

  const toggleColorMode = (e: string) => {
    setMode(e);
  };

  const theme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={theme}>
      <AppBox>
        <ThemeRadioBox>
          <ThemeRadioGroup
            row
            onChange={(e) => {
              toggleColorMode(e.target.value);
            }}
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
                />
              }
            />
          </ThemeRadioGroup>
        </ThemeRadioBox>

        <MainBox>
          <CssBaseline />
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
