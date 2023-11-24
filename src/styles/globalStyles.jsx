import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&family=Work+Sans:wght@500&display=swap');
  body {
    margin: 0;
    padding: 0;
    background: #DFC4ED; 
    font-family: 'Rubik', sans-serif;
    color: #343e46; 
  }
`;

export default GlobalStyle