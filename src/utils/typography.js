import Typography from "typography"

import parnassusTheme from "typography-theme-parnassus"

parnassusTheme.googleFonts = [
    {
        name: 'Roboto',
        styles: ['400'],
    },
    {
      name: 'Oswald',
      styles: ['300', '400', '500', '&subset=cyrillic'],
    },

],
parnassusTheme.headerFontFamily = ['Oswald', 'sans-serif'];
parnassusTheme.bodyFontFamily = ['-apple-system', 'system-ui', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Droid Sans', 'Helvetica Neue', 'Arial', 'sans-serif'];

const typography = new Typography(parnassusTheme);

export default typography
