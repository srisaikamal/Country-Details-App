import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryName from "../Countries/CountryNames";

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await axios.get(`https://restcountries.eu/rest/v2/`);
    setData(data.data);
  };

  return (
    <div key={data.callingCodes}>
      <CountryName countrydata={data} />
    </div>
  );
};
export default Api;
