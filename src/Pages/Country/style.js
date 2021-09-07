import styled from "styled-components";

// Primary is our back-button
// default is border-countries-button

export const Button = styled.button`
    min-width: ${(props) => (props.primary ? "120px" : "100px")};
    height: ${(props) => (props.primary ? "35px" : "40px")};
    margin: ${(props) =>
        props.primary ? "50px 0px 50px 60px" : "10px 10px 10px 0px"};
    border: none;
    box-shadow: ${(props) => props.theme.cardShadow};
    border-radius: 5px;
    background-color: ${(props) => props.theme.elementBg};
    cursor: pointer;
    background-image: url(${(props) => props.primary && props.theme.buttonLeft});
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: 20px 10px;
    padding-left: ${(props) => props.primary && "30px"};
    transition: background-color 1s;

    &:hover {
        box-shadow: ${(props) => props.theme.hoverShadow};
    }
`;
