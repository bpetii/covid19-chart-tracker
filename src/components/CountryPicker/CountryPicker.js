import React, { useState, useEffect } from "react";

/* import styles from "./CountryPicker.module.css"; */

const CountryPicker = (props) => {
  return (
    <form>
      <label for="countries">Choose a country</label>
      <select name="countries" id="countries">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </form>
  );
};

export default CountryPicker;
