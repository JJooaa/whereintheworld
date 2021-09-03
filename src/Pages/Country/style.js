import styled from "styled-components";

// Primary is our back-button
// Non default is border-countries-button

export const Button = styled.button`
    min-width: 100px;
    height: ${(props) => (props.primary ? "35px" : "40px")};
    margin: ${(props) =>
        props.primary ? "50px 0px 50px 60px" : "10px 10px 10px 0px"};
    border: none;
    box-shadow: ${(props) => props.theme.cardShadow};
    border-radius: 5px;
    background-color: ${(props) => props.theme.elementBg};
    cursor: pointer;

    &:hover {
        box-shadow: ${(props) => props.theme.hoverShadow};
    }
`;
