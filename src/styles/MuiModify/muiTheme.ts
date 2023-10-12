import { createTheme, alpha, getContrastRatio } from "@mui/material";

const colorLevels = (colorBaseValue: string) => {
  const main = alpha(colorBaseValue, 0.7);
  const light = alpha(colorBaseValue, 0.5);
  const dark = alpha(colorBaseValue, 0.9);
  const contrastText = getContrastRatio(main, "#fff") > 4.5 ? "#fff" : "#111";

  return { main, light, dark, contrastText };
};

export const muiTheme = createTheme({
  palette: {
    violet: colorLevels("#5955B3"),
    black: colorLevels("#323230"),
    purple: colorLevels("#E07EA1"),
    white: colorLevels("#fff"),
    gray: colorLevels("#A4A5AA"),
  },
});
