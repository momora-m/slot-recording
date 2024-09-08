import './App.css'
import router from './route/router'
import { createTheme, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router-dom';

function App() {
  const designTheme = createTheme({
    palette: {
      primary: {
        main: "#FF0000"
      },
      secondary: {
        main: "#008000"
      },
    }
  });

  return (
    <ThemeProvider theme={designTheme}>
      <CssBaseline/>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
