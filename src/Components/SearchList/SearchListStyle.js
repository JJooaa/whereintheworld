import styled from "styled-components";

export const SearchListBox = styled.div`
    min-width: 200px;
    height: 60px;
    border: none;
    box-shadow: ${(props) => props.theme.cardShadow};
    background-color: ${(props) => props.theme.elementBg};
    border-radius: 5px;
    padding: 0px 10px 0px 20px;
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    transition: box-shadow 0.1s ease-out;
    background-image: url(${props => props.theme.hamburger});
    background-repeat: no-repeat;
    background-position: 160px 23px;
    background-size: 16px;

    &:hover {
        box-shadow: ${(props) => props.theme.hoverShadow};
    }
`;

export const DropDown = styled.div`
    position: absolute;
    background-color: ${(props) => props.theme.elementBg};
    width: 200px;
    height: 186px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: ${(props) => props.theme.cardShadow};
    margin-top: 4px;
    z-index: 999;
    justify-content: center;
    top: 100%;
    right: 0;
    left: 0;
`;

export const ListItem = styled.p`
    font-weight: 600;
    font-size: 14px;
    padding-left: 20px;
    padding-top: 6px;
    padding-bottom: 6px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;

    &:hover {
        box-shadow: ${(props) => props.theme.hoverShadow};
    }
`;
