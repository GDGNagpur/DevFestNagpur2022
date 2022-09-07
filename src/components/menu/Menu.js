import React, { useState } from "react";
import styles from "./Menu.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { ReactComponent as SunSvg } from "../../assets/hero/sun.svg";
import { ReactComponent as MoonSvg } from "../../assets/hero/moon.svg";
import { ReactComponent as DevfestLightSvg } from "../../assets/hero/devfest-light.svg";
import { ReactComponent as DevfestDarkSvg } from "../../assets/hero/devfest-dark.svg";
import { ReactComponent as OrangeSvg } from "../../assets/hero/illustration/orange.svg";
import { ReactComponent as HamSvg } from "../../assets/hero/hamburger.svg";
import { useThemeContext } from "../../theme/ThemeProvider";
import { useColorModeValue } from "../../hooks/useColorModeValue";
import menuData from "./menuData";

const Menu = () => {
    const { theme, changeTheme } = useThemeContext();
    const [showMenu, setShowMenu] = useState(false)

    const handleClick = () => {
        changeTheme(theme === "light" ? "dark" : "light");
    };

    const LinkColor = useColorModeValue("#202124", "#fff");

    return (
      <section
        style={{ borderBottom: useColorModeValue(null, "1px solid white") }}
        className={styles["menu"]}
      >
        <div className={styles["content"]}>
          <div
            onClick={() => setShowMenu((prevState) => !prevState)}
            className={
              showMenu
                ? `${styles["hamburger-btn"]} ${styles["open"]}`
                : styles["hamburger-btn"]
            }
          >
            <div
              className={useColorModeValue(
                styles["hamburger"],
                `${styles["hamburger"]} ${styles["dark"]}`
              )}
            ></div>
          </div>
          <NavLink to={"/"} className={styles["devfest2022"]}>
            <div className={styles["devfest-icon"]}>
              {useColorModeValue(<DevfestDarkSvg />, <DevfestLightSvg />)}
            </div>
            <div className={styles["nagpur-theme"]}>
              <span style={{ color: useColorModeValue("#202124", "#fff") }}>
                Nagpur
              </span>
              <span className={styles["orange-svg"]}>
                <OrangeSvg />
              </span>
            </div>
          </NavLink>
          <nav
            className={
              showMenu
                ? `${styles["navigation"]} ${styles["nav-open"]}`
                : styles["navigation"]
            }
            style={{ background: useColorModeValue("#fbfbfb", "#202124") }}
          >
            <ul
              style={{
                color: useColorModeValue("#fff", "#fff"),
              }}
            >
              {menuData.map((item) => {
                return (
                  <li key={item.id} className={styles["menu-item"]}>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? styles["active"] : ""
                      }
                      style={{
                        color: LinkColor,
                      }}
                      to={item.path}
                    >
                      <p>{item.title}</p>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={styles["toggle"]}>
            <div className={styles["mode"]}>
              {theme === "light" ? "Day" : "Night"}
            </div>
            <button onClick={handleClick}>
              {theme === "light" ? (
                <span>
                  <SunSvg />
                </span>
              ) : (
                <span className={styles["moon"]}>
                  <MoonSvg />
                </span>
              )}
            </button>
          </div>
        </div>
      </section>
    );
};

export default Menu;
