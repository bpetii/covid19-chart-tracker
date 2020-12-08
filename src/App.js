import React, { useEffect, useState } from "react";

import styles from "./App.module.css";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import { fetchData } from "./api";

function App() {
  const [data, setData] = useState({});

  useEffect(async () => {
    const fetchedData = await fetchData();
    setData({ ...fetchedData });
  }, []);
  return (
    <div className={styles.container}>
      {console.log(data)}

      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
