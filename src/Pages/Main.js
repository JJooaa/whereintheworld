import React from "react";
import { InputContainer, CountriesContainer } from "../Styles/containerStyles";
import SearchInput from "../Components/SearchInput/SearchInput";
import SearchList from "../Components/SearchList/SearchList";
import CountryCard from "../Components/CountryCard/CountryCard";

// Main page, where you can search for a country, search region or choose a country

const Main = ({
    setCurrentCountry,
    filterData,
    setInput,
    setFilterData,
    countries,
}) => {
    return (
        <>
            <InputContainer>
                <SearchInput setInput={setInput} />
                <SearchList
                    setFilterData={setFilterData}
                    countries={countries}
                />
            </InputContainer>
            <CountriesContainer>
                {filterData.map((item) => (
                    <CountryCard
                        key={item.name}
                        item={item}
                        setCurrentCountry={setCurrentCountry}
                    />
                ))}
            </CountriesContainer>
        </>
    );
};

export default Main;
