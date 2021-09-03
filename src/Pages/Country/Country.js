import React, { useEffect } from "react";
import "./Country.css";
import commaNumber from "comma-number";
import { Link } from "react-router-dom";
import { Button } from "./style";

const Country = ({
    currentCountry,
    setCurrentCountry,
    countries,
    setInput,
}) => {
    useEffect(() => {
        setInput("");
    }, []);

    const borderCountry = (code) => {
        countries.filter((item) => {
            if (item.alpha3Code.toLowerCase() === code.toLowerCase()) {
                setCurrentCountry(item);
            }
        });
    };

    const fullName = (code) => {
        let name = "";
        countries.filter((item) => {
            if (item.alpha3Code.toLowerCase() === code.toLowerCase()) {
                name += item.name;
            }
        });
        return name;
    };

    return (
        <>
            <div
                style={{ maxWidth: 1250, marginLeft: "auto", marginRight: "auto" }}
            >
                <Link to="/">
                    <Button primary onClick={() => setCurrentCountry([])}>
                        Back
                    </Button>
                </Link>
            </div>
            <div className="country-container">
                <div className="image-container">
                    <img src={currentCountry.flag} />
                </div>

                <div className="country-content-container">
                    <h2>{currentCountry.name}</h2>
                    <div className="country-content">
                        <div style={{width: 300}}>
                            <p>
                                <span>Native Name: </span>
                                {currentCountry.nativeName}
                            </p>
                            <p>
                                <span>Population: </span>
                                {commaNumber(currentCountry.population)}
                            </p>
                            <p>
                                <span>Region: </span> {currentCountry.region}
                            </p>
                            <p>
                                <span>Sub Region: </span>
                                {currentCountry.subregion}
                            </p>
                            <p>
                                <span>Capital: </span>
                                {currentCountry.capital}
                            </p>
                        </div>
                        <div style={{width: 300}}>
                            <p>
                                <span>Top Level Domain: </span>
                                {currentCountry.topLevelDomain}
                            </p>
                            <p>
                                <span>Currencies: </span>
                                {currentCountry.currencies.map(
                                    (currency) => currency.name
                                )}
                            </p>
                            <p>
                                <span>Languages: </span>
                                {currentCountry.languages.map(
                                    (language) => language.name + ", "
                                )}
                            </p>
                        </div>
                    </div>
                    <p style={{ fontWeight: 800, width: 200, paddingTop: 30, }}>
                        Border Countries:
                    </p>
                    <div className="border-countries">
                        {currentCountry.borders.length > 0 ? (
                            currentCountry.borders.map((code) => {
                                return (
                                    <Link to={`/${fullName(code)}`}>
                                        <Button
                                            onClick={() => borderCountry(code)}
                                        >
                                            {fullName(code)}
                                        </Button>
                                    </Link>
                                );
                            })
                        ) : (
                            <p>
                                {currentCountry.name} has no border countries.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Country;
