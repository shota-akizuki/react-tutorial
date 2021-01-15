import React from "react";

export const THEMES = {
  light: {
    color: "black",
    backgroundColor: "white",
  },

  dark: {
    color: "white",
    backgroundColor: "#222222",
  },
};

//第二引数に空の関数を定義する
export const ThemeContext = React.createContext([THEMES.dark, () => {}]);
