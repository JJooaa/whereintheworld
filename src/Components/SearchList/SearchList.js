import React, { useState } from "react";
import { SearchListBox, DropDown } from "./style";
// Component for choosing a region from a dropdown menu.

const SearchList = ({ setFilterData, countries }) => {
    const [isActive, setIsActive] = useState(false);
    const [currentRegion, setCurrentRegion] = useState("All Countries");

    const regions = [
        "All Countries",
        "Africa",
        "America",
        "Asia",
        "Europe",
        "Oceania",
    ];

    const filterRegion = (e) => {
        const id = e.target.id;
        if (id === "All Countries") {
            setFilterData(countries);
            setCurrentRegion("All Countries");
        } else {
            setFilterData(countries.filter((item) => item.region.includes(id)));
            setCurrentRegion(id);
        }
    };

    const setActive = () => {
        console.log("hello");
        setIsActive((prevState) => !prevState);
    };

    return (
        <SearchListBox onClick={() => setActive()}>
            {currentRegion}
            {isActive ? (
                <DropDown>
                    {regions.map((item) => (
                        <p
                            id={item}
                            onClick={(e) => {
                                setIsActive(false);
                                filterRegion(e);
                            }}
                        >
                            {item}
                        </p>
                    ))}
                </DropDown>
            ) : null}
        </SearchListBox>
    );
};

export default SearchList;
