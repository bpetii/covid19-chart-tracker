import React from "react";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed);
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.cardContainer}>
      <div className={cx(styles.card, styles.infected)}>
        <div className={styles.head}>Infected</div>
        <div className={styles.details}>
          <h3>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </h3>
          <p>{new Date(lastUpdate).toDateString()}</p>
          <p>Number of active cases of COVID19</p>
        </div>
      </div>
      <div className={cx(styles.card, styles.recovered)}>
        <div className={styles.head}>Infected</div>
        <div className={styles.details}>
          <h3>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </h3>
          <p>{new Date(lastUpdate).toDateString()}</p>
          <p>Number of active cases of COVID19</p>
        </div>
      </div>
      <div className={cx(styles.card, styles.deaths)}>
        <div className={styles.head}>Infected</div>
        <div className={styles.details}>
          <h3>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </h3>
          <p>{new Date(lastUpdate).toDateString()}</p>
          <p>Number of active cases of COVID19</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
