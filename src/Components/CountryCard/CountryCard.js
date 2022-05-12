import React from "react";
import commaNumber from "comma-number";
import { Link } from "react-router-dom";
import { Card, CardImage, CardContent } from "./CountryCardStyle";

const CountryCard = ({ setCurrentCountry, item }) => {
  return (
    <Link to={`/${item.name}`}>
      <Card onClick={() => setCurrentCountry(item)}>
        <CardImage alt={item.name} src={item.flag} />
        <CardContent>
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
        </CardContent>
      </Card>
    </Link>
  );
};

export default CountryCard;
