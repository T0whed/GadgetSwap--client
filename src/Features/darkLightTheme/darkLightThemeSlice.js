import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("gadgetswap-theme");
  if (savedTheme) {
    const parsedTheme = JSON.parse(savedTheme);
    return {
      isDark: parsedTheme.isDark,
      source: parsedTheme.source,
    };
  }

  const defaultTheme = { isDark: false, source: "default" };
  localStorage.setItem("gadgetswap-theme", JSON.stringify(defaultTheme));
  return defaultTheme;
};

const darkLightThemeSlice = createSlice({
  name: "darkLightTheme",
  initialState: getInitialTheme(),
  reducers: {
    toggleDarkTheme: (state) => {
      state.isDark = !state.isDark;
      state.source = "user-preference";
      localStorage.setItem(
        "gadgetswap-theme",
        JSON.stringify({ isDark: state.isDark, source: state.source })
      );
    },
  },
});

export const { toggleDarkTheme } = darkLightThemeSlice.actions;
export default darkLightThemeSlice.reducer;
