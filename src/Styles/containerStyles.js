// For global containers dividing the page into different sections

import styled from "styled-components";

export const TopBarContainer = styled.div`
    max-width: "100%";
    background: ${(props) => props.theme.elementBg};
    height: 100px;
    box-shadow: ${(props) => props.theme.cardShadow};
`;

export const InputContainer = styled.div`
    max-width: 1430px;
    padding: 0px 60px 0px 60px;
    display: flex;
    justify-content: space-between;
    height: 150px;
    align-items: center;
    margin: 0 auto;
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
