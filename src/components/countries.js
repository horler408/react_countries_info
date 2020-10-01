import React from "react";
//import Style from "./css/countries.module.css";
import { Link } from "react-router-dom";

const Countries = ({
  borders,
  id,
  flag,
  name,
  population,
  region,
  capital,
}) => {
  return (
    <div className="menu-item">
      <Link to={`/${id}`}>
        <img src={flag} alt="Country Flag" className="img" />
      </Link>

      <div className="wrapper">
        <h3>{name}</h3>
        <p>
          <span className="title">Capital:</span> {capital}
        </p>
        <p>
          <span className="title">Population:</span> {population}
        </p>
        <p>
          <span className="title">Region:</span> {region}
        </p>
        <p>
          <span className="title">Borders:</span>{" "}
          {borders.map((border) => border + ", ")}
        </p>
      </div>
    </div>
  );
};

export default Countries;
