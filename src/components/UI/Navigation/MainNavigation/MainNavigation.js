import React from "react";

import styles from "./MainNavigation.module.css";

import { NavLink, useNavigate } from "react-router-dom";

import ImageLink from "components/UI/ImageLink/ImageLink";

const MainNavigation = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };

  const navLinkStyle = ({ isActive }) => {
    return isActive ? styles.active : styles.link;
  };

  return (
    <div className={styles.navigation}>
      <div className={styles.topNav}>
        <a href="https://www.fia.com/" target="_blank" rel="noreferrer">
          <img
            className={styles.fia}
            src="https://cdn.worldvectorlogo.com/logos/fia-federation-internationale-de-lautomobile.svg"
            alt="FIA_LOGO"
          />
        </a>
        {Array(6) //exact same component 6 times
          .fill(true)
          .map((_, i) => (
            <ImageLink
              to="/constructors/mercedes"
              src="../constructors/mercedes-car.jpg"
              alt="FIA_LOGO"
              key={i}
            />
          ))}
      </div>
      <nav className={styles.navigationContainer}>
        <img
          className={styles.f1}
          src="../F1logo.jpeg"
          alt="F1_LOGO"
          onClick={navigateHandler}
        />

        {/* <ImageLink to="/" src="../F1logo.jpeg" alt="FIA_LOGO" /> */}

        <>
          <NavLink className={styles.link}>Latest</NavLink>
          <NavLink to="/standings" className={navLinkStyle}>
            Standings
          </NavLink>
          <NavLink to="/circuits" className={navLinkStyle}>
            Schedule
          </NavLink>
          <NavLink to="/drivers" className={navLinkStyle}>
            Drivers
          </NavLink>
          <NavLink to="/constructors" className={navLinkStyle}>
            Constructors
          </NavLink>
        </>
      </nav>
    </div>
  );
};

export default MainNavigation;
