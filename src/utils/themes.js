import { createTheme } from '@mui/material/styles';

var dayTheme = createTheme({
    palette: {
        primary: { 
            light: '#e3f2fd',
            main: '#FFB563',
            dark: '#F85E00'
        },
        secondary: { 
            main: '#A41623',
        },
    },
    typography: {
        title: { 
            color: '#A41623', 
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
            color: '#A41623',
            fontWeight: '600 !important',
            fontSize: '1.2rem !important',
            letterSpacing: '0.4rem !important'
        }, 
        subbody: {
            fontSize: '0.8rem',
            textAlign: 'justify',
        },
        subinfo: {
            color: '#A41623',
            fontSize: '0.8rem',
            textAlign: 'justify',
            fontWeight: 500,
        }
    },
});

var nightTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

export { dayTheme, nightTheme };