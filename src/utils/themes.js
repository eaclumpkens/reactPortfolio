import { createTheme } from '@mui/material/styles';

var dayTheme = createTheme({
    palette: {
        primary: { 
            light: '#f0ead2',
            main: '#975E21',
            dark: '#432A0F'
        },
        secondary: { 
            light: '#a3b18a',
            main: '#588157',
            dark: '#3a5a40'
        },
        tertiary: { 
            light: '#D7474C',
            main: '#ae2012',
            dark: '#9b2226'
        },
    },
    typography: {
        title: { 
            color: '#d19c1d', 
            marginBottom: '1rem !important',
            fontSize:  '3.5rem !important',
            textAlign: 'center !important',
            letterSpacing: '0.5rem !important',
            fontWeight: '200 !important'
        },
        body: { 
            color: `#6f4518`,
            maxWidth: '30rem',
            minWidth: '15rem'
        },
        subtitle: {
            color: '#d19c1d',
            fontWeight: '600 !important',
            fontSize: '1.2rem !important',
            letterSpacing: '0.4rem !important'
        }, 
        subbody: {
            color: '#432A0F',
            fontSize: '0.75rem !important',
            textAlign: 'justify',
        },
        subinfo: {
            color: '#432A0F',
            fontSize: '0.8rem !important',
            textAlign: 'justify',
            fontWeight: '600 !important',
            letterSpacing: '0.1rem !important'
        }
    },
});

var nightTheme = createTheme({
    palette: {
        mode: 'dark'
    },
    typography: {
        title: { 
            marginBottom: '1rem !important',
            fontSize:  '3.5rem !important',
            textAlign: 'center !important',
            letterSpacing: '0.5rem !important',
            fontWeight: '200 !important'
        },
        body: { 
            color: `#373F51`,
            maxWidth: '30rem',
            minWidth: '15rem'
        },
        subtitle: {
            fontWeight: '600 !important',
            fontSize: '1.2rem !important',
            letterSpacing: '0.4rem !important'
        }, 
        subbody: {
            fontSize: '0.8rem',
            textAlign: 'justify',
        },
        subinfo: {
            fontSize: '0.8rem',
            textAlign: 'justify',
            fontWeight: 500,
        }
    },
});

export { dayTheme, nightTheme };