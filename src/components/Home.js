import React, { useState, useEffect } from "react";
import Countries from "./countries";
import Forms from "./forms";

function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [choose, setChoose] = useState("");
  const [url, setUrl] = useState("https://restcountries.eu/rest/v2/all");

  //const url = "https://restcountries.eu/rest/v2/all";
  //urlSelect = `https://restcountries.eu/rest/v2/region/${region}`;
  //nameSearch = `https://restcountries.eu/rest/v2/name/{name}`

  useEffect(() => {
    const getItems = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          //const fewData = data.splice(0, 12);
          //console.log(data);
          setCountries(data);
        });
    };

    getItems();
  }, [url]);

  const onChange = (e) => {
    setSearch(e.target.value);
    let name = e.target.value;
    let newUrl = `https://restcountries.eu/rest/v2/name/${name}`;
    name !== "" ? setUrl(newUrl) : setUrl(url);
  };

  const onSelect = (e) => {
    setChoose(e.target.value);
    let region = e.target.value;
    let newUrl = `https://restcountries.eu/rest/v2/region/${region}`;
    region !== "" ? setUrl(newUrl) : setUrl(url);
  };

  return (
    <div className="container">
      <Forms
        handleChange={onChange}
        search={search}
        select={choose}
        handleSelect={onSelect}
      />

      <div className="holder">
        <p className="count">{countries.length} countries</p>
        <div className="item-container">
          {countries.map((country) => (
            <Countries
              key={country.alpha3Code}
              flag={country.flag}
              name={country.name}
              capital={country.capital}
              population={country.population}
              region={country.region}
              borders={country.borders}
              id={country.alpha3Code}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
