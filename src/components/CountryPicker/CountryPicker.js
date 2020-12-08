import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";

const CountryPicker = ({ onChangeCountry }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const countryData = await fetchCountries();
      setCountries(countryData);
    };
    fetchAPI();
  }, []);

  return (
    <form>
      <label htmlFor="countries">Choose a country</label>
      <select
        name="countries"
        id="countries"
        onChange={(e) => onChangeCountry(e.target.value)}
      >
        <option key="global" value="">
          Global
        </option>
        {countries.map((country, index) => {
          return (
            <option key={index} value={country}>
              {country}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default CountryPicker;
