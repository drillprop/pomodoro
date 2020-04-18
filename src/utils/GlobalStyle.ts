import { createGlobalStyle } from 'styled-components';
import { background, grays } from './colors';
import { primFont } from './fonts';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:700,900|Poppins:400,600&display=swap');
html {
  overflow-y: scroll;
}
body {
  background: ${background};
  color: ${grays[0]};
  font-family:${primFont};
  margin:0;
  padding:0;
}
li {
  list-style: none;
}
a {
  text-decoration:none;
}
`;

export default GlobalStyle;
