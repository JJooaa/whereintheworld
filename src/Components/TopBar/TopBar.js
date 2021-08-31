import React from "react";
import { TopBarContainer } from "../../Styles/containerStyles";
import { TopBarWrapper, NightMode, Header, Image } from "./style";
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
                    Dark Mode
                </NightMode>
            </TopBarWrapper>
        </TopBarContainer>
    );
};

export default TopBar;
