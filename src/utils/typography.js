import Typography from "typography"

import judahTheme from "typography-theme-judah"

judahTheme.googleFonts = [
    {
        name: 'Roboto',
        styles: ['400'],
    },
    {
      name: 'Oswald',
      styles: ['300', '400', '500', '&subset=cyrillic'],
    },

],
judahTheme.headerFontFamily = ['Oswald', 'sans-serif'];
judahTheme.bodyFontFamily = ['Roboto', 'sans-serif'];

const typography = new Typography(judahTheme);

export default typography
