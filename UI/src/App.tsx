import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import MainRoutes from './routes';

import theme from '@services/theme';
import './App.css'

function App() {

  return (
    <ThemeProvider theme={{...theme}}>
    <CssBaseline />
    <main >
      <MainRoutes />
    </main>
  </ThemeProvider>
  )
}

export default App
