import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchCountries } from "./Util/Api";
import All from "./Pages/All/All";
import CountryCard from "./Components/CountryCard/CountryCard";
import TopBar from "./Components/TopBar/TopBar";
import Country from "./Pages/Country/Country";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [input, setInput] = useState("");
    const [currentCountry, setCurrentCountry] = useState([]);

    useEffect(() => {
        fetchCountries(setCountries, setFilterData);
    }, []);

    useEffect(() => {
        setFilterData(
            countries.filter((item) =>
                item.name.toLowerCase().includes(input.toLowerCase())
            )
        );
    }, [input]);

    return (
        <div className="App">
            <TopBar />
            {Object.keys(currentCountry).length > 0 ? (
                <Country
                    countries={countries}
                    currentCountry={currentCountry}
                    setCurrentCountry={setCurrentCountry}
                    setInput={setInput}
                />
            ) : (
                <All
                    setFilterData={setFilterData}
                    countries={countries}
                    setInput={setInput}
                    filterData={filterData}
                    setCurrentCountry={setCurrentCountry}
                />
            )}
        </div>
    );
};

export default App;
