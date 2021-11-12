import { createTheme } from '@mui/material/styles';

var dayTheme = createTheme({
    palette: {
        primary: { 
            light: '#FFD29D',
            main: '#FFB563',
            dark: '#F85E00'
        },
        secondary: { 
            main: '#A41623',
        },
        // error: { 
        //     light: '',
        //     main: '',
        //     dark: ''
        // },
        // warning: { 
        //     light: '',
        //     main: '',
        //     dark: ''
        // },
        // info: { 
        //     light: '',
        //     main: '',
        //     dark: ''
        // },
        // success: { 
        //     light: '',
        //     main: '',
        //     dark: ''
        // }

    },
    typography: {
        title: { 
            color: '#A41623', 
            fontSize:  '4rem',
            textAlign: 'center',
            letterSpacing: '0.4rem'
        },
        body: { color: `#373F51` },
        subtitle: {
            color: '#A41623',
            fontSize: '1.2rem'
        }, 
        subbody: {
            fontSize: '0.8rem',
            textAlign: 'justify'
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