// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        body: "'DM Sans', system-ui, Avenir, Helvetica, Arial, sans-serif",
    },
    colors: {
        white: '#FFFFFF',
        primary: '#3791fd',
    },
    styles: {
        global: (props) => ({
            body: {
                margin: 0,
                padding: 0,
                backgroundImage: "url('../img/bg.webp')",
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#303030',
                fontFamily: props.theme.fonts.body,
            },
        }),
    },
});

export default theme;
