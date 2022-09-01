import { useThemeContext } from "../theme/ThemeProvider";

/** 
 * 
    Used to change any value or style based on the color mode.
    Returns lightModeValue in Light Mode and darkModeValue in Dark Mode.
*/
export const useColorModeValue = (lightModeValue, darkModeValue) => {
  const { theme } = useThemeContext();

  return theme === "light" ? lightModeValue : darkModeValue;
};
