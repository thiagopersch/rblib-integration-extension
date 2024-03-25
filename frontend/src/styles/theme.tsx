"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    common: {
      black: "#1A1A1A",
    },
    primary: {
      main: "#0DA6A6",
      light: "#3DD5D6",
      dark: "#004747",
    },
    secondary: {
      main: "#FF0031",
      light: "#FF335A",
      dark: "#B20022",
    },
  },
});

export default theme;
