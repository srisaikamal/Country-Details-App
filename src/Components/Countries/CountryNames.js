import React from "react";
import { Link } from "react-router-dom";
import "../../sass/main.scss";

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
      <h1 className="heading">All Country Details</h1>
      {alphabet.map((a) => (
        <div className="countries">
          <h1 className="Alphabets">{a}</h1>
          {filteredCountry(a).map((raw) => (
            <ul>
              <li>
                <Link
                  className="countrynames"
                  to={`/country/${raw.alpha3Code}`}
                >
                  {" "}
                  {raw.name}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};
export default CountryName;
