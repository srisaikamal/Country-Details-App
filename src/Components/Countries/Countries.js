import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import axios from "axios";
import "../../sass/main.scss";
const Countries = ({ match }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
    document.title = "All Country Details";
  }, []);

  const fetchData = async () => {
    const data = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${match.params.code}`
    );
    console.log(data.data);
    setData(data.data);
  };

  return (
    <div className="country--details">
      <h1 className="country--name" key={data.name}>
        {data.name} | {data.nativeName}
      </h1>
      <img className="country--flag" src={data.flag} alt={data.flag} />
      <p key={data.capital}>
        Capital: <strong>{data.capital}</strong>
      </p>
      <p key={data.topLevelDomain}>
        Top Level Domain: <strong>{data.topLevelDomain}</strong>
      </p>
      <p key={data.population}>
        Population:{" "}
        <CountUp
          className="population"
          start={0}
          end={data.population}
          separator=","
        />
      </p>
      <p key={data.region}>
        Continent: <strong>{data.region}</strong>
      </p>
      <p key={data.subregion}>
        Sub Region: <strong>{data.subregion}</strong>
      </p>
      {typeof data.currencies === "object"
        ? data.currencies.map((data) => (
            <p>
              Currency:{" "}
              <strong>
                {data.name} {data.symbol}
              </strong>
            </p>
          ))
        : null}
      {typeof data.callingCodes === "object"
        ? data.callingCodes.map((data) => (
            <p>
              Calling Code: <strong>+{data}</strong>
            </p>
          ))
        : null}

      {typeof data.languages === "object"
        ? data.languages.map((data) => (
            <p>
              Languages : <strong>{data.name}</strong>{" "}
              <strong>{data.nativeName}</strong>
            </p>
          ))
        : null}
      <footer className="footer">
        <p>
          &copy; 2020 Open-Source Project By{" "}
          <a className="footer--links" href="https://vsskamal.me">
            vsskamal
          </a>{" "}
          available on{" "}
          <a
            className="footer--links"
            href="https://github.com/srisaikamal/Country-Details-App"
          >
            GitHub
          </a>{" "}
          . Give a STAR if you like.{" "}
          <a className="footer--links" href="https://restcountries.eu/">
            Rest Countries for API
          </a>{" "}
          for API.
          <a href="https://www.netlify.com">
            <img
              className="netlify"
              src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
              alt="Deploys by Netlify"
            />
          </a>
        </p>
      </footer>
    </div>
  );
};
export default Countries;
