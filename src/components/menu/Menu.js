import React, { useState } from "react";
import styles from "./Menu.module.css";
import { Routes, Route, Link } from "react-router-dom";
import { ReactComponent as SunSvg } from "../../assets/hero/sun.svg";
import { ReactComponent as MoonSvg } from "../../assets/hero/moon.svg";
import { ReactComponent as DevfestLightSvg } from "../../assets/hero/devfest-light.svg";
import { ReactComponent as DevfestDarkSvg } from "../../assets/hero/devfest-dark.svg";
import { ReactComponent as OrangeSvg } from "../../assets/hero/illustration/orange.svg";
import { ReactComponent as HamSvg } from "../../assets/hero/hamburger.svg";
import { useThemeContext } from "../../theme/ThemeProvider";
import { useColorModeValue } from "../../hooks/useColorModeValue";

const Menu = () => {
    const { theme, changeTheme } = useThemeContext();
    const [showMenu, setshowMenu] = useState(false)

    const handleClick = () => {
        changeTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <section className={styles['menu']}>
            <div className={styles['hamburger']}>
                <HamSvg fill="#fff" onClick={() => setshowMenu(!showMenu)}></HamSvg>
            </div>
            <div className={styles['devfest2022']}>
                <div className={styles['devfest-icon']}>
                    {useColorModeValue(<DevfestDarkSvg />, <DevfestLightSvg />)}
                </div>
                <div className={styles['nagpur-theme']}>
                    <span style={{ color: useColorModeValue('#202124', '#fff') }}>Nagpur</span>
                    <span><OrangeSvg /></span>
                </div>
            </div>

            <nav className={styles['navigation']} style={{ display: showMenu && "flex" }}>
                <ul style={{ color: useColorModeValue('#fff', '#fff'), display: showMenu && "flex" }}>
                    <li className={`${styles['menu-item']} ${styles['menu-item-active']}`}><Link style={{ color: useColorModeValue('#202124', '#fff') }} to="/">Home</Link></li>
                    <li className={styles['menu-item']} ><Link style={{ color: useColorModeValue('#202124', '#fff') }} to="/why-devfest">Why Devfest?</Link></li>
                    <li className={styles['menu-item']}><Link style={{ color: useColorModeValue('#202124', '#fff') }} to="/speakers">Speakers</Link></li>
                    <li className={styles['menu-item']}><Link style={{ color: useColorModeValue('#202124', '#fff') }} to="/team">Our Team</Link></li>
                    <li className={styles['menu-item']}><Link style={{ color: useColorModeValue('#202124', '#fff') }} to="/takeaways">Takeaways</Link></li>
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
        </section >
    );
};

export default Menu;
