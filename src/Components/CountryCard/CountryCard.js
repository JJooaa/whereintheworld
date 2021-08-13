import React from "react";
import "./CountryCard.css";
import commaNumber from "comma-number";

const CountryCard = ({ setCurrentCountry, item }) => {
    return (
        <div className="country" onClick={() => setCurrentCountry(item)}>
            <img className="country-image" src={item.flag} />
            <div className="country-info">
                <h3>{item.name}</h3>
                <p>
                    <span>Population:</span> {commaNumber(item.population)}
                </p>
                <p>
                    <span>Region:</span> {item.region}
                </p>
                <p>
                    <span>Capital:</span> {item.capital}
                </p>
            </div>
        </div>
    );
};

export default CountryCard;
