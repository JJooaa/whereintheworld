import styled from "styled-components";

export const Card = styled.div`
    width: 260px;
    height: 320px;
    background: ${(props) => props.theme.elementBg};
    margin: 30px;
    cursor: pointer;
    box-shadow: ${(props) => props.theme.cardShadow};
    border-radius: 8px;
    transition: transform 0.1s ease-out, box-shadow 0.1s ease-in-out;
    transition: background-color 1s;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const CardImage = styled.img`
    width: 260px;
    height: 160px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: cover;
`;

export const CardContent = styled.div`
    width: 100%;
    height: 150px;
    background-color: ${(props) => props.theme.elementBg};
    border-radius: 5px;
    padding: 10px 20px 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transition: background-color 1s;

    & p {
        font-size: 15px;
    }

    & span {
        font-weight: 600;
    }
`;
