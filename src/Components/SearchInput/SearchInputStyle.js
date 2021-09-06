import styled from "styled-components";

export const Input = styled.input`
    width: 500px;
    height: 60px;
    border: none;
    outline: none;
    box-shadow: ${(props) => props.theme.cardShadow};
    border-radius: 5px;
    transition: box-shadow 0.1s ease-out;
    background-image: url(${(props) => props.theme.searchImg});
    background-repeat: no-repeat;
    padding-left: 80px;
    background-size: 24px;
    background-position: 35px;
    font-size: 14px;
    font-weight: 600;
    margin-right: 20px;
    background-color: ${(props) => props.theme.elementBg};
    cursor: pointer;
    box-sizing: border-box;

    &::placeholder {
        color: ${(props) => props.theme.text};
        font-size: 14px;
        font-weight: 300;
    }

    &:hover {
        box-shadow: ${(props) => props.theme.hoverShadow};
    }

    @media only screen and (max-width: 630px) {
        width: 100%;
    }
`;
