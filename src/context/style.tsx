import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  direction: 'rtl', 
});

function StyleProvider({ children }: { children: React.ReactNode } ) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}
export default StyleProvider;