import React, { useState, useEffect } from "react";
import dice from "../assets/images/icon-dice.svg";
import divider from "../assets/images/pattern-divider-desktop.svg";
import styles from "../modules/Advice.module.scss";
const Advice = () => {
  const [slip, setSlip] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => setSlip(data.slip));
    };
    fetchData();
  }, []);

  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <p className={styles["advice-id"]}>ADVICE #{slip.id}</p>
        <h2 className={styles["main-advice"]}>"{slip.advice}"</h2>
        <img src={divider} className={styles["divider"]} />
      </div>
      <button className={styles["button"]}>
        <img src={dice} />
      </button>
    </div>
  );
};

export default Advice;
