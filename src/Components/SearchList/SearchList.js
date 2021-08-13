import React, { useState } from "react";
import "./SearchList.css";

const SearchList = ({ setFilterData, countries }) => {
    const [isActive, setIsActive] = useState(false);

    const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

    const filterRegion = (e) => {
        const id = e.target.id;
        if (id === "All") {
            setFilterData(countries);
        } else {
            setFilterData(countries.filter((item) => item.region.includes(id)));
        }
    };

    const setActive = () => {
        setIsActive((prevState) => !prevState);
    };

    return (
        <div>
            <div className={"search-list"} onClick={() => setActive()}>
                Filter by Region
            </div>
            {isActive ? (
                <div className="dropdown">
                    {regions.map((item) => {
                        return (
                            <p
                                id={item}
                                onClick={(e) => {
                                    setIsActive(false);
                                    filterRegion(e);
                                }}
                            >
                                {item}
                            </p>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
};

export default SearchList;
