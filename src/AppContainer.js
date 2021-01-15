import React, { useState } from "react";
import { ThemeContext } from "styled-components";
import { App } from "./App";
import { getLanguages } from "./const/languages";
import { THEMES } from "./contexts/ThemeContext";
import { withLoading } from "./hoc/withLoading";

//withLoadingを使っているとAppにうまくThemeを反映できない
//ので、withLoadingを囲うためのAppContainerを使う

const AppComponent = withLoading(App, getLanguages);

export const AppContainer = () => {
  const [theme, setTheme] = useState(THEMES.dark);
  //darkならlight,lightならdarkと変換する関数
  const toggleTheme = () => {
    const nextTheme = theme === THEMES.dark ? THEMES.light : THEMES.dark;
    setTheme(nextTheme);
  };
  //Contextを使うにはProviderタグを適用したいコンポーネントの上に配置する必要がある
  //Contextの内容はvalue属性にいれる
  //toggleTheme関数の参照を与える
  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <AppComponent />
    </ThemeContext.Provider>
  );
};
