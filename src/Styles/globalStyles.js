import { createGlobalStyle } from "styled-components";
// dark bg hsl(207, 26%, 17%)

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: ${(props) => props.theme.background};
        color: black;
        transition: background-color 1s;
    }

    div {
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    div,
    p,
    a,
    span,
    ::placeholder,
    input,
    button {
    color: ${(props) => props.theme.text};
    margin: 0;
    font-family: "Nunito Sans", sans-serif;
    text-decoration: none;
}

`;

export default GlobalStyle;
