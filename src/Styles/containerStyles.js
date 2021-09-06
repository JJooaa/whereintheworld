// For global containers dividing the page into different sections

import styled from "styled-components";

export const TopBarContainer = styled.div`
    max-width: "100%";
    background: ${(props) => props.theme.elementBg};
    height: 100px;
    box-shadow: ${(props) => props.theme.cardShadow};

    @media only screen and (max-width: 570px) {
        height: 150px;
    }
`;

export const InputContainer = styled.div`
    max-width: 1430px;
    padding: 0px 60px 0px 60px;
    display: flex;
    justify-content: space-between;
    height: 150px;
    align-items: center;
    margin: 0 auto;

    @media only screen and (max-width: 630px) {
        flex-direction: column;
        justify-content: space-evenly;
        padding: 0px 10px 0px 10px;
        align-items: flex-start;
        height: 200px;
    }
`;

export const CountriesContainer = styled.div`
    max-width: 1440px;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-left: 30px;
    padding-right: 30px;
`;
