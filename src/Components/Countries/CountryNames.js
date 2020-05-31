import React from "react";
import { Link } from "react-router-dom";

const CountryName = ({ countrydata }) => {
  const filteredCountry = (letter) => {
    return countrydata.filter((country) => country.name[0] === letter);
  };

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "Y",
    "Z",
  ];
  return (
    <div>
      {alphabet.map((a) => (
        <div>
          <h1>{a}</h1>
          {filteredCountry(a).map((raw) => (
            <h2 key={raw.name}>
              <Link to={`/country/${raw.callingCodes}`}> {raw.name}</Link>
            </h2>
          ))}
        </div>
      ))}
    </div>
  );
};
export default CountryName;
