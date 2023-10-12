import { PaletteColor, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    violet: PaletteColor;
    black: PaletteColor;
    purple: PaletteColor;
    white: PaletteColor;
    gray: PaletteColor;
  }
  
  interface PaletteOptions {
    violet?: PaletteColorOptions;
    black?: PaletteColorOptions;
    purple?: PaletteColorOptions;
    white?: PaletteColorOptions;
    gray?: PaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    violet: true;
    black: true;
    purple: true;
    white: true;
    gray: true;
  }
}
