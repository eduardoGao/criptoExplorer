import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

export const theme = {
  color: {
    primary: '#eb40b7',
    secondary: '#a562fd',
    dark: '#56306a',
    dark2: '#3c2449',
    light: '#d1dbe6',
    gradient: 'linear-gradient(100deg, #2b1b41 1%, #3c2449 100%)',
  },
};

export default GlobalStyle;
