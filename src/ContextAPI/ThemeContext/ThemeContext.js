import React from "react";

export const ThemeContext = React.createContext(
  {
    themeContext: {
      color: null,
      setColor : () =>{}
    }
  }
);