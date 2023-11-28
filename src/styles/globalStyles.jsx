import { createGlobalStyle } from "styled-components";

const colorMappings = {
  lilac: '#DFC4ED',
  yellow: '#FFEBA4',
  default: '#DFC4ED',
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&family=Work+Sans:wght@500&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    color: #343e46;
    background: ${(props) => colorMappings[props.backgroundColor] || colorMappings.default};
  }
`;

export default GlobalStyle