import React, { useState, useEffect } from "react";
import "./All.css";
import SearchInput from "../../Components/SearchInput/SearchInput";
import SearchList from "../../Components/SearchList/SearchList";
import CountryCard from "../../Components/CountryCard/CountryCard";
import { fetchCountries } from "../../Util/Api";
import LazyLoad from "react-lazyload";

const All = ({
    setCurrentCountry,
    filterData,
    setInput,
    setFilterData,
    countries,
}) => {
    return (
        <div className="all">
            <div className="inputs-container">
                <SearchInput setInput={setInput} />
                <SearchList
                    setFilterData={setFilterData}
                    countries={countries}
                />
            </div>
            <div className="countries">
                {filterData.map((item) => {
                    return (
                        <CountryCard
                            item={item}
                            setCurrentCountry={setCurrentCountry}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default All;
