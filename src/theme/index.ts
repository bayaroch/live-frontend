import { createTheme } from '@mui/material/styles'
import { Colors } from '@theme/colors'
import { breakpointValues } from '@theme/variables'

export const userBreakpoints = breakpointValues

const font =
  "'Averta CY', 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"

const $titlefamily =
  "'Averta CY', 'Open Sans', 'Helvetica Neue', 'Helvetica','Arial', sans-serif"

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    error: {
      main: Colors.primary,
    },
    background: {
      default: Colors.background,
      paper: Colors.light,
    },
    text: {
      primary: Colors.text[400],
    },
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: Colors.white,
          borderRadius: '2px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: Colors.light,
          color: Colors.text[300],
          border: `1px solid ${Colors.dark}`,
          fontSize: 14,
          padding: '4px 8px',
        },
      },
    },
  },
  breakpoints: {
    values: breakpointValues,
  },
  typography: {
    fontFamily: font,
    h1: {
      fontSize: 34,
      fontWeight: 600,
      marginTop: 14,
      marginBottom: 14,
      fontFamily: $titlefamily,
      color: Colors.white,
    }, // lets all big titles
    h2: {
      fontSize: 26,
      marginTop: 10,
      marginBottom: 10,
      fontWeight: 600,
      fontFamily: $titlefamily,
      color: Colors.white,
    },
    h3: {
      fontSize: 22,
      fontFamily: $titlefamily,
      fontWeight: 600,
      color: Colors.text[100],
      marginTop: 8,
      marginBottom: 8,
    },
    h4: {
      fontSize: 18,
      fontFamily: $titlefamily,
      fontWeight: 600,
      color: Colors.text[200],
      marginTop: 5,
      marginBottom: 5,
    },
    h5: {
      fontSize: 16,
      fontFamily: $titlefamily,
      fontWeight: 600,
      color: Colors.text[300],
      marginBottom: 3,
    },
    h6: {
      fontSize: 11,
      fontFamily: $titlefamily,
      fontWeight: 600,
      lineHeight: 1.3,
      color: Colors.text[300],
      textTransform: 'uppercase',
      marginTop: 3,
      marginBottom: 3,
    },
    body1: {
      fontSize: 15,
      fontWeight: 400,
    },
    body2: {
      fontSize: 13,
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
    },
    overline: {
      fontSize: 10,
    },
  },
})
