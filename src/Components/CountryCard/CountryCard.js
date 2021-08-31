import React from "react";
import commaNumber from "comma-number";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { Card, CardImage, CardContent } from "./style";

const CountryCard = ({ setCurrentCountry, item }) => {
    return (
        <Link to={`/${item.name}`}>
            <Card onClick={() => setCurrentCountry(item)}>
                <LazyLoad throttle={50}>
                    <CardImage alt={item.name} src={item.flag} />
                </LazyLoad>
                <LazyLoad throttle={50}>
                    <CardContent>
                        <h3>{item.name}</h3>
                        <p>
                            <span>Population:</span>{" "}
                            {commaNumber(item.population)}
                        </p>
                        <p>
                            <span>Region:</span> {item.region}
                        </p>
                        <p>
                            <span>Capital:</span> {item.capital}
                        </p>
                    </CardContent>
                </LazyLoad>
            </Card>
        </Link>
    );
};

export default CountryCard;
