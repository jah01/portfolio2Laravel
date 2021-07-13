import { createGlobalStyle } from 'styled-components';

//purple
const GlobalStyle0 = createGlobalStyle`
* {
    --bg: #EDF1FF;
    --text: #7C849F;
    --border: #D6DBEC;
    --text-dark: #646A80;
  }
`;

//orange
const GlobalStyle1 = createGlobalStyle`
* {
    --bg: #FFFAED;
    --text: #E08049;
    --border: #F9E2CC;
    --text-dark: #B54C00;
  }
`;

//green
const GlobalStyle2 = createGlobalStyle`
* {
    --bg: #EEFFED;
    --text: #7BA782;
    --border: #D7EDD8;
    --text-dark: #5B7D62;
  }
`;

//red
const GlobalStyle3 = createGlobalStyle`
* {
    --bg: #FFEDED;
    --text: #D06868;
    --border: #F6D2D2;
    --text-dark: #A84B4B;
  }
`;

//teal
const GlobalStyle4 = createGlobalStyle`
* {
    --bg: #EDFEFF;
    --text: #78A6A3;
    --border: #D6ECED;
    --text-dark: #4C8780;
  }
`;

//tan and blue
const GlobalStyle5 = createGlobalStyle`
* {
    --bg: #FFF7E4;
    --text: #D09879;
    --border: #F6E4CF;
    --text-dark: #30479A;
  }
`;

var colors = [GlobalStyle0, GlobalStyle1, GlobalStyle2, GlobalStyle3, GlobalStyle4, GlobalStyle5];
var GlobalStyle = colors[Math.floor(Math.random() * colors.length)];

export default GlobalStyle;
