import React, { useState } from "react";

import styles from "./Circuit.module.css";

const Circuit = ({ name, city, country, id, url }) => {
  const [isHovering, setIsHovering] = useState(false);

  const circuitDetailsHandler = () => {
    setIsHovering((prevState) => !prevState);
  };
  /* 
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
 */
  const hoveredData = (
    <div className={styles.circuitHovering}>
      <div>
        <img
          src={`../flags/${country}.jpg`}
          alt="flag"
          className={styles.flagHovered}
        />
        <h2 className={styles.country}>{country}</h2>
      </div>
      <h1 className={styles.circuitName}>{name}</h1>
      <p className={styles.date}>28 APR 2023 - 30 APR 2023</p>
      <div className={styles.rolex}>
        <img
          className={styles.rolly}
          src="https://cdn-1.motorsport.com/static/img/amp/400000/410000/416000/416200/416237/s6_37384/nascar-cup-daytona-january-test-2012-the-new-rolex-clock-on-pitlane.jpg"
          alt="rolly"
        />
        <div>
          <p className={styles.city}>{city}</p>
          <p className={styles.time}>20.04</p>
        </div>
        <img
          className={styles.circuit}
          src={`../circuits/${country}-circuit.jpg`}
          alt="circuit"
        />
      </div>
      <a className={styles.wiki} href={url} target="_blank" rel="noreferrer">
        For further info
      </a>
    </div>
  );

  const unHoveredData = (
    <div /* onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} */>
      <img src={`../flags/${country}.jpg`} alt="flag" className={styles.flag} />
      <h2 className={styles.country}>{country}</h2>
      <h2 className={styles.day}>{`02`}</h2>
      <h2 className={styles.month}>Jul</h2>
    </div>
  );

  return (
    <div className={styles.container}>
      <div
        className={isHovering ? styles.cardContainerFull : styles.cardContainer}
        /* onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} */
        onClick={circuitDetailsHandler}
      >
        {isHovering && hoveredData}
        {!isHovering && unHoveredData}
        {/* {hoveredData} */}
      </div>
    </div>
  );
};

export default Circuit;
