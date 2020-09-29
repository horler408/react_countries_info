import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Country from "./country";

export default function AppCountry() {
  const [countries, setCountries] = useState([]);

  const url = "https://restcountries.eu/rest/v2/all";

  useEffect(() => {
    const getCountries = () => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          const smallResult = result.splice(0, 10);
          setCountries(smallResult);
        });
    };

    getCountries();
  }, [url]);

  return (
    <div>
      {countries.map((country, index) => (
        <Link key={index} to={`/country/${country.alpha3Code}`}>
          <Country
            name={country.name}
            flag={country.flag}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        </Link>
      ))}
    </div>
  );
}
