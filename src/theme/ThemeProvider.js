import React, {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext();

const themes = {
    dark: "dark",
    light: "light",
};

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const changeTheme = (theme) => {
        setTheme(theme);
    };

    useEffect(() => {
        switch (theme) {
            case themes.light:
                localStorage.setItem("theme", theme);
                document.body.classList.remove("dark");
                break;
            case themes.dark:
                document.body.classList.add("dark");
                localStorage.setItem("theme", theme);
                break
            default:
                document.body.classList.remove("dark");
                localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};

export {ThemeProvider};
