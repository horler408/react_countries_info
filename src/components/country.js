import React, { useState, useEffect } from "react";
import style from "./css/country.module.css";

export default function Country({ history, match }) {
  //console.log(match);
  const [country, setCountry] = useState([]);

  const code = match.params.id;
  const url = `https://restcountries.eu/rest/v2/alpha/${code}`;

  useEffect(() => {
    const getCountry = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCountry(data);
        });
    };
    getCountry();
  }, [url]);

  return (
    <div className={style.container}>
      <div className={style.button}>
        <i className="fas fa-arrow-left"></i>
        <button onClick={() => history.push("/")}>Back</button>
      </div>
      <div className={style.wrapper}>
        <div className={style.flag}>
          <img src={country.flag} alt="Country Flag" />
        </div>
        <div className={style.details}>
          <div className={style.name}>
            <h1>{country.name}</h1>
          </div>
          <div className={style.top}>
            <div className={style.left_section}>
              <p>
                <span className="title">Native Name:</span>{" "}
                <span className={style.item}>{country.nativeName}</span>
              </p>
              <p>
                <span className="title">Population:</span> {country.population}
              </p>
              <p>
                <span className="title">Region:</span> {country.region}
              </p>
              <p>
                <span className="title">Sub Region:</span> {country.subregion}
              </p>
              <p>
                <span className="title">Capital:</span> {country.capital}
              </p>
            </div>

            <div className={style.right_section}>
              <p>
                <span className="title">Top Level Domain: </span>
                {country.topLevelDomain !== undefined
                  ? country.topLevelDomain.map((domain) => domain)
                  : ""}
              </p>
              <p>
                <span className="title"> Currencies: </span>
                {country.currencies !== undefined
                  ? country.currencies.map((currency) => currency.code)
                  : ""}
              </p>
              <p>
                <span className="title">Languages:</span>{" "}
                {country.languages !== undefined
                  ? country.languages.map((language, index) =>
                      index === language.name.length - 1
                        ? language.name
                        : language.name + ", "
                    )
                  : ""}
              </p>
            </div>
          </div>

          <div className={style.bottom}>
            <span className="title">Border Countries:</span>{" "}
            <ul className={style.borders}>
              {country.borders !== undefined
                ? country.borders.map((border, index) => (
                    <li key={index} className={style.border_list}>
                      {border}
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
