import { createTheme } from '@mui/material/styles';

const main_font = 'Gila-Bold';
const main_color = '#F79313';
const secondary_color = '#FFFFFF';


const DefaultTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 500,
            md: 1000,
            lg: 1500,
            xl: 2000
        }
    },
    shadows: ["none"],
    palette: {
        primary: {
            main: main_color,
        },
        secondary: {
            main: secondary_color,
            backgroundColor: secondary_color,
        } 
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        textTransform: 'none',
        borderRadius: '30px',
        color: '#111',
        
        gradient: {
            color: secondary_color,   
            background: 'linear-gradient(to right, #FF8100ff, #FFB900ff, #FFB100ff, #FF9100ff)',
            backgroundSize: '300%',
            transition: 'all .4s ease-in-out',
            '&:hover': {
                backgroundPosition: '100% 0',
                boxShadow: '0 0 10px 0 rgba(229, 66, 10, 0.75)', 
            }
        },
        default: {
            color: main_color,    
            background: secondary_color,
            '&:hover': {
                boxShadow: '0 0 10px 0 rgba(229, 66, 10, 0.75)', 
            }
        },
    },
    typography: {
        bold: {
            
            primary: {
                color: main_color,
                fontFamily: main_font,
            },
            secondary: {
                color: secondary_color,
                fontFamily: main_font,
            },
            tertiary: {
                color: '#000000',
                fontFamily: main_font,
            }
        },
        default: {
            primary: {
                color: main_color,
            },
            secondary: {
                color: secondary_color,
            }
        }
    },
    textField: {
        '& fieldset': {
            borderRadius: '30px',
        },
    },
    link: {
        textDecoration: 'none',
        padding: 5,
        color: main_color,
    }


});

export default DefaultTheme;