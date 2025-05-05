import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
      light: '#9effea',
      dark: '#14b893',
      contrastText: '#0a192f',
    },
    secondary: {
      main: '#112240',
      light: '#1d3a66',
      dark: '#0a192f',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#e6f1ff',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: '3.5rem',
      letterSpacing: '-0.01562em',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.75rem',
      letterSpacing: '-0.00833em',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.2rem',
      letterSpacing: '0em',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.75rem',
      letterSpacing: '0.00735em',
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
      letterSpacing: '0em',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      letterSpacing: '0.0075em',
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.7,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.65,
      letterSpacing: '0.01071em',
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'none',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
          scrollPaddingTop: '80px',
        },
        body: {
          maxWidth: '100vw',
          overflowX: 'hidden',
        },
        a: {
          textDecoration: 'none',
          color: '#64ffda',
          transition: 'all 0.25s ease-in-out',
          '&:hover': {
            color: '#9effea',
          },
        },
        img: {
          maxWidth: '100%',
          display: 'block',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (min-width: 1200px)': {
            maxWidth: '1140px',
          },
        },
      },
      defaultProps: {
        maxWidth: 'lg',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          padding: '10px 22px',
          fontSize: '0.95rem',
          fontWeight: 500,
          boxShadow: 'none',
          textTransform: 'none',
          letterSpacing: '0.5px',
          transition: 'all 0.3s ease-in-out',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.1)',
            opacity: 0,
            transition: 'all 0.3s ease-in-out',
          },
          '&:hover::after': {
            opacity: 1,
          },
          '&:hover': {
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: '#64ffda',
          color: '#64ffda',
          '&:hover': {
            borderWidth: '2px',
            borderColor: '#64ffda',
            backgroundColor: 'rgba(100, 255, 218, 0.1)',
          },
        },
        contained: {
          backgroundColor: '#64ffda',
          color: '#0a192f',
          '&:hover': {
            backgroundColor: '#9effea',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(17, 34, 64, 0.8)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(17, 34, 64, 0.9)',
          backgroundImage: 'none',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(100, 255, 218, 0.2)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(100, 255, 218, 0.1)',
          color: '#64ffda',
          fontWeight: 500,
          borderRadius: '6px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#112240',
          color: '#e6f1ff',
          fontSize: '0.85rem',
          borderRadius: '6px',
          border: '1px solid rgba(100, 255, 218, 0.3)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#64ffda',
          textDecoration: 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            color: '#9effea',
          },
        },
      },
    },
  },
});

export default theme; 