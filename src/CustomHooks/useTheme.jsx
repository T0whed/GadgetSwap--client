import { useEffect, useState } from "react";

const UseTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("gadgetswap-theme");

    if (storedTheme) {
      const themeObject = JSON.parse(storedTheme);
      setDarkMode(themeObject.isDark);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);

      localStorage.setItem(
        "gadgetswap-theme",
        JSON.stringify({ isDark: prefersDark, source: "system" })
      );
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem(
        "gadgetswap-theme",
        JSON.stringify({ isDark: newMode, source: "user-selected" })
      );
      return newMode;
    });
  };

  return { darkMode, toggleDarkMode };
};

export default UseTheme;
