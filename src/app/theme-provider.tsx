import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

type ThemeProviderPageProps = {
  children: React.ReactNode;
};

export default function ThemeProviderPage({
  children,
}: ThemeProviderPageProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <CssBaseline />
      <GlobalStyles />
    </ThemeProvider>
  );
}
