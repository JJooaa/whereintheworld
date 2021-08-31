import searchWhite from "../images/search-white.svg";
import searchBlack from "../images/search-black.svg";

export const darkTheme = {
    theme: "dark",
    background: "hsl(207, 26%, 17%)",
    text: "white",
    elementBg: "hsl(209, 23%, 22%)",
    cardShadow: "0px 0px 5px hsla(0,0%,0%, 0.2)",
    searchImg: searchWhite,
};

export const lightTheme = {
    theme: "light",
    background: "hsl(0, 0%, 98%)",
    text: "black",
    elementBg: "white",
    cardShadow: "0px 0px 5px hsla(0, 0%, 52%, 0.24)",
    searchImg: searchBlack,
};
