import { createGlobalStyle } from 'styled-components';
import { background, primary } from './colors';
import { primFont } from './fonts';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:700,900|Poppins:400,600&display=swap');
body {
  background: ${background};
  color: ${primary};
  font-family:${primFont};
  margin:0;
  padding:0;
}
`;

export default GlobalStyle;
