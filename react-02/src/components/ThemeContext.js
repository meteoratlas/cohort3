import React from "react";

const themes = { lightMode: {}, darkMode: {} };

const ThemeContext = React.createContext({
    theme: themes.darkMode,
    fontSize: 11
});

export default ThemeContext;
