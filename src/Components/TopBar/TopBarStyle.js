import styled from "styled-components";

/* 
    TopBarContainer can be found at "src/styles/containerStyles" 
    for all the global styles
*/

export const TopBarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 60px;
    padding-right: 63px;
    max-width: 1430px;
    margin: 0 auto;
    height: 100%;
    flex-wrap: wrap;
`;

export const Header = styled.h1`
    color: ${(props) => props.theme.text};
`;

export const NightMode = styled.div`
    display: flex;
    width: 110px;
    justify-content: space-between;
    font-weight: 600;
    cursor: pointer;
    user-select: none;
`;

export const Image = styled.img`
    width: 20px;
    height: 20px;
    background-image: url(${(props) => props.theme.nightMode});
`;

export const Paragraph = styled.p`
    font-weight: 600;
`;
