import React from "react";
import { TopBarContainer } from "../../Styles/containerStyles";
import { TopBarWrapper, NightMode, Header, Image } from "./TopBarStyle";
import nightModeBlack from "../../images/night-mode-black.svg";
import nightModeWhite from "../../images/night-mode-white.svg";

const TopBar = ({ toggleTheme, theme }) => {
    return (
        <TopBarContainer>
            <TopBarWrapper>
                <Header>Where in the world?</Header>
                <NightMode onClick={() => toggleTheme()}>
                    <Image
                        src={
                            theme === "light" ? nightModeBlack : nightModeWhite
                        }
                    />
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                </NightMode>
            </TopBarWrapper>
        </TopBarContainer>
    );
};

export default TopBar;
