import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { MainCont, ThemeRadio, ThemeRadioChecked } from "../styles";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function Toggle() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
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
          checked={theme.palette.mode === "light" ? true : false}
          control={
            <Radio
              disableRipple
              checkedIcon={<ThemeRadioChecked />}
              icon={<ThemeRadio />}
              // onChange={(e) => {
              //   colorMode.toggleColorMode(e);
              // }}
              onClick={colorMode.toggleColorMode}
            />
          }
        />
        <FormControlLabel
          value="dark"
          label="dark"
          checked={theme.palette.mode === "dark" ? true : false}
          control={
            <Radio
              disableRipple
              checkedIcon={<ThemeRadioChecked />}
              icon={<ThemeRadio />}
              // onChange={(e) => {
              // colorMode.toggleColorMode(e);
              // }}
              onChange={colorMode.toggleColorMode}
            />
          }
        />
      </RadioGroup>
    </Box>
  );
}

export default Toggle;
