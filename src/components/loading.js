import React from "react";

export default function loading({ loading, countries }) {
  const preloader = () => {
    if (loading) return <div>fetching data...</div>;
    if (countries.length < 1) return <div>No data found!</div>;
  };
  return <div className="preloading">{preloader()}</div>;
}
