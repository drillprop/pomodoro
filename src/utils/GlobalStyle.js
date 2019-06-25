import { createGlobalStyle } from 'styled-components';
import { background, primary } from './colors';

const GlobalStyle = createGlobalStyle`
body {
  background: ${background};
  color: ${primary}
}
`;

export default GlobalStyle;
