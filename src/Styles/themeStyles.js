import searchWhite from "../images/search-white.svg";
import searchBlack from "../images/search-black.svg";
import arrowWhite from "../images/right-arrow-white.svg";
import arrowBlack from "../images/right-arrow-black.svg";
import menuWhite from "../images/menu-white.svg";
import menuBlack from "../images/menu-black.svg";


export const darkTheme = {
    theme: "dark",
    background: "hsl(207, 26%, 17%)",
    text: "white",
    elementBg: "hsl(209, 23%, 22%)",
    cardShadow: "0px 0px 5px hsla(0,0%,0%, 0.2)",
    searchImg: searchWhite,
    hoverShadow: "0px 0px 5px hsl(0,0%,0%, 0.6)",
    buttonLeft: arrowWhite,
    hamburger: menuWhite,
};

export const lightTheme = {
    theme: "light",
    background: "hsl(0, 0%, 98%)",
    text: "black",
    elementBg: "white",
    cardShadow: "0px 0px 5px hsla(0, 0%, 52%, 0.24)",
    searchImg: searchBlack,
    hoverShadow: "0px 0px 5px hsla(0, 0%, 27%, 0.5)",
    buttonLeft: arrowBlack,
    hamburger: menuBlack,
};
