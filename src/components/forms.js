import React from "react";
//import Style from "./css/forms.module.css";

const Forms = ({ select, search, handleSelect, handleChange }) => {
  return (
    <div className="">
      <div className="forms">
        <div className="search">
          <input
            type="search"
            placeholder="Search by countries..."
            value={search}
            onChange={handleChange}
          />
        </div>
        <div className="select">
          <select className="choose" value={select} onChange={handleSelect}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Forms;
