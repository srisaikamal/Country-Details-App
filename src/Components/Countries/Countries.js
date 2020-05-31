import React, { useState, useEffect } from "react";
import axios from "axios";
const Countries = ({ match }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await axios.get(
      `https://restcountries.eu/rest/v2/callingcode/${match.params.code}`
    );
    setData(data.data);
  };

  return (
    <div>
      <h1>{data.map((data) => data.name)}</h1>
      <h2>{data.map((data) => data.capital)}</h2>
      <h2>{data.map((data) => data.numericCode)}</h2>
    </div>
  );
};
export default Countries;
