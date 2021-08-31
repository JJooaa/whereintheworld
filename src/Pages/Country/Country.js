import React, { useEffect } from "react";
import "./Country.css";
import commaNumber from "comma-number";
import { Link } from "react-router-dom";

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

    return (
        <>
            <div
                style={{ width: 1250, marginLeft: "auto", marginRight: "auto" }}
            >
                <Link to="/">
                    <button
                        className="back-button"
                        onClick={() => setCurrentCountry([])}
                    >
                        Back
                    </button>
                </Link>
            </div>
            <div className="country-container">
                <div className="image-container">
                    <img src={currentCountry.flag} />
                </div>

                <div className="country-content-container">
                    <h2>{currentCountry.name}</h2>
                    <div className="country-content">
                        <div>
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
                        <div>
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
                    <p style={{ fontWeight: 800, paddingTop: 30 }}>
                        Border Countries:
                    </p>
                    <div className="border-countries">
                        {currentCountry.borders.length > 0 ? (
                            currentCountry.borders.map((code) => {
                                return (
                                    <button
                                        onClick={() => borderCountry(code)}
                                        className="border-countries-button"
                                    >
                                        {code}
                                    </button>
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
